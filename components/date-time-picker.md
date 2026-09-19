# Date Time Picker

A date and time picker component for selecting both date and time values.

<ComponentPreview name="DateTimePickerDemo">
  <template #preview>
    <DemoContainer>
      <DateTimePickerDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DateTimePicker } from '@/components/ui/date-time-picker'
</script>

<template>
  <DateTimePicker />
</template>
```

```tsx [React]
import { DateTimePicker } from "@/components/ui/date-time-picker"

export default function App() {
  return <DateTimePicker />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DateTimePickerComponent } from '@/components/ui/date-time-picker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DateTimePickerComponent],
  template: `<ui-date-time-picker />`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add date-time-picker
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add date-time-picker
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add date-time-picker
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add date-time-picker
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add date-time-picker
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `react-day-picker`, `date-fns`
- **Vue**: `radix-vue`, `vue-datepicker`
- **Angular**: `@radix-ng/primitives`, `date-fns`
- **React Native**: Not available (use native picker)
- **Flutter**: Not available (use built-in DateTimePicker)

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { DateTimePicker } from "@/components/ui/date-time-picker"

export default function DateTimePickerDemo() {
  return <DateTimePicker placeholder="Pick date and time" />
}
```

```vue [Vue]
<script setup lang="ts">
import { DateTimePicker } from '@/components/ui/date-time-picker'
</script>

<template>
  <DateTimePicker placeholder="Pick date and time" />
</template>
```

:::

### With Min/Max

::: code-group

```tsx [React]
import { DateTimePicker } from "@/components/ui/date-time-picker"

export default function DateTimePickerWithLimits() {
  const minDate = new Date()
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

  return (
    <DateTimePicker
      placeholder="Pick date and time"
      minDate={minDate}
      maxDate={maxDate}
    />
  )
}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `dateTime` | `Date` | `undefined` | Selected date and time | All |
| `defaultDateTime` | `Date` | `undefined` | Default selected value | All |
| `placeholder` | `string` | `'Pick date and time'` | Placeholder text | All |
| `disabled` | `boolean` | `false` | Disable the picker | All |
| `minDate` | `Date` | `undefined` | Minimum selectable date | All |
| `maxDate` | `Date` | `undefined` | Maximum selectable date | All |
| `showTime` | `boolean` | `true` | Show time selector | All |
| `timeFormat` | `'12h' | '24h'` | `'24h'` | Time format | All |
| `className` / `class` | `string` | `''` | CSS class names | All |

## Accessibility

- **Keyboard Navigation**: Arrow keys to navigate, Enter to select
- **Screen Reader**: Uses proper ARIA labels and live regions
- **Focus Management**: Focus trap in dropdown
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
