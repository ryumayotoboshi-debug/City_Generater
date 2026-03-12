self.addEventListener("install", function(event) {
event.waitUntil(
caches.open("app-cache").then(function(cache) {
return cache.addAll([
"/",
"/index.html",
"/IMG_4351.jpeg"
]);
})
);
});
