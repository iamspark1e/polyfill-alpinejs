# Alpine.js with polyfill

### Version

[v3.14.1](https://github.com/alpinejs/alpine/releases/tag/v3.14.1)

### Polyfill features

- Arrow functions (`() => {}`)
- Optional Chain (`a?.b`)
- [QueueMicrotask](https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask) (`queueMicrotask(() => {/* ... */})`)

> Use `Promise` to polyfill `queueMicrotask`.

### Tested Browser

- Safari 11.3.1

> Browser targets: "since 2018"