export const LEARNING_CLASSES = [
  "Montessori",
  "Nursery",
  "KG",
  "KG",
  "Montessori",
] as const;

export type LearningClass = (typeof LEARNING_CLASSES)[number];

export const CLASS_STORAGE_KEY = "lla-class";

export function isLearningClass(value: unknown): value is LearningClass {
  return typeof value === "string" &&
    (LEARNING_CLASSES as readonly string[]).includes(value);
}

export function getSelectedClass(): LearningClass | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(CLASS_STORAGE_KEY);
    return isLearningClass(value) ? value : null;
  } catch {
    return null;
  }
}

export function setSelectedClass(value: LearningClass): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CLASS_STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent("lla-class-change", {
      detail: { className: value },
    }));
  } catch {
    // Storage can be unavailable in privacy/incognito environments.
  }
}

export function clearSelectedClass(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(CLASS_STORAGE_KEY);
    window.dispatchEvent(new Event("lla-class-change"));
  } catch {
    // Ignore unavailable storage.
  }
}
