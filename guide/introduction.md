# Introduction

Welcome to **Galaxy UI** - a universal component library that brings beautiful, accessible components to Vue, React, Angular, React Native, and Flutter.

## What is Galaxy UI?

Galaxy UI is a collection of re-usable components that spans both web and mobile platforms. For web, components are built on top of **Radix primitives** and styled with **Tailwind CSS**. For mobile, React Native uses **NativeWind v4** and Flutter uses **Material Design 3**. Unlike traditional component libraries, Galaxy UI follows the **copy-paste** philosophy pioneered by [shadcn/ui](https://ui.shadcn.com/).

### Key Features

- **🎨 Universal Platform Support** - Vue 3.3+, React 18+, Angular 18+, React Native 0.74+, Flutter 3.24+
- **📱 Web + Mobile** - Framework-specific registries across five platforms, with coverage differences documented explicitly
- **♿ Accessible** - Built on Radix primitives (Radix UI, Radix Vue, Radix NG) with WAI-ARIA support
- **🎭 Customizable** - Tailwind CSS + CSS variables (web), NativeWind v4 (React Native), Material Design 3 (Flutter)
- **📦 Copy-Paste** - Full code ownership, type-safe props, no locked dependencies
- **🌙 Dark Mode** - CSS variables theming (web), system theme detection (mobile)
- **🚀 CLI Tool** - `galaxy-design` CLI with framework auto-detection
- **📱 Mobile-First** - Dedicated React Native and Flutter catalogs optimized for their runtimes
- **🔧 TypeScript** - Full type safety with inferred prop types across all frameworks

## Why Copy-Paste?

### Traditional Libraries

```bash
npm install some-ui-library
```

**Problems:**
- ❌ Version conflicts
- ❌ Bundle size bloat
- ❌ Limited customization
- ❌ Breaking changes in updates

### Galaxy UI Approach

```bash
galaxy-design add button
```

**Benefits:**
- ✅ Full code ownership
- ✅ Complete customization
- ✅ No version conflicts
- ✅ Tree-shaking friendly

## Platform Support

Galaxy UI provides the same beautiful components across five platforms:

### Web Frameworks

#### Vue 3

Built with **[Radix Vue](https://www.radix-vue.com/)** primitives.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

#### React

Built with **[Radix UI](https://www.radix-ui.com/)** primitives.

```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Click me</Button>
}
```

#### Angular

Built with **[Radix NG](https://www.radix-ng.com/)** primitives.

```typescript
import { ButtonComponent } from '@/components/ui/button';

@Component({
  template: `<ui-button>Click me</ui-button>`
})
export class AppComponent {}
```

### Mobile Platforms

#### React Native

Built with **[NativeWind v4](https://www.nativewind.dev/)** for styling.

```tsx
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Button variant="default">
      <ButtonText>Click me</ButtonText>
    </Button>
  )
}
```

#### Flutter

Built with **[Material Design 3](https://m3.material.io/)** components.

```dart
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

## How It Works

1. **Initialize** your project with `galaxy-design init`
2. **Add** components you need with `galaxy-design add [component]`
3. **Customize** the copied code as needed
4. **Ship** your application

```bash
# Step 1: Initialize
galaxy-design init

# Step 2: Add components
galaxy-design add button input card

# Step 3: Use in your app
# Components are now in your src/components/ui folder
```

## Architecture

Galaxy UI is built on three pillars:

### 1. Radix Primitives

Unstyled, accessible components that handle:
- ♿ Accessibility (ARIA attributes)
- ⌨️ Keyboard navigation
- 🎯 Focus management
- 📱 Touch/mouse interactions

### 2. Tailwind CSS

Utility-first CSS framework for:
- 🎨 Styling components
- 🌙 Dark mode
- 📱 Responsive design
- 🎭 Easy customization

### 3. Framework Wrappers

Thin wrappers around Radix primitives:
- Vue 3 composables
- React hooks
- Angular services

## Philosophy

### Own Your Code

When you use Galaxy UI, you're not installing a black-box package. You're copying well-tested, production-ready code into your project.

### Customize Without Limits

Every component is just TypeScript/JavaScript and Tailwind classes. Modify anything:
- Change colors, spacing, borders
- Add or remove features
- Integrate with your state management
- Adapt to your design system

### Learn By Reading

The best way to learn is by reading code. With Galaxy UI, every component's source is in your project. Learn how things work!

## What's Next?

Ready to get started? Follow our installation guide:

→ [Installation Guide](./installation)

## Credits

Galaxy UI is inspired by and built upon the work of:

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled React primitives
- **[Radix Vue](https://www.radix-vue.com/)** - Vue port of Radix UI
- **[Radix NG](https://www.radix-ng.com/)** - Angular port of Radix UI
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
