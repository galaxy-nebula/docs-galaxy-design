# Checkbox

A control that allows the user to toggle between checked and not checked.

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

```tsx [React Native]
import { View } from 'react-native'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '@/components/ui/text'

export default function App() {
  return (
    <View className="flex-row items-center gap-2">
      <Checkbox />
      <Text>Accept terms and conditions</Text>
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/checkbox.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GalaxyCheckbox(
          value: false,
          onChanged: (value) {},
        ),
        const SizedBox(width: 8),
        const Text('Accept terms and conditions'),
      ],
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

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add checkbox
```

:::

## Usage

### Basic Example

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
    <label for="terms">Accept terms and conditions</label>
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
      <label htmlFor="terms">Accept terms and conditions</label>
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
      <label for="terms">Accept terms and conditions</label>
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
      <Text>Accept terms and conditions</Text>
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
        const Text('Accept terms and conditions'),
      ],
    );
  }
}
```

:::

### With Form

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
      <label for="marketing">Receive marketing emails</label>
    </div>
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" v-model="termsAccepted" required />
      <label for="terms">Accept terms and conditions</label>
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
        <label htmlFor="marketing">Receive marketing emails</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <label htmlFor="terms">Accept terms and conditions</label>
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
        <label for="marketing">Receive marketing emails</label>
      </div>
      <div class="flex items-center space-x-2">
        <ui-checkbox id="terms" [(ngModel)]="termsAccepted" required />
        <label for="terms">Accept terms and conditions</label>
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
        <Text>Receive marketing emails</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Checkbox checked={false} onCheckedChange={() => {}} />
        <Text>Accept terms and conditions</Text>
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
            const Text('Receive marketing emails'),
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
            const Text('Accept terms and conditions'),
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
| `checked` | `boolean \| 'indeterminate'` | - | Controlled checked state | React, Vue, Angular |
| `defaultChecked` | `boolean \| 'indeterminate'` | - | Uncontrolled initial checked state | React, Vue |
| `value` | `boolean` | - | Controlled checked state (Flutter) | Flutter |
| `disabled` | `boolean` | `false` | Disables the checkbox | All |
| `required` | `boolean` | - | Requires a value before form submission | React, Vue, Angular |
| `name` | `string` | - | Name for form submission | React, Vue, Angular |
| `value` | `string` | `'on'` | Value for form submission | React, Vue, Angular |
| `id` | `string` | - | ID of the checkbox | Vue, Angular |
| `class` / `className` | `string` | `''` | CSS class names | All |
| `label` | `string` | - | Label text | React Native, Flutter |
| `onCheckedChange` / `update:checked` / `checkedChange` / `onChanged` | `(checked: boolean \| 'indeterminate') => void` | - | Called when checked state changes | All |

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
      <label htmlFor="terms">Accept terms and conditions</label>
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
    <label for="terms">Accept terms and conditions</label>
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
      <label for="terms">Accept terms and conditions</label>
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
        label="Accept terms and conditions"
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
          label: 'Accept terms and conditions',
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
| `className` / `class` | `string` | `''` | CSS class names for the indicator |

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


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
