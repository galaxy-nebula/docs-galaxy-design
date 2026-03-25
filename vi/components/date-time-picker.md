# Date Time Picker

Component date time picker để chọn cả ngày và giờ.

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

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add date-time-picker
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add date-time-picker
```

```bash [yarn]
yarn dlx galaxy-design@latest add date-time-picker
```

```bash [bun]
bunx galaxy-design@latest add date-time-picker
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add date-time-picker
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `react-day-picker`, `date-fns`
- **Vue**: `radix-vue`, `vue-datepicker`
- **Angular**: `@radix-ng/primitives`, `date-fns`
- **React Native**: Không khả dụng (sử dụng native picker)
- **Flutter**: Không khả dụng (sử dụng DateTimePicker có sẵn)

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```tsx [React]
import { DateTimePicker } from "@/components/ui/date-time-picker"

export default function DateTimePickerDemo() {
  return <DateTimePicker placeholder="Chọn ngày và giờ" />
}
```

```vue [Vue]
<script setup lang="ts">
import { DateTimePicker } from '@/components/ui/date-time-picker'
</script>

<template>
  <DateTimePicker placeholder="Chọn ngày và giờ" />
</template>
```

:::

### Với Min/Max

::: code-group

```tsx [React]
import { DateTimePicker } from "@/components/ui/date-time-picker"

export default function DateTimePickerWithLimits() {
  const minDate = new Date()
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

  return (
    <DateTimePicker
      placeholder="Chọn ngày và giờ"
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
| `dateTime` | `Date` | `undefined` | Ngày và giờ đã chọn | Tất cả |
| `defaultDateTime` | `Date` | `undefined` | Giá trị mặc định | Tất cả |
| `placeholder` | `string` | `'Chọn ngày và giờ'` | Văn bản giữ chỗ | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu picker | Tất cả |
| `minDate` | `Date` | `undefined` | Ngày tối thiểu | Tất cả |
| `maxDate` | `Date` | `undefined` | Ngày tối đa | Tất cả |
| `showTime` | `boolean` | `true` | Hiển thị bộ chọn giờ | Tất cả |
| `timeFormat` | `'12h' | '24h'` | `'24h'` | Định dạng giờ | Tất cả |
| `className` / `class` | `string` | `''` | Tên class CSS | Tất cả |

## Accessibility

- **Keyboard Navigation**: Phím mũi tên để điều hướng, Enter để chọn
- **Screen Reader**: Sử dụng ARIA labels và live regions phù hợp
- **Focus Management**: Focus trap trong dropdown
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
