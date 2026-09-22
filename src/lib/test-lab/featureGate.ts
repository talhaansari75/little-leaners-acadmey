export type TestStatus = "pending" | "passed" | "failed";

export type TestCase = {
  id: string;
  name: string;
  description: string;
  status: TestStatus;
};

export type LabFeature = {
  id: string;
  name: string;
  area: "parents" | "payments" | "mobile" | "auth";
  status: "lab" | "passed" | "promoted";
  tests: TestCase[];
};

/**
 * Release gate: a feature may leave Test Lab only when every required test passes.
 * This is intentionally kept separate from production routing so unfinished features
 * cannot silently become part of the main academy experience.
 */
export function canPromote(feature: LabFeature): boolean {
  return feature.tests.length > 0 && feature.tests.every((test) => test.status === "passed");
}

export const parentLabFeatures: LabFeature[] = [
  {
    id: "parent-dashboard",
    name: "Parents Dashboard",
    area: "parents",
    status: "lab",
    tests: [
      { id: "pd-login", name: "Parent login gate", description: "Dashboard is inaccessible without a parent session.", status: "pending" },
      { id: "pd-child", name: "Child linking", description: "Only linked children are shown.", status: "pending" },
      { id: "pd-progress", name: "Progress data", description: "Progress cards render without exposing another child's data.", status: "pending" },
      { id: "pd-mobile", name: "Mobile layout", description: "Dashboard remains usable at phone widths.", status: "pending" },
    ],
  },
  {
    id: "parent-profile",
    name: "Parent Profile",
    area: "parents",
    status: "lab",
    tests: [
      { id: "pp-edit", name: "Profile edit", description: "Validated profile fields can be changed safely.", status: "pending" },
      { id: "pp-privacy", name: "Privacy boundary", description: "Parent profile data is never rendered for another account.", status: "pending" },
      { id: "pp-mobile", name: "Mobile profile", description: "Profile form is usable on mobile.", status: "pending" },
    ],
  },
  {
    id: "parent-fees",
    name: "Parent Fees & Payments",
    area: "payments",
    status: "lab",
    tests: [
      { id: "fp-total", name: "Fee total", description: "Amounts and outstanding balance are calculated correctly.", status: "pending" },
      { id: "fp-idempotency", name: "Duplicate payment protection", description: "A repeated payment request cannot create a second charge.", status: "pending" },
      { id: "fp-webhook", name: "Webhook verification", description: "Only verified payment events can mark a fee as paid.", status: "pending" },
      { id: "fp-history", name: "Payment history", description: "Receipts and payment status are consistent.", status: "pending" },
    ],
  },
  {
    id: "parent-login",
    name: "Parent Login",
    area: "auth",
    status: "lab",
    tests: [
      { id: "pl-valid", name: "Valid credentials", description: "A valid parent account reaches the parent area.", status: "pending" },
      { id: "pl-invalid", name: "Invalid credentials", description: "Invalid credentials are rejected without leaking account details.", status: "pending" },
      { id: "pl-session", name: "Session protection", description: "Session expiry and logout prevent protected access.", status: "pending" },
      { id: "pl-rate", name: "Login abuse protection", description: "Repeated failed attempts are rate limited.", status: "pending" },
    ],
  },
  {
    id: "parent-mobile",
    name: "Parents Mobile Experience",
    area: "mobile",
    status: "lab",
    tests: [
      { id: "pm-360", name: "360px viewport", description: "Core parent flows work at 360px wide.", status: "pending" },
      { id: "pm-touch", name: "Touch targets", description: "Interactive controls have comfortable touch targets.", status: "pending" },
      { id: "pm-network", name: "Offline/error state", description: "Network failures produce a recoverable UI state.", status: "pending" },
    ],
  },
];
