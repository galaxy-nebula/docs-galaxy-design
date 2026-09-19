# Date Range Picker

Component date range picker để chọn khoảng ngày với calendar dropdown.

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

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add date-range-picker
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add date-range-picker
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add date-range-picker
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add date-range-picker
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add date-range-picker
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
import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function DateRangePickerDemo() {
  return <DateRangePicker placeholder="Chọn khoảng ngày" />
}
```

```vue [Vue]
<script setup lang="ts">
import { DateRangePicker } from '@/components/ui/date-range-picker'
</script>

<template>
  <DateRangePicker placeholder="Chọn khoảng ngày" />
</template>
```

:::

### Với Presets

::: code-group

```tsx [React]
import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function DateRangePickerWithPresets() {
  return (
    <DateRangePicker
      placeholder="Chọn khoảng ngày"
      presets={[
        { label: "7 ngày qua", value: { from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), to: new Date() } },
        { label: "30 ngày qua", value: { from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), to: new Date() } },
        { label: "90 ngày qua", value: { from: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), to: new Date() } },
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
| `dateRange` | `{ from: Date; to: Date }` | `undefined` | Khoảng ngày đã chọn | Tất cả |
| `defaultDateRange` | `{ from: Date; to: Date }` | `undefined` | Khoảng ngày mặc định | Tất cả |
| `placeholder` | `string` | `'Chọn khoảng ngày'` | Văn bản giữ chỗ | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu picker | Tất cả |
| `minDate` | `Date` | `undefined` | Ngày tối thiểu | Tất cả |
| `maxDate` | `Date` | `undefined` | Ngày tối đa | Tất cả |
| `presets` | `Array<{ label: string; value: DateRange }>` | `[]` | Preset chọn nhanh | Tất cả |
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
