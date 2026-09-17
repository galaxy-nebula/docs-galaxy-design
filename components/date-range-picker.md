# Date Range Picker

A date range picker component for selecting date ranges with calendar dropdown.

<ComponentPreview name="DateRangePickerDemo">
  <template #preview>
    <DemoContainer>
      <DateRangePickerDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DateRangePicker } from '@/components/ui/date-range-picker'
</script>

<template>
  <DateRangePicker />
</template>
```

```tsx [React]
import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function App() {
  return <DateRangePicker />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DateRangePickerComponent } from '@/components/ui/date-range-picker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DateRangePickerComponent],
  template: `<ui-date-range-picker />`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/design-cli@latest add date-range-picker
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add date-range-picker
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add date-range-picker
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add date-range-picker
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add date-range-picker
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `react-day-picker`, `date-fns`
- **Vue**: `radix-vue`, `vue-datepicker`
- **Angular**: `@radix-ng/primitives`, `date-fns`
- **React Native**: Not available (use date-time-picker instead)
- **Flutter**: Not available (use built-in DatePicker)

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function DateRangePickerDemo() {
  return <DateRangePicker placeholder="Pick a date range" />
}
```

```vue [Vue]
<script setup lang="ts">
import { DateRangePicker } from '@/components/ui/date-range-picker'
</script>

<template>
  <DateRangePicker placeholder="Pick a date range" />
</template>
```

:::

### With Presets

::: code-group

```tsx [React]
import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function DateRangePickerWithPresets() {
  return (
    <DateRangePicker
      placeholder="Pick a date range"
      presets={[
        { label: "Last 7 days", value: { from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), to: new Date() } },
        { label: "Last 30 days", value: { from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() } },
        { label: "Last 90 days", value: { from: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), to: new Date() } },
      ]}
    />
  )
}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `dateRange` | `{ from: Date; to: Date }` | `undefined` | Selected date range | All |
| `defaultDateRange` | `{ from: Date; to: Date }` | `undefined` | Default selected range | All |
| `placeholder` | `string` | `'Pick a date range'` | Placeholder text | All |
| `disabled` | `boolean` | `false` | Disable the picker | All |
| `minDate` | `Date` | `undefined` | Minimum selectable date | All |
| `maxDate` | `Date` | `undefined` | Maximum selectable date | All |
| `presets` | `Array<{ label: string; value: DateRange }>` | `[]` | Quick selection presets | All |
| `className` / `class` | `string` | `''` | CSS class names | All |

## Accessibility

- **Keyboard Navigation**: Arrow keys to navigate calendar, Enter to select
- **Screen Reader**: Uses proper ARIA labels and live regions
- **Focus Management**: Focus trap in calendar dropdown
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
