# Time Picker

A time picker component for selecting time values only.

<ComponentPreview name="TimePickerDemo">
  <template #preview>
    <DemoContainer>
      <TimePickerDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { TimePicker } from '@/components/ui/time-picker'
</script>

<template>
  <TimePicker />
</template>
```

```tsx [React]
import { TimePicker } from "@/components/ui/time-picker"

export default function App() {
  return <TimePicker />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TimePickerComponent } from '@/components/ui/time-picker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimePickerComponent],
  template: `<ui-time-picker />`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/design-cli@latest add time-picker
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add time-picker
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add time-picker
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add time-picker
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add time-picker
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `class-variance-authority`
- **Vue**: `class-variance-authority`
- **Angular**: `class-variance-authority`
- **React Native**: Not available (use native picker)
- **Flutter**: Not available (use built-in TimePicker)

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { TimePicker } from "@/components/ui/time-picker"

export default function TimePickerDemo() {
  return <TimePicker placeholder="Pick a time" />
}
```

```vue [Vue]
<script setup lang="ts">
import { TimePicker } from '@/components/ui/time-picker'
</script>

<template>
  <TimePicker placeholder="Pick a time" />
</template>
```

:::

### 12-Hour Format

::: code-group

```tsx [React]
import { TimePicker } from "@/components/ui/time-picker"

export default function TimePicker12h() {
  return <TimePicker placeholder="Pick a time" format="12h" />
}
```

```vue [Vue]
<script setup lang="ts">
import { TimePicker } from '@/components/ui/time-picker'
</script>

<template>
  <TimePicker placeholder="Pick a time" format="12h" />
</template>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `time` | `Date` | `undefined` | Selected time | All |
| `defaultTime` | `Date` | `undefined` | Default selected time | All |
| `placeholder` | `string` | `'Pick a time'` | Placeholder text | All |
| `disabled` | `boolean` | `false` | Disable the picker | All |
| `format` | `'12h' | '24h'` | `'24h'` | Time format | All |
| `className` / `class` | `string` | `''` | CSS class names | All |
| `clearable` | `boolean` | `true` | Show clear button | All |

## Accessibility

- **Keyboard Navigation**: Arrow keys to adjust time, Enter to confirm
- **Screen Reader**: Uses proper ARIA labels and live regions
- **Focus Management**: Focus trap in dropdown
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
