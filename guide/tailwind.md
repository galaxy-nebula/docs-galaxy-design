# Tailwind CSS

Galaxy UI supports **Tailwind CSS v3.4** and **Tailwind CSS v4** for React, Vue, and Angular. The CLI detects the installed major version and generates the matching scaffold.

## Recommended setup

```bash
npx @galaxy-stack/nebula-cli@latest init
```

- v3 uses `tailwind.config.*`, PostCSS with `tailwindcss` and `autoprefixer`, `tailwindcss-animate`, and `tailwind-merge` v2.
- v4 uses CSS-first configuration, `@tailwindcss/postcss`, `tw-animate-css`, and `tailwind-merge` v3.

## Tailwind v4

The generated global stylesheet includes the semantic theme bridge used by Galaxy components:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
```

This bridge enables utilities such as `border-border`, `bg-background`, `text-foreground`, and `rounded-lg`.

PostCSS v4 configuration:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

## Tailwind v3

The generated configuration contains the semantic colors/radii and animation plugin:

```js
import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
}
```

## Migrate v3 to v4

Preview and apply the migration:

```bash
npx @galaxy-stack/nebula-cli@latest migrate tailwind --dry-run
npx @galaxy-stack/nebula-cli@latest migrate tailwind --yes
```

The migration updates dependencies, PostCSS, global CSS, and `components.json`. It preserves a legacy Tailwind config through `@config`, reports utilities needing review, and creates a backup under `.galaxy/backups/` before writing.

::: warning One-way migration
The automated command migrates **v3 to v4**. It does not automate v4-to-v3 downgrades because CSS-first v4 configuration cannot always be represented safely in a v3 JavaScript config.
:::

## Framework notes

- **React / Next.js:** import the global stylesheet from the entry or root layout.
- **Vue / Nuxt:** import it from the entry or list it in Nuxt's `css` configuration.
- **Angular:** include it in the workspace `styles` configuration.

If semantic utilities disappear on v4, check that `@theme inline` is present. For migrations using `safelist`, `corePlugins`, a custom separator, or complex plugins, review the CLI warnings and keep the backup until the application build passes.
