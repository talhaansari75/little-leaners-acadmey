import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getPrisma } from "@/lib/db";
import { requirePermission } from "@/lib/security/authorization.server";

async function requireAdmin(userId: string) {
  await requirePermission(userId, "admin.audit");
}

export const getAdminSnapshot = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await requireAdmin(context.userId);
    const db = getPrisma();
    const now = Date.now();
    const day = 86_400_000;
    const [users, events24h, learningUsers, progressRows, auditRows, adConfig] = await Promise.all([
      db.user.findMany({ select: { id: true }, take: 100_000 }),
      db.gameplayEvent.count({ where: { createdAt: { gt: new Date(now - day) } } }),
      db.preschoolProgress.findMany({ select: { userId: true, updatedAt: true }, take: 100_000 }),
      db.preschoolProgress.findMany({ select: { updatedAt: true }, orderBy: { updatedAt: "DESC" }, take: 30 }),
      db.auditEvent.count({ where: { createdAt: { gt: new Date(now - day) } } }),
      Promise.resolve({
        configured: Boolean(import.meta.env.VITE_ADSENSE_PUBLISHER_ID?.trim()),
        publisherIdPresent: Boolean(import.meta.env.VITE_ADSENSE_PUBLISHER_ID?.trim()),
      }),
    ]);

    const activeToday = new Set(
      progressRows
        .filter((row) => row.updatedAt && row.updatedAt.getTime() > now - day)
        .map((row) => row.userId),
    ).size;

    const learningUserIds = new Set(progressRows.map((row) => row.userId));
    const recentLearning = progressRows.filter((row) => row.updatedAt && row.updatedAt.getTime() > now - 7 * day).length;

    return {
      ok: true as const,
      totalUsers: users.length,
      learningUsers: learningUserIds.size,
      activeToday,
      events24h,
      recentLearningUpdates: recentLearning,
      auditEvents24h: auditRows,
      ads: adConfig,
      privacy: {
        childProfiles: "aggregate-only",
        personalData: "not displayed",
        targetedAds: false,
      },
    };
  });

export const writeAdminNote = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { action: string; target?: string; note?: string }) => ({
    action: String(d.action ?? "").slice(0, 64),
    target: String(d.target ?? "").slice(0, 128),
    note: String(d.note ?? "").slice(0, 1000),
  }))
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await getPrisma().adminAuditNote.create({
      data: { adminUserId: context.userId, action: data.action, target: data.target, note: data.note },
    });
    return { ok: true as const };
  });
