# Input

Trường nhập liệu văn bản với nhãn và trạng thái xác thực.

<ComponentPreview name="InputDemo">
  <template #preview>
    <DemoContainer>
      <InputDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input
    type="text"
    placeholder="Nhập email của bạn"
    class="w-full max-w-sm"
  />
</template>
```

```tsx [React]
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <Input
      type="text"
      placeholder="Nhập email của bạn"
      className="w-full max-w-sm"
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent],
  template: `
    <ui-input
      type="text"
      placeholder="Nhập email của bạn"
      class="w-full max-w-sm"
    />
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Input } from '@/components/ui/input'

export default function App() {
  return (
    <Input
      placeholder="Nhập email của bạn"
      className="w-full"
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/input.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyInput(
      hintText: 'Nhập email của bạn',
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/design-cli@latest add input
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add input
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add input
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add input
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add input
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```tsx [React]
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <Input
      type="email"
      placeholder="Nhập email của bạn"
      className="w-full max-w-sm"
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input
    type="email"
    placeholder="Nhập email của bạn"
    class="w-full max-w-sm"
  />
</template>
```

```ts [Angular]
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent],
  template: `
    <ui-input
      type="email"
      placeholder="Nhập email của bạn"
      class="w-full max-w-sm"
    />
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Input } from '@/components/ui/input'

export default function App() {
  return (
    <Input
      placeholder="Nhập email của bạn"
      keyboardType="email-address"
      className="w-full"
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/input.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyInput(
      hintText: 'Nhập email của bạn',
      keyboardType: TextInputType.emailAddress,
    );
  }
}
```

:::

### Với Form

::: code-group

```tsx [React]
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function App() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Nhập email của bạn"
        ariaInvalid={true}
      />
      <p className="text-sm text-red-500">Email là bắt buộc</p>
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="Nhập email của bạn"
      aria-invalid="true"
    />
    <p class="text-sm text-red-500">Email là bắt buộc</p>
  </div>
</template>
```

```ts [Angular]
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';
import { LabelComponent } from '@/components/ui/label';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, LabelComponent],
  template: `
    <div class="space-y-2">
      <ui-label for="email">Email</ui-label>
      <ui-input
        id="email"
        type="email"
        placeholder="Nhập email của bạn"
        [ariaInvalid]="true"
      />
      <p class="text-sm text-red-500">Email là bắt buộc</p>
    </div>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Input } from '@/components/ui/input'

export default function App() {
  return (
    <Input
      label="Email"
      placeholder="Nhập email của bạn"
      error="Email là bắt buộc"
      keyboardType="email-address"
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/input.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyInput(
      labelText: 'Email',
      hintText: 'Nhập email của bạn',
      errorText: 'Email là bắt buộc',
      keyboardType: TextInputType.emailAddress,
    );
  }
}
```

:::

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `type` | `string` | `"text"` | Loại input (text, password, email, number, v.v.) | Web only (React, Vue, Angular) |
| `value` / `modelValue` | `string \| number` | - | Giá trị được kiểm soát | React/Angular: `value`, Vue: `modelValue` |
| `defaultValue` | `string \| number` | - | Giá trị khởi tạo không kiểm soát | React only |
| `placeholder` | `string` | - | Văn bản placeholder | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu hóa input | Tất cả |
| `readOnly` / `readonly` | `boolean` | `false` | Làm cho input chỉ đọc | Web only (React: `readOnly`, Angular: `readonly`) |
| `maxLength` / `maxlength` | `number` | - | Độ dài tối đa của input | Web only (React: `maxLength`, Angular: `maxlength`) |
| `autoComplete` / `autocomplete` | `string` | - | Gợi ý autocomplete | Web only |
| `ariaInvalid` | `boolean \| string` | - | Trạng thái ARIA invalid | Web only (React, Angular) |
| `className` / `class` | `string` | `""` | Tên class CSS | React: `className`, Vue/Angular: `class` |
| `onChange` / `update:modelValue` / `onChangeText` | Function | - | Handler khi thay đổi | React: `onChange`, Vue: `update:modelValue`, Mobile: `onChangeText` |
| `editable` | `boolean` | `true` | Input có chỉnh sửa được hay không | React Native only |
| `label` / `labelText` | `string` | - | Văn bản nhãn | Mobile only (React Native: `label`, Flutter: `labelText`) |
| `error` / `errorText` | `string` | - | Văn bản lỗi | Mobile only (React Native: `error`, Flutter: `errorText`) |
| `enabled` | `boolean` | `true` | Input có được bật hay không | Flutter only |
| `obscureText` | `boolean` | `false` | Ẩn văn bản input (cho mật khẩu) | Flutter only |
| `keyboardType` | `string` / `TextInputType` | - | Loại bàn phím | Mobile only (React Native: string, Flutter: TextInputType) |
| `maxLines` | `number` | `1` | Số dòng tối đa | Flutter only |
| `controller` | `TextEditingController` | - | Controller cho text field | Flutter only |
| `onSubmitted` / `onSubmit` | `(value: string) => void` | - | Handler khi submit | Mobile only |
| `containerClassName` | `string` | - | Tên class wrapper | React Native only |
| `labelClassName` | `string` | - | Tên class nhãn | React Native only |
| `inputClassName` | `string` | - | Tên class input | React Native only |
| `errorClassName` | `string` | - | Tên class lỗi | React Native only |
| `onBlur` | `(event) => void` | - | Handler khi mất focus | React Native only |
| `onFocus` | `(event) => void` | - | Handler khi nhận focus | React Native only |


## Khả năng truy cập

- **Điều hướng bàn phím**: Điều hướng bàn phím chuẩn cho input
- **Đọc màn hình**: Sử dụng thẻ `<input>` ngữ nghĩa với nhãn
- **Quản lý focus**: Focus được hiển thị với viền ring
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
