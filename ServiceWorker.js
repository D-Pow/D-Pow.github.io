var CACHE_NAME="cache-1.0.24",urlsToCache=["./static/assets/pdf-icon.a3187e88.svg","./static/assets/anime_atsume.ad7057af.jpg","./static/assets/atoms_of_confusion.77b9db51.jpg","./static/assets/automatic_investing.bd799aa7.jpg","./static/assets/blue_horizon.08a3abd3.svg","./static/assets/blue_mountains.949bbfea.svg","./static/assets/edge_panel_widget.42a86bb7.png","./static/assets/etrade_icon.0669c052.png","./favicon-144.png","./favicon-192.png","./favicon.ico","./favicon.png","./static/assets/github_logo.07c94e10.svg","./static/assets/linkedin_logo.4ed775be.svg","./static/assets/mock_requests.4891af63.png","./static/assets/nextdoor_icon.26ce71fb.svg","./static/assets/night_forest.61beb17b.svg","./static/assets/peptide_nmr.6446f86e.jpg","./static/assets/prebuilt_portfolios.9fd433e2.jpg","./static/assets/premarket_modal.0138e147.png","./static/assets/profile_pic.e1dd2c7f.jpg","./static/assets/react_logo.103b5fa1.svg","./static/assets/tardigrade.3f66523a.jpg","./package.json","./manifest.json","./index.html","./static/js/client.4fbf44c7.bundle.js","./static/js/common.7a11c8b3.bundle.js","./static/js/runtime.d4747511.bundle.js","./static/js/Home.81d8dd4f.chunk.js","./static/js/About.420e372b.chunk.js","./static/js/Header.6f937f2d.chunk.js","./static/js/Footer.7b390ac1.chunk.js","./static/js/579.34b8f705.chunk.js","./static/js/674.f09deb42.chunk.js","./static/js/375.44b34fa2.chunk.js","./static/js/114.e7ff4b15.chunk.js","./static/js/571.dfa7574a.chunk.js","./static/js/959.31f6d33c.chunk.js","./static/js/746.1189f365.chunk.js","./static/js/484.629cd3d8.chunk.js","./static/js/521.0c4ff28b.chunk.js","./static/js/986.27fd0d2e.chunk.js","./static/js/957.e958e414.chunk.js","./static/js/835.42e1174c.chunk.js","./static/js/920.e27bec6e.chunk.js","./static/js/403.bf74c0a6.chunk.js","./static/js/26.e34aed26.chunk.js","./static/js/860.a2e9f711.chunk.js","./static/js/695.ebd4a91f.chunk.js","./static/js/819.b56bf8b9.chunk.js","./static/js/427.7e5f0787.chunk.js","./static/js/407.cba21ac9.chunk.js","./static/js/286.a6b9058d.chunk.js","./static/js/80.d1f53175.chunk.js","./static/js/610.04316cad.chunk.js","./static/js/611.1126a324.chunk.js","./static/js/31.e2c93389.chunk.js","./static/js/197.cbb9d002.chunk.js","./static/css/styles.74d41016.css","./static/js/vendor-49d0a293.c10277a8.bundle.js","./static/js/vendor-868d4403.3ce0cb2f.bundle.js","./static/js/vendor-485f66e7.8019a39a.bundle.js","./static/js/vendor-3d52e142.66e13520.bundle.js","./static/js/vendor-27545368.eca79263.bundle.js","./static/js/vendor-f82e0cd2.00f20ab4.bundle.js","./static/js/vendor-e5bca7e4.b97febcb.bundle.js","./static/js/vendor-002458cc.45d70324.bundle.js","./"],urlsNotToCache=[],BROADCAST_CHANNEL="d-pow.github.io",UPDATE_BROADCAST="UPDATE";function removeOldCaches(){return caches.keys().then((function(e){return Promise.all(e.filter((function(e){return e!==CACHE_NAME})).map((function(e){return console.log("Outdated cache",e,"will be removed"),caches.delete(e)})))}))}function clearCache(e,t){function n(e){return e.keys().then((function(n){return Promise.all(n.filter((function(e){return!t.includes(e.url)})).map((function(t){return e.delete(t)})))}))}return"string"==typeof t?t=[t]:null==t&&(t=[]),null==e?caches.open(CACHE_NAME).then(n):n(e)}function fetchAndCache(e,t){return fetch(e.request).then((function(n){return t.put(e.request,n.clone()).catch((function(t){console.log("Could not cache url:",e.request.url,"Failed with error:",t)})),n})).catch((function(t){console.log("Could not fetch url:",e.request.url,"Failed with fetch error:",t)}))}function postMessageToClient(e){try{new BroadcastChannel(BROADCAST_CHANNEL).postMessage(e)}catch(e){}}self.addEventListener("install",(function(e){e.waitUntil(caches.open(CACHE_NAME).then((function(e){return console.log("Opened cache"),e.addAll(urlsToCache)})).then(removeOldCaches).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){e.waitUntil(removeOldCaches())})),self.addEventListener("fetch",(e=>{e.respondWith(caches.open(CACHE_NAME).then((function(t){return t.match(e.request).then((function(n){var c=e.request.url,o=c.split("/").pop(),r=("/"===c[c.length-1]||"index.html"===o||new URL(location.href).origin===c)&&new URL(c).pathname.split("/").length<=2;Boolean(o.match(/\.\w{2,6}$/))&&e.request.method,urlsNotToCache.some((function(e){return e===c||e&&e.test&&e.test(c)}));if(n){if(r){var l=fetchAndCache(e,t),u=l.then((function(e){return e.text()})),i=n.clone().text();Promise.all([u,i]).then((function(n){n[0]!==n[1]&&clearCache(t,c).then((function(){return t.put(e.request,l.clone()).catch((function(t){console.log("Could not cache url:",e.request.url,"Failed with error:",t)}))})).then((function(){setTimeout((function(){postMessageToClient(UPDATE_BROADCAST)}),5e3),console.log("New website version is available, deleting old cache content")}))}))}return n}return r?fetchAndCache(e,t):fetch(e.request)}))})))}));