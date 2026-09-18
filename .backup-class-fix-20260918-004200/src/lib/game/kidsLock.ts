const PIN_KEY = "mera-world.kids-lock.pin.v1";

async function hashPin(pin: string) {
  const data = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hasKidsLockPin() {
  return typeof localStorage !== "undefined" && Boolean(localStorage.getItem(PIN_KEY));
}

export async function setKidsLockPin(pin: string) {
  if (!/^\d{6}$/.test(pin)) return false;
  localStorage.setItem(PIN_KEY, await hashPin(pin));
  return true;
}

export async function verifyKidsLockPin(pin: string) {
  if (typeof localStorage === "undefined") return false;
  const lockKey = "mera-world.kids-lock.attempts";
  const now = Date.now();
  try {
    const state = JSON.parse(sessionStorage.getItem(lockKey) ?? "{}") as { count?: number; until?: number };
    if (Number(state.until ?? 0) > now) return false;
    const stored = localStorage.getItem(PIN_KEY);
    const ok = Boolean(stored) && stored === (await hashPin(pin));
    if (ok) { sessionStorage.removeItem(lockKey); return true; }
    const count = Number(state.count ?? 0) + 1;
    sessionStorage.setItem(lockKey, JSON.stringify(count >= 5 ? { count: 0, until: now + 30000 } : { count }));
    return false;
  } catch {
    const stored = localStorage.getItem(PIN_KEY);
    return Boolean(stored) && stored === (await hashPin(pin));
  }
}

export async function requestKidsFullscreen() {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    return true;
  } catch {
    return false;
  }
}

export async function exitKidsFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
  } catch {
    // Browser/OS may deny fullscreen changes.
  }
}
