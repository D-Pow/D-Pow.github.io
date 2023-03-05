var CACHE_NAME="cache-1.0.13",urlsToCache=["./static/assets/anime_atsume-ad7057af.jpg","./static/assets/atoms_of_confusion-77b9db51.jpg","./static/assets/automatic_investing-bd799aa7.jpg","./static/assets/blue_horizon.08a3abd3.svg","./static/assets/blue_mountains.949bbfea.svg","./static/assets/edge_panel_widget-42a86bb7.png","./static/assets/etrade_icon-0669c052.png","./favicon-144.png","./favicon-192.png","./favicon.ico","./favicon.png","./static/assets/github_logo.07c94e10.svg","./static/assets/linkedin_logo.4ed775be.svg","./static/assets/mock_requests-4891af63.png","./static/assets/night_forest.61beb17b.svg","./static/assets/peptide_nmr-6446f86e.jpg","./static/assets/prebuilt_portfolios-9fd433e2.jpg","./static/assets/premarket_modal-0138e147.png","./static/assets/profile_pic-e1dd2c7f.jpg","./static/assets/react_logo.103b5fa1.svg","./static/assets/tardigrade-3f66523a.jpg","./package.json","./manifest.json","./CNAME","./index.html","./static/js/client.8135151b.bundle.js","./static/js/common.8e841144.bundle.js","./static/js/runtime.f50569fd.bundle.js","./static/js/Home.e43d606a.chunk.js","./static/js/About.a5dfda5a.chunk.js","./static/js/Header.72bb953e.chunk.js","./static/js/Footer.c19f4375.chunk.js","./static/js/579.e992c62f.chunk.js","./static/js/674.0cac1bfb.chunk.js","./static/js/375.dc21594b.chunk.js","./static/js/114.e7ff4b15.chunk.js","./static/js/571.dfa7574a.chunk.js","./static/js/959.629eef0d.chunk.js","./static/js/746.f99442a3.chunk.js","./static/js/410.1cd5007b.chunk.js","./static/js/521.0c4ff28b.chunk.js","./static/js/986.27fd0d2e.chunk.js","./static/js/957.e958e414.chunk.js","./static/js/835.42e1174c.chunk.js","./static/js/920.e27bec6e.chunk.js","./static/js/403.bf74c0a6.chunk.js","./static/js/26.e34aed26.chunk.js","./static/js/860.a2e9f711.chunk.js","./static/js/695.fea10003.chunk.js","./static/js/427.7e5f0787.chunk.js","./static/js/286.1f3130c3.chunk.js","./static/js/80.245288f2.chunk.js","./static/js/610.2f5829bb.chunk.js","./static/js/611.a6e26fa8.chunk.js","./static/js/31.e2c93389.chunk.js","./static/js/197.b1524ff2.chunk.js","./static/css/styles.60115ac0.css","./static/js/styles.c999a920.bundle.js","./static/js/vendor.79b03249.bundle.js.LICENSE.txt","./static/js/vendor.79b03249.bundle.js","./"],urlsNotToCache=[],BROADCAST_CHANNEL="d-pow.github.io",UPDATE_BROADCAST="UPDATE";function removeOldCaches(){return caches.keys().then((function(e){return Promise.all(e.filter((function(e){return e!==CACHE_NAME})).map((function(e){return console.log("Outdated cache",e,"will be removed"),caches.delete(e)})))}))}function clearCache(e,t){function n(e){return e.keys().then((function(n){return Promise.all(n.filter((function(e){return!t.includes(e.url)})).map((function(t){return e.delete(t)})))}))}return"string"==typeof t?t=[t]:null==t&&(t=[]),null==e?caches.open(CACHE_NAME).then(n):n(e)}function fetchAndCache(e,t){return fetch(e.request).then((function(n){return t.put(e.request,n.clone()).catch((function(t){console.log("Could not cache url:",e.request.url,"Failed with error:",t)})),n})).catch((function(t){console.log("Could not fetch url:",e.request.url,"Failed with fetch error:",t)}))}function postMessageToClient(e){try{new BroadcastChannel(BROADCAST_CHANNEL).postMessage(e)}catch(e){}}self.addEventListener("install",(function(e){e.waitUntil(caches.open(CACHE_NAME).then((function(e){return console.log("Opened cache"),e.addAll(urlsToCache)})).then(removeOldCaches).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){e.waitUntil(removeOldCaches())})),self.addEventListener("fetch",(e=>{e.respondWith(caches.open(CACHE_NAME).then((function(t){return t.match(e.request).then((function(n){var c=e.request.url,o=c.split("/").pop(),r=("/"===c[c.length-1]||"index.html"===o||new URL(location.href).origin===c)&&new URL(c).pathname.split("/").length<=2;Boolean(o.match(/\.\w{2,6}$/))&&e.request.method,urlsNotToCache.some((function(e){return e===c||e&&e.test&&e.test(c)}));if(n){if(r){var l=fetchAndCache(e,t),u=l.then((function(e){return e.text()})),i=n.clone().text();Promise.all([u,i]).then((function(n){n[0]!==n[1]&&clearCache(t,c).then((function(){return t.put(e.request,l.clone()).catch((function(t){console.log("Could not cache url:",e.request.url,"Failed with error:",t)}))})).then((function(){setTimeout((function(){postMessageToClient(UPDATE_BROADCAST)}),5e3),console.log("New website version is available, deleting old cache content")}))}))}return n}return r?fetchAndCache(e,t):fetch(e.request)}))})))}));