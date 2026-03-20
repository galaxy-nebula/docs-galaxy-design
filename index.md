---
layout: home

hero:
  name: "Galaxy UI"
  text: "Universal Component Library"
  tagline: Beautiful, accessible components for Vue, React, Angular, React Native, and Flutter - from web to mobile
  image:
    src: /galaxy-logo.png
    alt: Galaxy UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: View Components
      link: /components/overview
    - theme: alt
      text: GitHub
      link: https://github.com/buikevin/galaxy-design

features:
  - icon: 🎨
    title: Universal Platform Support
    details: Build with Vue 3, React, Angular, React Native, or Flutter. Same beautiful components across web and mobile.

  - icon: ♿
    title: Accessible by Default
    details: Built on Radix primitives (Radix UI, Radix Vue, Radix NG) with ARIA support, keyboard navigation, and focus management.

  - icon: 🎭
    title: Customizable
    details: Styled with Tailwind CSS (web), NativeWind v4 (React Native), Material Design 3 (Flutter). Easy to customize and extend to match your brand.

  - icon: 📦
    title: Copy-Paste Components
    details: Own your code. No locked dependencies. Copy components directly into your project with full source control.

  - icon: 🌙
    title: Dark Mode
    details: First-class dark mode support with CSS variables (web) and theme switching (mobile).

  - icon: 🚀
    title: Developer Experience
    details: CLI tool for easy installation. Full TypeScript support. Type-safe props across all frameworks.

  - icon: 🔧
    title: Radix Primitives
    details: Built on Radix UI (React), Radix Vue (Vue 3), and Radix NG (Angular) for rock-solid accessibility.

  - icon: 📱
    title: Mobile-First
    details: 37 components for React Native (NativeWind v4) and Flutter (Material Design 3). 41 components for web frameworks. Responsive web components.

  - icon: 🌐
    title: i18n Ready
    details: Bilingual documentation (English/Vietnamese) and internationalization support.
---

## Quick Start

::: code-group

```bash [npm]
# Initialize your project
npx galaxy-design@latest init

# Add components
npx galaxy-design@latest add button input dialog
```

```bash [pnpm]
# Initialize your project
pnpm dlx galaxy-design@latest init

# Add components
pnpm dlx galaxy-design@latest add button input dialog
```

```bash [yarn]
# Initialize your project
yarn dlx galaxy-design@latest init

# Add components
yarn dlx galaxy-design@latest add button input dialog
```

```bash [bun]
# Initialize your project
bunx galaxy-design@latest init

# Add components
bunx galaxy-design@latest add button input dialog
```

:::

## Platform Support

### Web Frameworks

::: code-group

```vue [Vue 3]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

:::

### Mobile Platforms

::: code-group

```tsx [React Native]
import { Button } from '@/components/ui/button'

export default function App() {
  return (
    <Button variant="default">
      <ButtonText>Click me</ButtonText>
    </Button>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Button(
      variant: ButtonVariant.defaultVariant,
      onPressed: () {},
      child: Text('Click me'),
    );
  }
}
```

:::

## Why Galaxy UI?

### 🎯 Universal Platform Support
Choose your favorite framework - web or mobile. We support Vue 3, React, Angular, React Native, and Flutter with the same beautiful components.

### 📱 Web to Mobile
**197 component implementations** across **5 platforms**:
- **Web**: 41 components × 3 frameworks = 123 implementations (Vue 3, React 18+, Angular 18+)
- **Mobile**: 37 components × 2 platforms = 74 implementations (React Native with NativeWind v4, Flutter with Material 3)

### 🔓 You Own The Code
Unlike npm packages, you copy the component code directly into your project. Modify it as you need. No version conflicts. No black-box dependencies.

### ♿ Accessibility First
Built on battle-tested Radix primitives for web (Radix UI, Radix Vue, Radix NG). WCAG 2.1 compliant with keyboard navigation, focus management, and screen reader support.

### 🎨 Fully Customizable
Every component uses Tailwind CSS with CSS variables (web), NativeWind v4 (React Native), or Material 3 theming (Flutter). Easy to customize colors, spacing, and styles to match your brand.

## Inspired By The Best

Galaxy UI stands on the shoulders of giants:

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible React components
- **[Radix Vue](https://www.radix-vue.com/)** - Radix primitives for Vue
- **[Radix NG](https://www.radix-ng.com/)** - Radix primitives for Angular
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Author

Created by **Bùi Trọng Hiếu (kevinbui)**

- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com
- Repository: [buikevin/galaxy-design](https://github.com/buikevin/galaxy-design)

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
