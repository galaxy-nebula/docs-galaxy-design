# CLI Usage

Galaxy UI exposes these command flows: `init`, `add`, `list`, `doctor`, `diff`, `update`, and `migrate tailwind`.

## `init`

Detect the framework and Tailwind version, create `components.json`, configure aliases/runtime files, and install matching dependencies.

```bash
npx galaxy-design@latest init
npx galaxy-design@latest init --yes
npx galaxy-design@latest init --cwd ./my-app
```

Supported targets are Vue, Nuxt, React, Next.js, Angular, React Native, and Flutter. Next.js uses React sources with Next-specific transforms; Nuxt uses Vue sources.

## `add`

Copy editable source files and install packages declared by the framework registry.

```bash
npx galaxy-design@latest add button
npx galaxy-design@latest add button input dialog
npx galaxy-design@latest add --all
npx galaxy-design@latest add button --cwd ./my-app
```

With no component name, the CLI opens an interactive selector. Registry dependencies are resolved first, and existing files are kept. The command returns a non-zero exit code if a requested component, source file, or dependency installation fails.

## `migrate tailwind`

Migrate a detected Tailwind v3 project to the Galaxy UI v4 scaffold.

```bash
npx galaxy-design@latest migrate tailwind --dry-run
npx galaxy-design@latest migrate tailwind --yes
npx galaxy-design@latest migrate tailwind --cwd ./my-app
```

The command creates a backup in `.galaxy/backups/`, updates package/configuration files, and reports items requiring manual review. See [Tailwind CSS](/guide/tailwind) for compatibility details.

## `list`

Show the installable components and blocks for the configured (or requested) framework.

```bash
npx galaxy-design@latest list
npx galaxy-design@latest list --framework react
npx galaxy-design@latest list --category feedback
```

## `doctor`

Validate the current project setup: `components.json`, framework detection, Tailwind version and animation setup, utils/components paths, and required dependencies. Exits non-zero when a required check fails.

```bash
npx galaxy-design@latest doctor
npx galaxy-design@latest doctor --cwd ./my-app
```

## `diff`

Compare installed component files against the pinned registry source. Exits non-zero when a file is missing or modified:

```bash
npx galaxy-design@latest diff button
npx galaxy-design@latest diff button input
```

## `update`

Re-download component source from the registry and overwrite local files, keeping a backup under `.galaxy/backups/update/`:

```bash
npx galaxy-design@latest update button
npx galaxy-design@latest update button input
```

## Configuration file

`init` creates `components.json`:

```json
{
  "$schema": "https://galaxy-design.vercel.app/schema.json",
  "framework": "vue",
  "typescript": true,
  "tailwind": {
    "version": 4,
    "config": "",
    "css": "src/assets/styles/global.css",
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

Package-manager detection uses `bun.lock`/`bun.lockb`, `pnpm-lock.yaml`, `yarn.lock`, or `package-lock.json`; npm is the fallback.
