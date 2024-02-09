# Federation Compatibilty Examples

This repo provides examples to demonstrate desired compatibility between
Native Federation (via @module-federation/vite) and Webpack Module Federation.

## Setup

```
pnpm i
```

## Run

```
pnpm dev
```

*OR*

```
pnpm --filter vite-host-webpack-remote dev
```

*OR*

```
pnpm --filter webpack-host-vite-remote dev
```

### Expectations

* Vite host can consume remoteEntry.js from Webpack remote. Actual: console errors failing to load the remote.
* Webpack host can conume remoteEntry.json from Vite remote. Actual: console errors (and overlay in browser) failing to load the remote.
