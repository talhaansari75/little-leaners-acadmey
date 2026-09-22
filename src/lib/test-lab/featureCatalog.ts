export type LabFeature = {
  id: string;
  name: string;
  group: string;
  mode: "automated" | "manual" | "environment";
  description: string;
};

const N = [
["Test Execution","One-click full test run","automated"],["Test Execution","Single-feature test run","manual"],["Test Execution","Single-test run","manual"],["Test Execution","Test suite run","automated"],["Test Execution","Failed-tests-only run","automated"],["Test Execution","Pending-tests-only run","automated"],["Test Execution","Automated/manual test separation","manual"],["Test Execution","Test priority levels","manual"],["Test Execution","Test severity levels","manual"],["Test Execution","Test execution timer","automated"],
["Feature Testing","Feature launcher","manual"],["Feature Testing","Feature deep-link support","manual"],["Feature Testing","Feature-specific test workspace","manual"],["Feature Testing","Feature prerequisites checker","automated"],["Feature Testing","Feature health indicator","manual"],["Feature Testing","Feature coverage percentage","automated"],["Feature Testing","Feature readiness status","manual"],["Feature Testing","Feature dependency map","manual"],["Feature Testing","Feature version tracking","manual"],["Feature Testing","Feature change detection","manual"],
["Automation","Browser capability detection","automated"],["Automation","Storage test","automated"],["Automation","IndexedDB test","automated"],["Automation","Service-worker test","automated"],["Automation","PWA test","automated"],["Automation","Audio test","automated"],["Automation","Touch test","automated"],["Automation","Keyboard test","manual"],["Automation","Fullscreen test","automated"],["Automation","Network test","automated"],["Automation","Online/offline transition test","automated"],["Automation","Local persistence test","automated"],["Automation","Cache test","automated"],["Automation","Browser API compatibility test","automated"],["Automation","Automated regression suite","automated"],
["Manual QA","Step-by-step test instructions","manual"],["Manual QA","Expected-result field","manual"],["Manual QA","Actual-result field","manual"],["Manual QA","PASS / FAIL / BLOCKED / SKIP","manual"],["Manual QA","Tester notes","manual"],["Manual QA","Failure reproduction steps","manual"],["Manual QA","Attach screenshot","manual"],["Manual QA","Attach screen recording","manual"],["Manual QA","Attach console log","manual"],["Manual QA","Tester identity","manual"],["Manual QA","Test start/end timestamps","automated"],["Manual QA","Test duration","automated"],["Manual QA","Retest workflow","manual"],["Manual QA","Failure acknowledgement","manual"],["Manual QA","Test confirmation dialog","manual"],
["Bug Management","Create bug from failed test","manual"],["Bug Management","Bug ID generation","automated"],["Bug Management","Bug severity","manual"],["Bug Management","Bug priority","manual"],["Bug Management","Bug status","manual"],["Bug Management","Reproduction steps","manual"],["Bug Management","Expected vs actual result","manual"],["Bug Management","Browser/device information","automated"],["Bug Management","Console-error capture","automated"],["Bug Management","Network-error capture","automated"],["Bug Management","Bug history","manual"],["Bug Management","Link bug to test","manual"],["Bug Management","Link bug to feature","manual"],["Bug Management","Duplicate bug detection","manual"],["Bug Management","Regression bug detection","manual"],
["Analytics","Pass-rate chart","automated"],["Analytics","Failure-rate chart","automated"],["Analytics","Coverage chart","automated"],["Analytics","Category breakdown","automated"],["Analytics","Feature health matrix","automated"],["Analytics","Test execution timeline","automated"],["Analytics","Failure trend","automated"],["Analytics","Regression trend","automated"],["Analytics","Device compatibility matrix","automated"],["Analytics","Browser compatibility matrix","automated"],["Analytics","Network compatibility matrix","automated"],["Analytics","Test-duration analytics","automated"],["Analytics","Most frequently failing tests","automated"],["Analytics","Recently changed tests","manual"],
["Device Testing","Mobile viewport presets","automated"],["Device Testing","Tablet viewport presets","automated"],["Device Testing","Desktop viewport presets","automated"],["Device Testing","Custom viewport","manual"],["Device Testing","Touch simulation","environment"],["Device Testing","Orientation testing","environment"],["Device Testing","Device pixel ratio display","automated"],["Device Testing","User-agent information","automated"],["Device Testing","Battery/network information","environment"],["Device Testing","Responsive-layout screenshots","manual"],
["Network & Offline","Offline simulation","environment"],["Network & Offline","Slow-network simulation","environment"],["Network & Offline","Network recovery test","automated"],["Network & Offline","Request failure testing","environment"],["Network & Offline","Cache verification","automated"],["Network & Offline","Offline save verification","automated"],["Network & Offline","Sync verification","manual"],["Network & Offline","Sync conflict test","manual"],["Network & Offline","Retry-behavior test","manual"],["Network & Offline","Offline/online session report","automated"],
] as const;

export const TEST_LAB_FEATURES: LabFeature[] = N.map(([group, name, mode], index) => ({
  id: `lab-feature-${String(index + 1).padStart(3, "0")}`,
  name,
  group,
  mode,
  description: `Test Lab capability: ${name}.`,
}));

export const TEST_LAB_FEATURE_COUNT = TEST_LAB_FEATURES.length;
