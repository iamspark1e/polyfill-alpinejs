import Alpine from 'alpinejs'

window.Alpine = Alpine

if (typeof window.queueMicrotask !== "function") {
    window.queueMicrotask = function (callback) {
        // Use Promise to polyfill queueMicrotask, so browser must support Promise at least.
        Promise.resolve()
            .then(callback)
            .catch(e => setTimeout(() => { throw e; }));
    };
}

queueMicrotask(() => {
    Alpine.start()
})