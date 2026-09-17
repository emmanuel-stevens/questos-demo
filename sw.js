// THE SHELL IS KEPT SO THE REALM OPENS WITH NO NETWORK (B51 ruling C,
// 2026-09-04: "C first, then B, A, D — as recommended").
//
// THIS FILE OVERTURNS HALF OF A STANDING DECISION AND KEEPS THE OTHER HALF,
// which is why the reason is written here rather than in a commit message.
// `index.html` refused a service worker on 2026-08-25 in these words: *"the
// realm syncs, and an offline cache in front of a synced realm is a
// correctness problem wearing a feature's clothes."* That sentence is still
// true and this worker obeys it. What it refused was caching the REALM; what
// the founder ruled on 09-04 is caching the SHELL — the document, the script,
// the stylesheet, the icons. So the two live together under one hard law:
//
//   THE WORKER MAY NEVER CACHE A REALM RESPONSE. `/api/` is refused by name,
//   nothing but same-origin GET is considered, and a response that is not
//   `ok` is never stored. `tests/offline.test.js` reads THIS FILE and fails if
//   the refusal leaves it, because the law is only kept where it is called —
//   the lesson `/api/reach` paid for on 2026-09-01, where thirty passing unit
//   tests guarded a module while the route above it granted what they refuse.
//
// THE STALE SHELL IS THE NEW FAILURE SHAPE, and it is answered by construction
// rather than by a promise:
//
//   1. THE CACHE IS NAMED FOR THE BUILD. `src/offline.js` registers this
//      worker as `sw.js?v=<sha>`, so a new deploy is a new cache and the old
//      one is deleted on activate. THE WORKER HOLDS NO COPY OF THE STAMP —
//      it reads its own URL — so there is one place a build is identified and
//      no second copy to drift (the six-copies defect, one file over).
//   2. A DOCUMENT IS NETWORK-FIRST. Cache-first on the HTML is precisely how a
//      site serves a stale shell forever; network-first means an online knight
//      always gets the deploy that is live and the cache answers only when the
//      network does not. This is the whole difference between an offline door
//      and a trap.
//   3. NOTHING SKIPS WAITING. A new worker takes over on the next full load,
//      never under a running page — swapping an asset set beneath a mounted
//      app is how a half-old, half-new bundle happens. It also makes deleting
//      the old cache on activate safe, because no client is still using it.
//
// HASHED ASSETS ARE CACHE-FIRST because Vite names them by content: the URL IS
// the version, so a hit can never be stale. Everything else in scope is
// network-first with the cache behind it.
//
// THE FONTS ARE DELIBERATELY NOT CACHED. They are cross-origin and would store
// as opaque responses of unknown size and unknowable success. X50 already made
// them non-blocking with a real fallback declared on every face, so an offline
// realm renders in Georgia — which is the designed behaviour, not a
// degradation this worker introduces.

const VERSION = new URL(self.location.href).searchParams.get('v') || 'unstamped'
const CACHE = `questos-shell-${VERSION}`
// The scope's own document, resolved once. Relative strings are NOT used
// anywhere below: a bare './' resolves against the worker's scope in a browser
// and throws in every other runtime, so a guard that drives this file could
// not exercise the same code a knight runs. One absolute URL, both places.
const SHELL = new URL('./', self.location.href).href

// REFUSED BY NAME. Every realm read and write in this repo is under `/api/`
// (the twelve dev middlewares and the hosted functions alike), so one prefix
// covers the flows the 08-25 decision was about. A 404 from a static demo is
// refused twice over — by this list and by the `ok` check — because a cached
// "no" is worse than no cache at all.
const NEVER_CACHE = ['/api/']

function mayCache(url) {
  if (url.origin !== self.location.origin) return false
  for (const fragment of NEVER_CACHE) if (url.pathname.includes(fragment)) return false
  return true
}

// Vite writes `assets/name-<8+ hex>.js`. The hash IS the version, so these are
// safe to answer from the cache without asking the network first.
const isHashed = (url) => /\/assets\/[^/]+-[A-Za-z0-9_-]{8,}\.[a-z0-9]+$/.test(url.pathname)

self.addEventListener('install', (event) => {
  // The scope's own document is the one thing worth having before it is asked
  // for: it is what an offline launch opens. Everything else is cached as it
  // is actually fetched, so a first visit warms only what it used and the
  // install never pulls a megabyte of paintings nobody has reached.
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.add(new Request(SHELL, { cache: 'reload' }))).catch(() => {})
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(
        names.filter((n) => n.startsWith('questos-shell-') && n !== CACHE).map((n) => caches.delete(n))
      )
      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (!mayCache(url)) return

  if (isHashed(url)) {
    event.respondWith(
      caches.match(request).then((hit) => hit || fetchAndKeep(request))
    )
    return
  }

  // NETWORK FIRST — see (2) above. The cache is the answer to a failed fetch
  // and never the answer to a working one.
  event.respondWith(
    fetchAndKeep(request).catch(async () => {
      const hit = await caches.match(request)
      if (hit) return hit
      // A navigation that was never cached under its own URL still opens the
      // realm: every route in this app is the same document, so the scope's
      // index is the honest fallback rather than a failure.
      if (request.mode === 'navigate') {
        const shell = await caches.match(SHELL)
        if (shell) return shell
      }
      throw new Error('offline and not cached')
    })
  )
})

async function fetchAndKeep(request) {
  const response = await fetch(request)
  // `ok` alone: a redirect is followed by fetch, an opaque response cannot be
  // read, and an error page is not a shell.
  if (response.ok && response.type === 'basic') {
    const copy = response.clone()
    caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {})
  }
  return response
}

// THE WAY OUT, and it is not optional insurance. A service worker that cannot
// be removed is the one failure a knight cannot recover from without clearing
// site data, so `?nosw` unregisters this worker and empties its caches —
// `src/offline.js` holds the other half.
self.addEventListener('message', (event) => {
  if (event.data === 'questos:unregister') {
    event.waitUntil(
      (async () => {
        const names = await caches.keys()
        await Promise.all(names.filter((n) => n.startsWith('questos-shell-')).map((n) => caches.delete(n)))
        await self.registration.unregister()
      })()
    )
  }
})
