const PIN_KEY = "little-learners-academy.parent-pin.v1";
const LEGACY_PIN_KEY = "mera-world.kids-lock.pin.v1";
const ATTEMPTS_KEY = "little-learners-academy.parent-pin.attempts";

async function hashPin(pin: string) {
  const data = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(
    new Uint8Array(digest),
    (b) => b.toString(16).padStart(2, "0"),
  ).join("");
}

function getStoredPin() {
  if (typeof window === "undefined") return null;

  try {
    const current = localStorage.getItem(PIN_KEY);
    if (current) return current;

    const legacy = localStorage.getItem(LEGACY_PIN_KEY);
    if (legacy) {
      localStorage.setItem(PIN_KEY, legacy);
      return legacy;
    }

    return null;
  } catch {
    return null;
  }
}

export async function hasKidsLockPin() {
  return Boolean(getStoredPin());
}

export async function setKidsLockPin(pin: string) {
  if (!/^\d{6}$/.test(pin)) return false;
  if (typeof window === "undefined") return false;

  try {
    localStorage.setItem(PIN_KEY, await hashPin(pin));
    localStorage.removeItem(LEGACY_PIN_KEY);
    sessionStorage.removeItem(ATTEMPTS_KEY);
    return true;
  } catch {
    return false;
  }
}

export async function verifyKidsLockPin(pin: string) {
  if (typeof window === "undefined") return false;
  if (!/^\d{6}$/.test(pin)) return false;

  const now = Date.now();

  try {
    const raw = sessionStorage.getItem(ATTEMPTS_KEY);
    const state = raw
      ? (JSON.parse(raw) as { count?: number; until?: number })
      : {};

    if (Number(state.until ?? 0) > now) return false;

    const stored = getStoredPin();
    if (!stored) return false;

    const ok = stored === (await hashPin(pin));

    if (ok) {
      sessionStorage.removeItem(ATTEMPTS_KEY);
      return true;
    }

    const count = Number(state.count ?? 0) + 1;

    sessionStorage.setItem(
      ATTEMPTS_KEY,
      JSON.stringify(
        count >= 5
          ? { count: 0, until: now + 30_000 }
          : { count },
      ),
    );

    return false;
  } catch {
    return false;
  }
}

export async function requestKidsFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    }
    return true;
  } catch {
    return false;
  }
}

export async function exitKidsFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  } catch {
    // Browser/OS may deny fullscreen changes.
  }
}
