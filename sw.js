// P.A.C.E. service worker: makes the app work offline.
// When you change any file, change the version number below (pace-v7, pace-v8, ...) so phones pick up the update.
const V='pace-v7',SHELL=['./','index.html','install.html','manifest.json'];
// each file is cached on its own, so one missing file can never stop the app from installing
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(SHELL.map(u=>c.add(u)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x.startsWith('pace-')).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok&&/index\.html$|\/$/.test(u.pathname)){const cp=res.clone();caches.open(V).then(c=>c.put('index.html',cp))}return res}).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));return}
 if(u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){e.respondWith(caches.match(r).then(h=>{const n=fetch(r).then(res=>{if(res.ok||res.type==='opaque')caches.open(V).then(c=>c.put(r,res.clone()));return res}).catch(()=>h);return h||n}))}});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
