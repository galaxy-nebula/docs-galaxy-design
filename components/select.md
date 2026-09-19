# Select

Displays a list of options for the user to pick from—triggered by a button.

<ComponentPreview name="SelectDemo">
  <template #preview>
    <DemoContainer>
      <SelectDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select } from '@/components/ui/select'
</script>

<template>
  <Select>Example content</Select>
</template>
```

```tsx [React]
import { Select } from "@/components/ui/select"

export default function App() {
  return <Select>Example content</Select>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `<ui-select>Example content</ui-select>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Select, SelectItem } from '@/components/ui/select'

export default function App() {
  return (
    <Select placeholder="Select an option">
      <SelectItem label="Option 1" value="option-1" />
      <SelectItem label="Option 2" value="option-2" />
      <SelectItem label="Option 3" value="option-3" />
    </Select>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/select.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxySelect(
      items: [
        SelectItem(label: 'Option 1', value: 'option-1'),
        SelectItem(label: 'Option 2', value: 'option-2'),
        SelectItem(label: 'Option 3', value: 'option-3'),
      ],
      onChanged: (value) {},
      hint: const Text('Select an option'),
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
npx @galaxy-stack/nebula-cli@latest add select
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add select
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add select
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add select
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add select
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-select`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

No manual installation needed!
:::

## Usage

### React

```tsx
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"

export default function App() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select default-value="apple">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectContent>
  </Select>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `
    <ui-select default-value="apple">
      <ui-select-trigger class="w-[180px]">
        <ui-select-value placeholder="Select a fruit" />
      </ui-select-trigger>
      <ui-select-content>
        <ui-select-item value="apple">Apple</ui-select-item>
        <ui-select-item value="banana">Banana</ui-select-item>
        <ui-select-item value="orange">Orange</ui-select-item>
      </ui-select-content>
    </ui-select>
  `
})
export class AppComponent {}
```

### React Native

```tsx
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'

export default function App() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_select.dart';

class SelectExample extends StatefulWidget {
  @override
  _SelectExampleState createState() => _SelectExampleState();
}

class _SelectExampleState extends State<SelectExample> {
  String? selectedValue;

  @override
  Widget build(BuildContext context) {
    return GalaxySelect(
      value: selectedValue,
      hint: 'Select a fruit',
      items: [
        GalaxySelectOption(value: 'apple', label: 'Apple'),
        GalaxySelectOption(value: 'banana', label: 'Banana'),
        GalaxySelectOption(value: 'orange', label: 'Orange'),
      ],
      onChanged: (value) {
        setState(() {
          selectedValue = value;
        });
      },
    );
  }
}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | `undefined` | Controlled selected value | All |
| `defaultValue` | `string` | `undefined` | Uncontrolled initial value | All |
| `onValueChange` | `(value: string) => void` | - | Called when value changes | All |
| `open` | `boolean` | `undefined` | Controlled open state | React, Vue, Angular |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state | All |
| `onOpenChange` | `(open: boolean) => void` | - | Called when open state changes | React, Vue, Angular |
| `disabled` | `boolean` | `false` | Disables the select | All |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction | React, Vue, Angular |
| `name` | `string` | - | Name for form submission | All |
| `required` | `boolean` | `false` | Requires value before form submission | All |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

### Subcomponents

#### SelectTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### SelectContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `position` | `'popper' \| 'item-aligned'` | `'popper'` | Content positioning | React, Vue, Angular |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Side to render content | React, Vue, Angular |
| `sideOffset` | `number` | `4` | Offset from side | React, Vue, Angular |
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### SelectItem

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Unique value for the item | All |
| `label` | `string` | - | Display label | All |
| `disabled` | `boolean` | `false` | Disables the item | All |
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |

#### SelectValue

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `placeholder` | `string` | - | Placeholder text when no value | All |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

## Subcomponents

### SelectTrigger

Button that opens the select dropdown

### SelectContent

Container for select options

### SelectItem

Individual selectable option

### SelectValue

Displays the selected value



## Accessibility

- **Keyboard Navigation**: Arrow keys to navigate, Enter to select, Escape to close
- **Screen Reader**: Uses proper ARIA select pattern
- **Focus Management**: Focus management between trigger and options
- **WCAG Compliance**: WAI-ARIA design pattern compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)