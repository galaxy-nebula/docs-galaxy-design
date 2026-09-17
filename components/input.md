# Input

A text input field with label and validation states.

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
    placeholder="Enter your email"
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
      placeholder="Enter your email"
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
      placeholder="Enter your email"
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
      placeholder="Enter your email"
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
      hintText: 'Enter your email',
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

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
# If you have installed galaxy-design globally
galaxy-design add input
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <Input
      type="email"
      placeholder="Enter your email"
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
    placeholder="Enter your email"
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
      placeholder="Enter your email"
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
      placeholder="Enter your email"
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
      hintText: 'Enter your email',
      keyboardType: TextInputType.emailAddress,
    );
  }
}
```

:::

### With Form

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
        placeholder="Enter your email"
        ariaInvalid={true}
      />
      <p className="text-sm text-red-500">Email is required</p>
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
      placeholder="Enter your email"
      aria-invalid="true"
    />
    <p class="text-sm text-red-500">Email is required</p>
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
        placeholder="Enter your email"
        [ariaInvalid]="true"
      />
      <p class="text-sm text-red-500">Email is required</p>
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
      placeholder="Enter your email"
      error="Email is required"
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
      hintText: 'Enter your email',
      errorText: 'Email is required',
      keyboardType: TextInputType.emailAddress,
    );
  }
}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `type` | `string` | `"text"` | Input type (text, password, email, number, etc.) | Web only (React, Vue, Angular) |
| `value` / `modelValue` | `string \| number` | - | Controlled value | React/Angular: `value`, Vue: `modelValue` |
| `defaultValue` | `string \| number` | - | Uncontrolled initial value | React only |
| `placeholder` | `string` | - | Placeholder text | All |
| `disabled` | `boolean` | `false` | Disables the input | All |
| `readOnly` / `readonly` | `boolean` | `false` | Makes the input read-only | Web only (React: `readOnly`, Angular: `readonly`) |
| `maxLength` / `maxlength` | `number` | - | Maximum input length | Web only (React: `maxLength`, Angular: `maxlength`) |
| `autoComplete` / `autocomplete` | `string` | - | Autocomplete hint | Web only |
| `ariaInvalid` | `boolean \| string` | - | ARIA invalid state | Web only (React, Angular) |
| `className` / `class` | `string` | `""` | CSS class names | React: `className`, Vue/Angular: `class` |
| `onChange` / `update:modelValue` / `onChangeText` | Function | - | Change handler | React: `onChange`, Vue: `update:modelValue`, Mobile: `onChangeText` |
| `editable` | `boolean` | `true` | Whether the input is editable | React Native only |
| `label` / `labelText` | `string` | - | Label text | Mobile only (React Native: `label`, Flutter: `labelText`) |
| `error` / `errorText` | `string` | - | Error text | Mobile only (React Native: `error`, Flutter: `errorText`) |
| `enabled` | `boolean` | `true` | Whether the input is enabled | Flutter only |
| `obscureText` | `boolean` | `false` | Obscures the input text (for passwords) | Flutter only |
| `keyboardType` | `string` / `TextInputType` | - | Keyboard type | Mobile only (React Native: string, Flutter: TextInputType) |
| `maxLines` | `number` | `1` | Max lines | Flutter only |
| `controller` | `TextEditingController` | - | Controller for the text field | Flutter only |
| `onSubmitted` / `onSubmit` | `(value: string) => void` | - | Submit handler | Mobile only |
| `containerClassName` | `string` | - | Wrapper class name | React Native only |
| `labelClassName` | `string` | - | Label class name | React Native only |
| `inputClassName` | `string` | - | Input class name | React Native only |
| `errorClassName` | `string` | - | Error class name | React Native only |
| `onBlur` | `(event) => void` | - | Blur handler | React Native only |
| `onFocus` | `(event) => void` | - | Focus handler | React Native only |


## Accessibility

- **Keyboard Navigation**: Standard input keyboard navigation
- **Screen Reader**: Uses semantic `<input>` element with labels
- **Focus Management**: Focus visible with ring styles
- **WCAG Compliance**: WCAG 2.1 Level AA compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)