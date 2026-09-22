export type QACategory =
  | "learning" | "literacy" | "math" | "creative" | "discovery"
  | "stories" | "audio" | "progress" | "offline" | "accessibility"
  | "ads" | "admin" | "mobile" | "data" | "release";

export type QAItem = {
  id: string;
  title: string;
  category: QACategory;
  description: string;
  automated?: "online" | "storage" | "indexeddb" | "service-worker" | "viewport" | "touch" | "audio";
};

const AUTO: Record<string, QAItem["automated"]> = {
  "Offline startup":"online","Local progress storage":"storage","IndexedDB availability":"indexeddb",
  "Service worker":"service-worker","Mobile viewport":"viewport","Touch interaction":"touch","Audio engine":"audio",
};

const RAW: Array<[QACategory,string,string]> = [
["learning","Class selection","Playgroup, Nursery, KG-1, KG-2 and Class 1 load the appropriate pathway."],
["learning","Learning activities","Available activities open and complete without crashes."],
["learning","Daily learning plan","The learning plan presents useful next activities."],
["learning","Daily mission","Completing learning activities advances the daily mission."],
["learning","Activity completion","Completing an activity is recorded once for the selected class."],
["learning","Stars and XP","Completed learning earns the configured stars and XP."],
["learning","Difficulty levels","Gentle, steady and challenge interactions behave as intended."],
["learning","Smart Teacher","Teacher guidance presents age-appropriate learning tips."],
["learning","Learning journey","The academy journey communicates progress clearly."],

["literacy","ABC and letters","Letter activities teach recognition and beginning sounds."],
["literacy","Phonics","Phonics activities provide letter-sound practice."],
["literacy","CVC words","CVC word activities work for the appropriate class."],
["literacy","Vocabulary","Picture-to-word vocabulary is readable and understandable."],
["literacy","English + Urdu words","Bilingual word cards display both languages correctly."],
["literacy","Writing workshop","Tracing and writing practice respond to touch/pointer input."],
["literacy","Rhymes","Rhythm and rhyme activities provide the expected learning interaction."],

["math","Counting","Counting activities present the intended number range."],
["math","Number recognition","Children can identify numbers from the activity choices."],
["math","Addition","Age-appropriate addition questions accept correct answers."],
["math","Subtraction","Age-appropriate subtraction questions accept correct answers."],
["math","Compare quantities","More/less and comparison activities give clear feedback."],
["math","Patterns","Pattern activities identify the next item correctly."],
["math","Shapes","Circle, square, triangle and star activities work."],
["math","Math mini quest","Math questions advance after correct answers."],

["creative","Color matching","Color matching responds correctly to selections."],
["creative","Coloring","Coloring interactions can be completed on touch devices."],
["creative","Art studio","Shapes, stickers and colors can be composed and cleared."],
["creative","Gallery","Saved creative work can be reopened where supported."],
["creative","Music","Simple instrument interactions produce sound when enabled."],
["creative","Rhythm","Rhythm activities remain usable without network access."],

["discovery","Nature Atlas","The animal discovery library opens and displays bundled artwork."],
["discovery","Animal sounds","Bundled animal sounds play where available."],
["discovery","Bird sounds","Bird discovery cards provide their supported audio."],
["discovery","My Body","Body-part learning presents clear prompts."],
["discovery","Vehicles","Vehicle discovery content opens correctly."],
["discovery","Plants and nature","Nature learning content remains readable and interactive."],
["discovery","Practical life","Daily-routine learning activities can be completed."],
["discovery","Montessori pathway","Montessori activities provide hands-on, repeatable practice."],

["stories","Story library","Stories load with artwork and readable text."],
["stories","Story narration","Narration controls read the active story when audio is available."],
["stories","Story questions","Story questions present clear choices and feedback."],
["stories","Story progression","Next-story navigation preserves a usable reading flow."],
["stories","Picture sequencing","Picture/order activities accept the intended sequence."],

["audio","Animal audio","Animal audio controls work without breaking the activity."],
["audio","Speech feedback","Speech feedback can be triggered from supported learning controls."],
["audio","Music controls","Music can be enabled or disabled from settings."],
["audio","Sound effects","SFX can be enabled or disabled from settings."],
["audio","Haptics","Haptic feedback respects the device capability and setting."],
["audio","Audio fallback","Missing/blocked audio never crashes learning."],

["progress","Progress by class","Progress remains separated by learning class."],
["progress","Level progression","XP updates the learner level at the configured thresholds."],
["progress","Reward garden","Learning rewards unlock from progress."],
["progress","Progress persistence","Progress survives reload on the same device."],
["progress","Cloud progress","Signed-in progress syncs through the existing cloud pathway."],

["offline","Offline startup","The academy remains usable when the network is unavailable.","online"],
["offline","Offline learning pack","The bundled learning pack can be prepared for offline use.","storage"],
["offline","Local progress storage","Learning progress can be saved locally.","storage"],
["offline","IndexedDB availability","The browser exposes IndexedDB where required.","indexeddb"],
["offline","Network recovery","Returning online does not erase local learning progress.","online"],
["offline","Service worker","The service worker is available for PWA/offline behavior.","service-worker"],

["accessibility","Touch targets","Primary controls remain comfortable on touch screens.","touch"],
["accessibility","Keyboard navigation","Core controls can be reached without a mouse."],
["accessibility","Large text","Large-text mode keeps core controls usable."],
["accessibility","High contrast","High-contrast mode preserves readable controls."],
["accessibility","Reduced motion","Reduced-motion preference is respected."],
["accessibility","RTL layout","RTL mode keeps navigation and content readable."],
["accessibility","Dyslexia-friendly text","The reading preference remains legible across learning screens."],

["ads","Free learning access","Every learning activity is available without payment or premium entitlement."],
["ads","Ad placement","Ads are outside the core activity interaction area."],
["ads","Ad labeling","Any displayed advertisement is clearly labeled."],
["ads","Ad failure safety","An unavailable ad never blocks or crashes learning."],
["ads","Responsive ad unit","Configured ads fit narrow phone layouts without horizontal overflow."],

["admin","Admin authentication","Only authorized administrators can access admin metrics."],
["admin","Usage overview","Admin dashboard summarizes academy usage and activity."],
["admin","Learning analytics","Admin dashboard exposes aggregate learning activity metrics."],
["admin","Offline/online health","Admin can inspect service/network health indicators."],
["admin","Ad monitoring","Admin can inspect ad configuration/status without exposing secrets."],
["admin","Audit visibility","Administrative actions are auditable."],

["mobile","390px layout","The academy works at a 390px-wide phone viewport.","viewport"],
["mobile","No horizontal overflow","Core academy screens fit the mobile viewport."],
["mobile","Bottom navigation","Home, Worlds, Learn, Sounds, Test Lab and Settings remain reachable."],
["mobile","Activity cards","Learning cards remain tappable and readable on phones."],
["mobile","Test Lab controls","Every Test Lab action remains usable on mobile."],
["mobile","Mobile Test Lab filters","Suite filtering and search remain usable with touch."],

["data","Export save","Supported local learning data can be exported."],
["data","Import validation","Invalid imported data fails safely."],
["data","Reset progress","Reset progress clears supported local learning state."],
["data","Class isolation","Switching classes does not mix their completion records."],

["release","Production build","The production build completes successfully."],
["release","Typecheck","TypeScript checks complete without errors."],
["release","Lint","Lint completes without errors."],
["release","Automated tests","The repository test suite completes successfully."],
["release","Desktop smoke test","Core academy screens render with no uncaught browser errors."],
["release","Mobile smoke test","Core academy screens render cleanly on a phone viewport."],
["release","QA export","Test Lab can export its current QA evidence."],
["release","Release gate","Release status reflects failed, blocked and pending checks."]
];

export const QA_ITEMS: QAItem[] = RAW.map(([category,title,description,automated], i) => ({
  id: `academy-qa-${String(i+1).padStart(3,"0")}`,
  title, category, description, automated: automated ?? AUTO[title],
}));

export const QA_CATEGORY_META: Record<QACategory,{label:string;icon:string}> = {
  learning:{label:"Core Learning",icon:"📚"}, literacy:{label:"Literacy & Phonics",icon:"🔤"},
  math:{label:"Math & Logic",icon:"🔢"}, creative:{label:"Creative Studio",icon:"🎨"},
  discovery:{label:"Discovery & Nature",icon:"🔎"}, stories:{label:"Stories",icon:"📖"},
  audio:{label:"Audio & Speech",icon:"🔊"}, progress:{label:"Progress",icon:"⭐"},
  offline:{label:"Offline",icon:"📴"}, accessibility:{label:"Accessibility",icon:"♿"},
  ads:{label:"Ads & Free Access",icon:"📢"}, admin:{label:"Admin",icon:"🛡️"},
  mobile:{label:"Mobile QA",icon:"📱"}, data:{label:"Learning Data",icon:"💾"},
  release:{label:"Release",icon:"🚀"},
};
