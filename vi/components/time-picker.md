# Time Picker

Component time picker để chọn giá trị giờ.

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

## Cài đặt

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
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add time-picker
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `class-variance-authority`
- **Vue**: `class-variance-authority`
- **Angular**: `class-variance-authority`
- **React Native**: Không khả dụng (sử dụng native picker)
- **Flutter**: Không khả dụng (sử dụng TimePicker có sẵn)

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```tsx [React]
import { TimePicker } from "@/components/ui/time-picker"

export default function TimePickerDemo() {
  return <TimePicker placeholder="Chọn giờ" />
}
```

```vue [Vue]
<script setup lang="ts">
import { TimePicker } from '@/components/ui/time-picker'
</script>

<template>
  <TimePicker placeholder="Chọn giờ" />
</template>
```

:::

### Định dạng 12 giờ

::: code-group

```tsx [React]
import { TimePicker } from "@/components/ui/time-picker"

export default function TimePicker12h() {
  return <TimePicker placeholder="Chọn giờ" format="12h" />
}
```

```vue [Vue]
<script setup lang="ts">
import { TimePicker } from '@/components/ui/time-picker'
</script>

<template>
  <TimePicker placeholder="Chọn giờ" format="12h" />
</template>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `time` | `Date` | `undefined` | Giờ đã chọn | Tất cả |
| `defaultTime` | `Date` | `undefined` | Giờ mặc định | Tất cả |
| `placeholder` | `string` | `'Chọn giờ'` | Văn bản giữ chỗ | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu picker | Tất cả |
| `format` | `'12h' | '24h'` | `'24h'` | Định dạng giờ | Tất cả |
| `className` / `class` | `string` | `''` | Tên class CSS | Tất cả |
| `clearable` | `boolean` | `true` | Hiển thị nút xóa | Tất cả |

## Accessibility

- **Keyboard Navigation**: Phím mũi tên để điều chỉnh giờ, Enter để xác nhận
- **Screen Reader**: Sử dụng ARIA labels và live regions phù hợp
- **Focus Management**: Focus trap trong dropdown
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
