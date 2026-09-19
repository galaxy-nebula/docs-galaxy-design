# Checkbox

Điều khiển cho phép người dùng chuyển đổi giữa trạng thái checked và unchecked.

<ComponentPreview name="CheckboxDemo">
  <template #preview>
    <DemoContainer>
      <CheckboxDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label for="terms">Accept terms and conditions</label>
  </div>
</template>
```

```tsx [React]
import { Checkbox } from "@/components/ui/checkbox"

export default function App() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox id="terms"></ui-checkbox>
      <label for="terms">Accept terms and conditions</label>
    </div>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add checkbox
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add checkbox
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add checkbox
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add checkbox
```

:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" v-model="checked" />
    <label for="terms">Chấp nhận điều khoản và điều kiện</label>
  </div>
</template>
```

```tsx [React]
"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" defaultChecked />
      <label htmlFor="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui/checkbox';

@Component({
  selector: 'app-checkbox-demo',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox [(ngModel)]="checked" id="terms" />
      <label for="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  `
})
export class CheckboxDemoComponent {
  checked = true;
}
```

```tsx [React Native]
"use client"

import { View } from 'react-native'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '@/components/ui/text'

export default function CheckboxDemo() {
  return (
    <View className="flex-row items-center gap-2">
      <Checkbox checked={true} onCheckedChange={() => {}} />
      <Text>Chấp nhận điều khoản và điều kiện</Text>
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/checkbox.dart';

class CheckboxDemo extends StatefulWidget {
  @override
  State<CheckboxDemo> createState() => _CheckboxDemoState();
}

class _CheckboxDemoState extends State<CheckboxDemo> {
  bool _checked = true;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GalaxyCheckbox(
          value: _checked,
          onChanged: (value) {
            setState(() {
              _checked = value ?? false;
            });
          },
        ),
        const SizedBox(width: 8),
        const Text('Chấp nhận điều khoản và điều kiện'),
      ],
    );
  }
}
```

:::

### Với Form

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const marketingEmails = ref(false)
const termsAccepted = ref(false)
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center space-x-2">
      <Checkbox id="marketing" v-model="marketingEmails" />
      <label for="marketing">Nhận email marketing</label>
    </div>
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" v-model="termsAccepted" required />
      <label for="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  </div>
</template>
```

```tsx [React]
"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxForm() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <label htmlFor="marketing">Nhận email marketing</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <label htmlFor="terms">Chấp nhận điều khoản và điều kiện</label>
      </div>
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui/checkbox';

@Component({
  selector: 'app-checkbox-form',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="space-y-4">
      <div class="flex items-center space-x-2">
        <ui-checkbox id="marketing" [(ngModel)]="marketingEmails" />
        <label for="marketing">Nhận email marketing</label>
      </div>
      <div class="flex items-center space-x-2">
        <ui-checkbox id="terms" [(ngModel)]="termsAccepted" required />
        <label for="terms">Chấp nhận điều khoản và điều kiện</label>
      </div>
    </div>
  `
})
export class CheckboxFormComponent {
  marketingEmails = false;
  termsAccepted = false;
}
```

```tsx [React Native]
"use client"

import { View } from 'react-native'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '@/components/ui/text'

export default function CheckboxForm() {
  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-2">
        <Checkbox checked={false} onCheckedChange={() => {}} />
        <Text>Nhận email marketing</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Checkbox checked={false} onCheckedChange={() => {}} />
        <Text>Chấp nhận điều khoản và điều kiện</Text>
      </View>
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/checkbox.dart';

class CheckboxForm extends StatefulWidget {
  @override
  State<CheckboxForm> createState() => _CheckboxFormState();
}

class _CheckboxFormState extends State<CheckboxForm> {
  bool _marketingEmails = false;
  bool _termsAccepted = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            GalaxyCheckbox(
              value: _marketingEmails,
              onChanged: (value) {
                setState(() {
                  _marketingEmails = value ?? false;
                });
              },
            ),
            const SizedBox(width: 8),
            const Text('Nhận email marketing'),
          ],
        ),
        Row(
          children: [
            GalaxyCheckbox(
              value: _termsAccepted,
              onChanged: (value) {
                setState(() {
                  _termsAccepted = value ?? false;
                });
              },
            ),
            const SizedBox(width: 8),
            const Text('Chấp nhận điều khoản và điều kiện'),
          ],
        ),
      ],
    );
  }
}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `checked` | `boolean \| 'indeterminate'` | - | Trạng thái checked được kiểm soát | React, Vue, Angular |
| `defaultChecked` | `boolean \| 'indeterminate'` | - | Trạng thái checked ban đầu không kiểm soát | React, Vue |
| `value` | `boolean` | - | Trạng thái checked được kiểm soát (Flutter) | Flutter |
| `disabled` | `boolean` | `false` | Vô hiệu hóa checkbox | Tất cả |
| `required` | `boolean` | - | Yêu cầu giá trị trước khi gửi form | React, Vue, Angular |
| `name` | `string` | - | Tên cho việc gửi form | React, Vue, Angular |
| `value` | `string` | `'on'` | Giá trị cho việc gửi form | React, Vue, Angular |
| `id` | `string` | - | ID của checkbox | Vue, Angular |
| `class` / `className` | `string` | `''` | Tên class CSS | Tất cả |
| `label` | `string` | - | Văn bản nhãn | React Native, Flutter |
| `onCheckedChange` / `update:checked` / `checkedChange` / `onChanged` | `(checked: boolean \| 'indeterminate') => void` | - | Gọi khi trạng thái checked thay đổi | Tất cả |

### React

```tsx
import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        defaultChecked
        onCheckedChange={(checked) => console.log(checked)}
      />
      <label htmlFor="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox
      id="terms"
      v-model="checked"
      :disabled="false"
      required
    />
    <label for="terms">Chấp nhận điều khoản và điều kiện</label>
  </div>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui/checkbox';

@Component({
  selector: 'app-checkbox-demo',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox
        [(ngModel)]="checked"
        id="terms"
        [disabled]="false"
        required
      />
      <label for="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  `
})
export class CheckboxDemoComponent {
  checked = true;
}
```

### React Native

```tsx
import { View } from 'react-native'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '@/components/ui/text'

export function CheckboxDemo() {
  return (
    <View className="flex-row items-center gap-2">
      <Checkbox
        checked={true}
        onCheckedChange={(checked) => console.log(checked)}
        disabled={false}
        label="Chấp nhận điều khoản và điều kiện"
      />
    </View>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/checkbox.dart';

class CheckboxDemo extends StatefulWidget {
  @override
  State<CheckboxDemo> createState() => _CheckboxDemoState();
}

class _CheckboxDemoState extends State<CheckboxDemo> {
  bool _checked = true;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GalaxyCheckbox(
          value: _checked,
          onChanged: (value) {
            setState(() {
              _checked = value ?? false;
            });
          },
          disabled: false,
          label: 'Chấp nhận điều khoản và điều kiện',
        ),
      ],
    );
  }
}
```

### Children Components

#### CheckboxIndicator (React, Vue)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` / `class` | `string` | `''` | Tên class CSS cho indicator |

```tsx [React]
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"

<Checkbox>
  <CheckboxIndicator className="custom-indicator" />
</Checkbox>
```

```vue [Vue]
import { Checkbox, CheckboxIndicator } from '@/components/ui/checkbox'

<Checkbox>
  <CheckboxIndicator class="custom-indicator" />
</Checkbox>
```


## Khả năng truy cập

- **Điều hướng bàn phím**: [TODO]
- **Đọc màn hình**: [TODO]
- **Quản lý focus**: [TODO]
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
