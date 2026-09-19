# Installation

Galaxy UI copies editable component source into your project, following the shadcn approach across multiple frameworks.

## Prerequisites

- Node.js 18+ or Bun 1+
- npm, pnpm, Yarn, or Bun
- Vue 3, React 18+, Angular 20+, React Native, or Flutter
- Tailwind CSS v3.4 or v4 for web projects

## Initialize

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest init
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest init
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest init
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest init
```

:::

The CLI detects the framework, package manager, source layout, and Tailwind major version. It then creates `components.json`, utility/runtime files, aliases, and installs compatible dependencies.

::: tip Framework targets vs source packages
Next.js uses the React source registry with Next-specific transforms. Nuxt uses the Vue source registry with Nuxt-compatible paths. They are CLI targets, not separate component package families.
:::

## Add components

```bash
npx @galaxy-stack/nebula-cli@latest add button
npx @galaxy-stack/nebula-cli@latest add button input dialog
npx @galaxy-stack/nebula-cli@latest add --all
```

Component files remain in your repository and can be edited. Dependencies and component-to-component dependencies are read from the framework registry and installed automatically.

## Configuration

The generated file uses the public schema:

```json
{
  "$schema": "https://galaxy-design.vercel.app/schema.json",
  "framework": "react",
  "typescript": true,
  "tailwind": {
    "version": 4,
    "config": "",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  },
  "iconLibrary": "lucide"
}
```

For Tailwind v3, `tailwind.config.*` is retained. For v4, the CLI generates a CSS-first semantic theme bridge. See [Tailwind CSS](/guide/tailwind).

## Migrate an existing v3 project

```bash
npx @galaxy-stack/nebula-cli@latest migrate tailwind --dry-run
npx @galaxy-stack/nebula-cli@latest migrate tailwind --yes
```

Review the reported compatibility findings and keep the backup under `.galaxy/backups/` until the application build succeeds.

## Use a component

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template><Button>Continue</Button></template>
```

```tsx [React]
import { Button } from '@/components/ui/button'

export default function App() {
  return <Button>Continue</Button>
}
```

```ts [Angular]
import { Component } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button>Continue</ui-button>`,
})
export class AppComponent {}
```

:::

Continue with [CLI Usage](/guide/cli-usage), [Configuration](/guide/configuration), or [Components](/components/overview).
