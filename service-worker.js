<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2022.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; color: #000000; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; color: #000000; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const CACHE_NAME = 'gurmano-cache-v1';</span></p>
<p class="p1"><span class="s1">const URLS = ['.','index.html','manifest.json'];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener('install', function(e){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>e.waitUntil(caches.open(CACHE_NAME).then(cache =&gt; cache.addAll(URLS)));</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">self.addEventListener('fetch', function(e){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>e.respondWith(caches.match(e.request).then(r =&gt; r || fetch(e.request)));</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">self.addEventListener('activate', function(e){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>e.waitUntil(self.clients.claim());</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
