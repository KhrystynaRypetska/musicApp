if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const t=e=>i(e,a),l={module:{uri:a},exports:o,require:t};s[a]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-ed1305a4.js",revision:null},{url:"assets/Home-5023c244.js",revision:null},{url:"assets/img/header.png",revision:"64d8c7bce9e47d0946e4a51c7b3e2e80"},{url:"assets/img/introduction-music.png",revision:"48025182349af4abfe3e272a7e128c4c"},{url:"assets/img/introduction-users.png",revision:"90840bfca190b45f7cd04ed9d8c2cd54"},{url:"assets/img/profile-pic.jpg",revision:"eba639c1b0a9287dd3a1904b9ae9831f"},{url:"assets/img/pwa-192x192.png",revision:"25b38533f534eb0f7ea0771021d541a8"},{url:"assets/img/song-header.png",revision:"d899ba7d2cac3f11c4377a700d68d22e"},{url:"assets/img/user-header.png",revision:"e7b9aeb02c86a922404d13073d21836a"},{url:"assets/index-0e37ea7f.js",revision:null},{url:"assets/index-dd9a9a8e.css",revision:null},{url:"assets/Manage-2b731a37.js",revision:null},{url:"assets/Song-5a37401e.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"cfebcb8bbcd09b908ce92dfeab84cabe"},{url:"assets/img/pwa-192x192.png",revision:"25b38533f534eb0f7ea0771021d541a8"},{url:"manifest.webmanifest",revision:"c6d7f76346c724b7a995347fe33c256f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
