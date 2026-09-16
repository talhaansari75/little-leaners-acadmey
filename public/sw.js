const CACHE = "little-learners-preschool-v5-offline";
const RUNTIME = "little-learners-runtime-v5";
const APP_SHELL = [
  "/",
  "/__grok/manifest.webmanifest",
  "/__grok/icon-180.png",
  "/favicon.svg",
  "/offline/preschool/pack.json",
  "/offline/preschool/academy-magic-ai.png",
  "/offline/preschool/animals/alligator-91.svg",
  "/offline/preschool/animals/ant-28.svg",
  "/offline/preschool/animals/badger-70.svg",
  "/offline/preschool/animals/bat-59.svg",
  "/offline/preschool/animals/bear-6.svg",
  "/offline/preschool/animals/beaver-71.svg",
  "/offline/preschool/animals/bee-26.svg",
  "/offline/preschool/animals/beetle-98.svg",
  "/offline/preschool/animals/bird-57.svg",
  "/offline/preschool/animals/bison-65.svg",
  "/offline/preschool/animals/blue-whale-90.svg",
  "/offline/preschool/animals/boar-66.svg",
  "/offline/preschool/animals/brachiosaurus-82.svg",
  "/offline/preschool/animals/butterfly-25.svg",
  "/offline/preschool/animals/camel-61.svg",
  "/offline/preschool/animals/cat-34.svg",
  "/offline/preschool/animals/caterpillar-97.svg",
  "/offline/preschool/animals/cheetah-88.svg",
  "/offline/preschool/animals/cow-42.svg",
  "/offline/preschool/animals/crab-22.svg",
  "/offline/preschool/animals/cricket-99.svg",
  "/offline/preschool/animals/crocodile-13.svg",
  "/offline/preschool/animals/crow-60.svg",
  "/offline/preschool/animals/deer-63.svg",
  "/offline/preschool/animals/dodo-55.svg",
  "/offline/preschool/animals/dog-35.svg",
  "/offline/preschool/animals/dolphin-20.svg",
  "/offline/preschool/animals/dragon-92.svg",
  "/offline/preschool/animals/dragon-94.svg",
  "/offline/preschool/animals/duck-47.svg",
  "/offline/preschool/animals/eagle-51.svg",
  "/offline/preschool/animals/elephant-2.svg",
  "/offline/preschool/animals/fish-21.svg",
  "/offline/preschool/animals/flamingo-53.svg",
  "/offline/preschool/animals/fox-5.svg",
  "/offline/preschool/animals/frog-16.svg",
  "/offline/preschool/animals/giant-octopus-95.svg",
  "/offline/preschool/animals/giraffe-79.svg",
  "/offline/preschool/animals/giraffe-9.svg",
  "/offline/preschool/animals/goat-45.svg",
  "/offline/preschool/animals/goose-58.svg",
  "/offline/preschool/animals/gorilla-85.svg",
  "/offline/preschool/animals/hamster-32.svg",
  "/offline/preschool/animals/hedgehog-68.svg",
  "/offline/preschool/animals/hippo-12.svg",
  "/offline/preschool/animals/horse-41.svg",
  "/offline/preschool/animals/jellyfish-76.svg",
  "/offline/preschool/animals/kangaroo-40.svg",
  "/offline/preschool/animals/koala-8.svg",
  "/offline/preschool/animals/ladybug-27.svg",
  "/offline/preschool/animals/leopard-87.svg",
  "/offline/preschool/animals/lion-1.svg",
  "/offline/preschool/animals/lizard-72.svg",
  "/offline/preschool/animals/llama-62.svg",
  "/offline/preschool/animals/lobster-23.svg",
  "/offline/preschool/animals/mammoth-80.svg",
  "/offline/preschool/animals/monkey-4.svg",
  "/offline/preschool/animals/moose-64.svg",
  "/offline/preschool/animals/mosquito-100.svg",
  "/offline/preschool/animals/moth-96.svg",
  "/offline/preschool/animals/mouse-33.svg",
  "/offline/preschool/animals/octopus-17.svg",
  "/offline/preschool/animals/orangutan-84.svg",
  "/offline/preschool/animals/otter-38.svg",
  "/offline/preschool/animals/owl-49.svg",
  "/offline/preschool/animals/panda-7.svg",
  "/offline/preschool/animals/parrot-50.svg",
  "/offline/preschool/animals/peacock-52.svg",
  "/offline/preschool/animals/penguin-54.svg",
  "/offline/preschool/animals/pig-43.svg",
  "/offline/preschool/animals/pufferfish-75.svg",
  "/offline/preschool/animals/rabbit-31.svg",
  "/offline/preschool/animals/raccoon-37.svg",
  "/offline/preschool/animals/rhino-11.svg",
  "/offline/preschool/animals/rooster-46.svg",
  "/offline/preschool/animals/scorpion-73.svg",
  "/offline/preschool/animals/seal-78.svg",
  "/offline/preschool/animals/shark-18.svg",
  "/offline/preschool/animals/sheep-44.svg",
  "/offline/preschool/animals/shrimp-24.svg",
  "/offline/preschool/animals/skunk-69.svg",
  "/offline/preschool/animals/sloth-39.svg",
  "/offline/preschool/animals/snail-30.svg",
  "/offline/preschool/animals/snake-14.svg",
  "/offline/preschool/animals/spider-29.svg",
  "/offline/preschool/animals/squid-77.svg",
  "/offline/preschool/animals/squirrel-67.svg",
  "/offline/preschool/animals/swan-48.svg",
  "/offline/preschool/animals/t-rex-81.svg",
  "/offline/preschool/animals/tiger-3.svg",
  "/offline/preschool/animals/tropical-fish-74.svg",
  "/offline/preschool/animals/turkey-56.svg",
  "/offline/preschool/animals/turtle-15.svg",
  "/offline/preschool/animals/unicorn-93.svg",
  "/offline/preschool/animals/whale-19.svg",
  "/offline/preschool/animals/white-rhino-86.svg",
  "/offline/preschool/animals/wolf-36.svg",
  "/offline/preschool/animals/woolly-mammoth-83.svg",
  "/offline/preschool/animals/zebra-10.svg",
  "/offline/preschool/animals/zebra-89.svg",
  "/offline/preschool/audio/animals/bear.wav",
  "/offline/preschool/audio/animals/bee.wav",
  "/offline/preschool/audio/animals/chicken.wav",
  "/offline/preschool/audio/animals/crocodile.wav",
  "/offline/preschool/audio/animals/duck.wav",
  "/offline/preschool/audio/animals/eagle.wav",
  "/offline/preschool/audio/animals/elephant.wav",
  "/offline/preschool/audio/animals/flamingo.wav",
  "/offline/preschool/audio/animals/fox.wav",
  "/offline/preschool/audio/animals/frog.wav",
  "/offline/preschool/audio/animals/lion.wav",
  "/offline/preschool/audio/animals/monkey.wav",
  "/offline/preschool/audio/animals/owl.wav",
  "/offline/preschool/audio/animals/panda.wav",
  "/offline/preschool/audio/animals/parrot.wav",
  "/offline/preschool/audio/animals/peacock.wav",
  "/offline/preschool/audio/animals/penguin.wav",
  "/offline/preschool/audio/animals/snake.wav",
  "/offline/preschool/audio/animals/tiger.wav",
  "/offline/preschool/audio/animals/wolf.wav",
  "/offline/preschool/audio/kg/counting.wav",
  "/offline/preschool/audio/kg/cvc-words.wav",
  "/offline/preschool/audio/kg/phonics.wav",
  "/offline/preschool/audio/kg/reading.wav",
  "/offline/preschool/audio/montessori/language.wav",
  "/offline/preschool/audio/montessori/math.wav",
  "/offline/preschool/audio/montessori/practical-life.wav",
  "/offline/preschool/audio/montessori/sensorial.wav",
  "/offline/preschool/audio/nursery/abc-sounds.wav",
  "/offline/preschool/audio/nursery/colors.wav",
  "/offline/preschool/audio/nursery/count-1-10.wav",
  "/offline/preschool/audio/nursery/manners.wav",
  "/offline/preschool/stories/story-1.svg",
  "/offline/preschool/stories/story-10.svg",
  "/offline/preschool/stories/story-11.svg",
  "/offline/preschool/stories/story-12.svg",
  "/offline/preschool/stories/story-13.svg",
  "/offline/preschool/stories/story-14.svg",
  "/offline/preschool/stories/story-15.svg",
  "/offline/preschool/stories/story-16.svg",
  "/offline/preschool/stories/story-17.svg",
  "/offline/preschool/stories/story-18.svg",
  "/offline/preschool/stories/story-19.svg",
  "/offline/preschool/stories/story-2.svg",
  "/offline/preschool/stories/story-20.svg",
  "/offline/preschool/stories/story-3.svg",
  "/offline/preschool/stories/story-4.svg",
  "/offline/preschool/stories/story-5.svg",
  "/offline/preschool/stories/story-6.svg",
  "/offline/preschool/stories/story-7.svg",
  "/offline/preschool/stories/story-8.svg",
  "/offline/preschool/stories/story-9.svg",
  "/offline/preschool/words/apple.svg",
  "/offline/preschool/words/ball.svg",
  "/offline/preschool/words/bird.svg",
  "/offline/preschool/words/book.svg",
  "/offline/preschool/words/car.svg",
  "/offline/preschool/words/cat.svg",
  "/offline/preschool/words/dog.svg",
  "/offline/preschool/words/fish.svg",
  "/offline/preschool/words/milk.svg",
  "/offline/preschool/words/moon.svg",
  "/offline/preschool/words/sun.svg",
  "/offline/preschool/words/tree.svg",
  "/offline/preschool/worksheets/kg/math-practice.svg",
  "/offline/preschool/worksheets/kg/patterns-shapes.svg",
  "/offline/preschool/worksheets/kg/phonics-cvc.svg",
  "/offline/preschool/worksheets/montessori/montessori-numbers.svg",
  "/offline/preschool/worksheets/montessori/practical-life.svg",
  "/offline/preschool/worksheets/montessori/sensorial-sorting.svg",
  "/offline/preschool/worksheets/nursery/abc-trace.svg",
  "/offline/preschool/worksheets/nursery/colors-shapes.svg",
  "/offline/preschool/worksheets/nursery/count-1-10.svg",
 ];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then(async (cache) => {
        await Promise.all(APP_SHELL.map(async (url) => { try { const response = await fetch(url, { cache: "no-cache" }); if (response.ok) await cache.put(url, response.clone()); } catch {} }));
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => ![CACHE, RUNTIME].includes(key)).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
  if (event.data?.type === "CACHE_PRESCHOOL_PACK") {
    event.waitUntil(cachePreschoolPack(Array.isArray(event.data.urls) ? event.data.urls : []));
  }
});

async function cachePreschoolPack(extraUrls = []) {
  const cache = await caches.open(CACHE);
  const urls = [...new Set([...APP_SHELL, ...extraUrls.filter((url) => { try { return new URL(url, self.location.origin).origin === self.location.origin && new URL(url, self.location.origin).pathname.startsWith("/assets/"); } catch { return false; } })])];
  await Promise.all(urls.map(async (url) => {
    try { const response = await fetch(url, { cache: "no-cache" }); if (response.ok) await cache.put(url, response.clone()); } catch {}
  }));
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isApi = url.pathname.startsWith("/api/") || url.pathname.startsWith("/trpc/");
  const isPreschoolAsset = url.pathname.startsWith("/offline/preschool/");
  const isStaticAsset = url.pathname.startsWith("/assets/") || url.pathname.startsWith("/__grok/") || url.pathname === "/favicon.svg";
  const isNavigation = event.request.mode === "navigate";

  // Offline learning pictures/data are always cache-first.
  if (isPreschoolAsset) {
    event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then(async (response) => {
      if (response.ok) await caches.open(CACHE).then((cache) => cache.put(event.request, response.clone()));
      return response;
    })));
    return;
  }

  // Never turn a failed API request into an HTML document.
  if (isApi) {
    event.respondWith(fetch(event.request).catch(() => new Response(JSON.stringify({ offline: true }), {
      status: 503, headers: { "Content-Type": "application/json" }
    })));
    return;
  }

  // App shell/navigation: cached first, then refresh the cache when online.
  if (isNavigation) {
    event.respondWith(caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then(async (response) => {
        if (response.ok) await caches.open(RUNTIME).then((cache) => cache.put(event.request, response.clone()));
        return response;
      }).catch(() => caches.match("/") || caches.match("/offline/preschool/pack.json"));
      return cached || network;
    }));
    return;
  }

  if (isStaticAsset) {
    event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then(async (response) => {
      if (response.ok) await caches.open(RUNTIME).then((cache) => cache.put(event.request, response.clone()));
      return response;
    })));
  }
});

self.addEventListener("push", (event) => {
  let data = {};
  try { data = event.data?.json() ?? {}; } catch { data = { body: event.data?.text() ?? "Your learning journey is waiting." }; }
  event.waitUntil(self.registration.showNotification(data.title || "Little Learners Academy", {
    body: data.body || "A new learning adventure is ready.",
    icon: "/__grok/icon-180.png", badge: "/__grok/icon-180.png",
    tag: data.tag || "mera-world", data: { url: data.url || "/" }
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = event.notification.data?.url || "/";
  event.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
    const client = clients.find((c) => "focus" in c);
    return client ? client.focus() : self.clients.openWindow(target);
  }));
});
