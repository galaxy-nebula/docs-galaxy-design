# Slider

An input where the user selects a value from within a given range.

<ComponentPreview name="SliderDemo">
  <template #preview>
    <DemoContainer>
      <SliderDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
</script>

<template>
  <Slider :default-value="[50]" :max="100" :step="1" class="w-[60%]" />
</template>
```

```tsx [React]
import { Slider } from "@/components/ui/slider"

export default function App() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SliderComponent } from '@/components/ui/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SliderComponent],
  template: `<ui-slider [value]="50" [min]="0" [max]="100" [step]="1" class="w-[60%]"></ui-slider>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Slider } from '@/components/ui/slider'

export default function App() {
  return (
    <Slider
      value={50}
      minimumValue={0}
      maximumValue={100}
      step={1}
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/slider.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  double _value = 50;

  @override
  Widget build(BuildContext context) {
    return GalaxySlider(
      value: _value,
      min: 0,
      max: 100,
      onChanged: (value) => setState(() => _value = value),
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
npx galaxy-design@latest add slider
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add slider
```

```bash [yarn]
yarn dlx galaxy-design@latest add slider
```

```bash [bun]
bunx galaxy-design@latest add slider
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add slider
```

:::

## Usage


## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `number[]` | - | Controlled slider values | All |
| `defaultValue` | `number[]` | `[0]` | Uncontrolled initial slider values | All |
| `onValueChange` | `(value: number[]) => void` | - | Called when slider values change | All |
| `onValueCommit` | `(value: number[]) => void` | - | Called when interaction ends | All |
| `name` | `string` | - | Name for form submission | All |
| `disabled` | `boolean` | `false` | Disables the slider | All |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider orientation | All |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction | React, Vue, Angular |
| `inverted` | `boolean` | `false` | Whether slider is visually inverted | React, Vue, Angular |
| `min` | `number` | `0` | Minimum value | All |
| `max` | `number` | `100` | Maximum value | All |
| `step` | `number` | `1` | Stepping interval | All |
| `minStepsBetweenThumbs` | `number` | `0` | Minimum permitted steps between thumbs | All |
| `form` | `string` | - | Associates slider inputs with a form | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

## Usage

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui'
import { ref } from 'vue'

const value = ref([50])
</script>

<template>
  <Slider v-model="value" :max="100" :step="1" class="w-[60%]" />
</template>
```

### React

```tsx
import { Slider } from '@/components/ui'

export default function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { SliderComponent } from '@/components/ui';

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [SliderComponent],
  template: `
    <ui-slider
      [value]="value"
      (valueChange)="value = $event"
      [min]="0"
      [max]="100"
      [step]="1"
      class="w-[60%]"
    />
  `
})
export class SliderDemoComponent {
  value = 50;
}
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
