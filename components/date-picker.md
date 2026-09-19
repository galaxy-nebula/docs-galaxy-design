# Date Picker

A date picker component for selecting single dates with calendar dropdown.

<ComponentPreview name="DatePickerDemo">
  <template #preview>
    <DemoContainer>
      <DatePickerDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DatePicker } from '@/components/ui/date-picker'
</script>

<template>
  <DatePicker />
</template>
```

```tsx [React]
import { DatePicker } from "@/components/ui/date-picker"

export default function App() {
  return <DatePicker />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DatePickerComponent } from '@/components/ui/date-picker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePickerComponent],
  template: `<ui-date-picker />`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add date-picker
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add date-picker
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add date-picker
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add date-picker
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add date-picker
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
import { DatePicker } from "@/components/ui/date-picker"

export default function DatePickerDemo() {
  return <DatePicker placeholder="Pick a date" />
}
```

```vue [Vue]
<script setup lang="ts">
import { DatePicker } from '@/components/ui/date-picker'
</script>

<template>
  <DatePicker placeholder="Pick a date" />
</template>
```

:::

### With Form

::: code-group

```tsx [React]
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { DatePicker } from "@/components/ui/date-picker"
import { Button } from "@/components/ui/button"

export default function DatePickerForm() {
  const form = useForm({
    defaultValues: {
      date: undefined,
    },
  })

  function onSubmit(values: { date: Date }) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <DatePicker {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `date` | `Date` | `undefined` | Selected date | All |
| `defaultDate` | `Date` | `undefined` | Default selected date | All |
| `placeholder` | `string` | `'Pick a date'` | Placeholder text | All |
| `disabled` | `boolean` | `false` | Disable the picker | All |
| `minDate` | `Date` | `undefined` | Minimum selectable date | All |
| `maxDate` | `Date` | `undefined` | Maximum selectable date | All |
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
