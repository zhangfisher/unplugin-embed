# unplugin-embed

A plugin that embeds any file as a base64 string into the source code.

## Install

```bash
npm i -D unplugin-embed
yarn add  -D unplugin-embed
pnpm add -D unplugin-embed
```

## Configuration

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Embed from 'unplugin-embed/vite'

export default defineConfig({
  plugins: [
    Embed(),
  ],
})
```

<br></details>

<details>
<summary>Rollup </summary><br>

```ts
// rollup.config.js
import Embed from 'unplugin-embed/rollup'

export default {
  plugins: [
    Embed(),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-embed/webpack').default(),
  ],
}
```

<br></details>

<details>
<summary>Rspack </summary><br>

```ts
// rspack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-embed/rspack').default(),
  ],
}
```

<br></details>

<details>
<summary>webpack</summary><br>

```ts
// vue.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-embed/webpack').default(),
  ],
}
```

You can also rename the Vue configuration file to `vue.config.mjs` and use static import syntax (you should use latest `@vue/cli-service ^5.0.8`):

```ts
// vue.config.mjs
import Embed from 'unplugin-embed/webpack'

export default {
  configureWebpack: {
    plugins: [
      Embed(),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import Embed from 'unplugin-embed/esbuild'

build({
  /* ... */
  plugins: [
    Embed(),
  ],
})
```

<br></details>
<details>

<summary>astro</summary><br>

```ts
// astro.config.mjs
import Embed from 'unplugin-embed/astro'

export default defineConfig({
  integrations: [
    Embed()
  ],
})
```

<br></details>

## Usage

- **use `?embed` to embed the file as a base64 string**

```ts
import fontData from './font.ttf?embed'
// fontData is a base64 string
```

- use `options={filter:(id)=>id.endsWith('.ttf')}` to filter the files to embed

```ts
// vite.config.ts

// src/index.ts
import fontData from './font.ttf'

export default defineConfig({
  plugins: [
    Embed({
      filter: (id: string) => id.endsWith('.ttf')
    }),
  ],
})
// fontData is a base64 string
```
## Explain

Differences from other `raw/embed` plugins:

- Using `base64` encoding instead of `JSON.stringify`
- `unplugin-embed` can encode any file, including `binary` files.
