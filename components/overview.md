# Components Overview

The CLI registry currently exposes the following installable component and block entries. Counts are generated from framework registries; they are not a claim of one-to-one API parity.

## Platform Coverage

| Platform | Components | Styling | Status |
|----------|-----------|---------|--------|
| **React 18+** | 66 | Tailwind CSS v3/v4 + Radix UI | Reference web coverage |
| **Vue 3** | 66 | Tailwind CSS v3/v4 + Radix Vue | Full component parity with React |
| **Angular 20+** | 64 | Tailwind CSS v3/v4 + Radix NG | Full component parity with React |
| **React Native** | 50 | NativeWind | Mobile-specific coverage |
| **Flutter** | 49 | Material Design 3 | Mobile-specific coverage |

The web registries share 61 base component names, generated from the canonical manifests in `packages/contracts`. Framework parity gaps and block counts are recorded in the manifest artifacts.

## Installation

Install components individually using the CLI:

::: code-group

```bash [npm]
npx galaxy-design@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add button
```

```bash [yarn]
yarn dlx galaxy-design@latest add button
```

```bash [bun]
bunx galaxy-design@latest add button
```

```bash [global]
galaxy-design add button
```

:::

Or install multiple components at once:

::: code-group

```bash [npm]
npx galaxy-design@latest add button input dialog
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add button input dialog
```

```bash [yarn]
yarn dlx galaxy-design@latest add button input dialog
```

```bash [bun]
bunx galaxy-design@latest add button input dialog
```

```bash [global]
galaxy-design add button input dialog
```

:::

## Component Categories

### Form Components

Essential form controls for user input:

- **[Button](./button)** - Displays a button or a component that looks like a button
- **[Input](./input)** - Displays a form input field or a component that looks like an input field
- **[Label](./label)** - Renders an accessible label associated with controls
- **[Select](./select)** - Displays a list of options for the user to pick from triggered by a button
- **[Checkbox](./checkbox)** - A control that allows the user to toggle between checked and not checked
- **[Radio Group](./radio-group)** - A set of checkable buttons where only one can be selected at a time
- **[Switch](./switch)** - A control that allows the user to toggle between checked and not checked
- **[Slider](./slider)** - An input where the user selects a value from within a given range
- **[Textarea](./textarea)** - Displays a form textarea or a component that looks like a textarea
- **[Calendar](./calendar)** - Full-featured date picker (web only)
- **[Calendar Range](./calendar-range)** - Date range picker with start and end dates (web only)
- **[Tags Input](./tags-input)** - Input field for entering multiple tags or values

### Layout Components

Components for organizing content:

- **[Separator](./separator)** - Visually or semantically separates content
- **[Accordion](./accordion)** - A vertically stacked set of interactive headings that each reveal a section of content
- **[Tabs](./tabs)** - A set of layered sections of content known as tab panels that are displayed one at a time
- **[Dialog](./dialog)** - A window overlaid on either the primary window or another dialog window
- **[Collapsible](./collapsible)** - An interactive component which expands/collapses a panel
- **[Aspect Ratio](./aspect-ratio)** - Displays content within a desired aspect ratio
- **[Scroll Area](./scroll-area)** - Augments native scroll functionality for custom, cross-browser styling (web only)
- **[Resizable](./resizable)** - Accessible resizable panel groups and layouts with keyboard support (web only)
- **[Sheet](./sheet)** - Slide-over panel that slides in from the edge of the screen

### Navigation Components

Components for navigation and menus:

- **[Dropdown Menu](./dropdown-menu)** - Displays a menu to the user triggered by a button
- **[Navigation Menu](./navigation-menu)** - A collection of links for navigating websites
- **[Menubar](./menubar)** - A visually persistent menu common in desktop applications
- **[Context Menu](./context-menu)** - Displays a menu to the user triggered by right-click or long-press
- **[Popover](./popover)** - Displays rich content in a portal, triggered by a button
- **[Tooltip](./tooltip)** - A popup that displays information on hover or focus
- **[Pagination](./pagination)** - Pagination component with page navigation
- **[Command](./command)** - Command palette for keyboard navigation

### Interactive Components

Interactive UI elements:

- **[Toggle](./toggle)** - A two-state button that can be either on or off
- **[Toggle Group](./toggle-group)** - A set of two-state buttons that can be toggled on or off

### Feedback Components

Components for status, loading, and system feedback:

- **[Alert Dialog](./alert-dialog)** - A modal dialog that interrupts the user with important content and expects a response
- **[Alert](./alert)** - Displays a callout for user attention
- **[Progress](./progress)** - Displays an indicator showing the completion progress of a task
- **[Skeleton](./skeleton)** - Loading placeholder skeleton
- **[Empty](./empty)** - Empty state placeholder
- **[Spinner](./spinner)** - Animated loading spinner



### Chart Components

Data visualization charts:

- **[Line Chart](../charts/line-chart)** - Display data as a responsive line chart with smooth curves and customizable styling
- **[Bar Chart](../charts/bar-chart)** - Display data as vertical or horizontal bars with support for stacked and grouped layouts
- **[Pie Chart](../charts/pie-chart)** - Display proportional data as a pie or donut chart with customizable labels and legend
- **[Donut Chart](../charts/donut-chart)** - Display proportional data as a donut chart with a hollow center
- **[Area Chart](../charts/area-chart)** - Visualize cumulative totals over time with filled areas and gradient support
- **[Radar Chart](../charts/radar-chart)** - Display multi-dimensional data comparison on a radial grid
- **[Scatter Chart](../charts/scatter-chart)** - Display distribution and correlation analysis with scatter plots
- **[Mixed Chart](../charts/mixed-chart)** - Combine multiple chart types (line, bar, area) in a single visualization
- **[Gauge Chart](../charts/gauge-chart)** - Display data as a gauge chart with customizable ranges and styling (Angular/React Native/Flutter only)



### Data Display Components

Components for displaying data:

- **[Avatar](./avatar)** - An image element with a fallback for representing the user
- **[Hover Card](./hover-card)** - For sighted users to preview content available behind a link
- **[Table](./table)** - Data table with sorting, filtering, and selection
- **[Kbd](./kbd)** - Keyboard key display
- **[Typography](./typography)** - Text formatting components

## Platform Support

### Web Frameworks

Web component APIs are intentionally similar, but the current catalogs are not identical:

- **Vue 3** - Composition API with `<script setup>`
- **React 18+** - Hooks with `forwardRef`
- **Angular 20+** - Standalone components with Signals

### Mobile Platforms

Mobile components are available for:

- **React Native** - Functional components with NativeWind v4 styling
- **Flutter** - StatelessWidget with Material Design 3

> **Note**: Not all web components are suitable for mobile (for example Hover Card and Context Menu), so mobile catalogs intentionally differ.

## Features

- **Accessible** - Built on Radix primitives (WAI-ARIA compliant)
- **Customizable** - Full control with Tailwind CSS
- **Type-safe** - TypeScript support for all frameworks
- **Dark mode** - Built-in dark mode support
- **Copy & Paste** - No npm dependencies, copy components directly to your project
- **Consistent API** - Similar API across all frameworks

## Usage Example

Each component works similarly across frameworks:

::: code-group

```vue [Vue]
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


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Next Steps

- Browse the [components](#component-categories) to find what you need
- Check the [CLI Usage](/guide/cli-usage) guide to learn more about the CLI
- Read the [Theming](/guide/theming) guide to customize the appearance


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
