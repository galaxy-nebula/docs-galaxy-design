# Date Picker

Component date picker để chọn ngày đơn với calendar dropdown.

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

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add date-picker
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add date-picker
```

```bash [yarn]
yarn dlx galaxy-design@latest add date-picker
```

```bash [bun]
bunx galaxy-design@latest add date-picker
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add date-picker
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `react-day-picker`, `date-fns`
- **Vue**: `radix-vue`, `vue-datepicker`
- **Angular**: `@radix-ng/primitives`, `date-fns`
- **React Native**: Không khả dụng (sử dụng date-time-picker)
- **Flutter**: Không khả dụng (sử dụng DatePicker có sẵn)

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```tsx [React]
import { DatePicker } from "@/components/ui/date-picker"

export default function DatePickerDemo() {
  return <DatePicker placeholder="Chọn ngày" />
}
```

```vue [Vue]
<script setup lang="ts">
import { DatePicker } from '@/components/ui/date-picker'
</script>

<template>
  <DatePicker placeholder="Chọn ngày" />
</template>
```

:::

### Với Form

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
              <FormLabel>Ngày sinh</FormLabel>
              <FormControl>
                <DatePicker {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Gửi</Button>
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
| `date` | `Date` | `undefined` | Ngày đã chọn | Tất cả |
| `defaultDate` | `Date` | `undefined` | Ngày mặc định | Tất cả |
| `placeholder` | `string` | `'Chọn ngày'` | Văn bản giữ chỗ | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu picker | Tất cả |
| `minDate` | `Date` | `undefined` | Ngày tối thiểu | Tất cả |
| `maxDate` | `Date` | `undefined` | Ngày tối đa | Tất cả |
| `className` / `class` | `string` | `''` | Tên class CSS | Tất cả |

## Accessibility

- **Keyboard Navigation**: Phím mũi tên để điều hướng calendar, Enter để chọn
- **Screen Reader**: Sử dụng ARIA labels và live regions phù hợp
- **Focus Management**: Focus trap trong calendar dropdown
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
