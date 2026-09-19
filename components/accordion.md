# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

<ComponentPreview name="AccordionDemo">
  <template #preview>
    <DemoContainer>
      <AccordionDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Accordion } from '@/components/ui/accordion'
</script>

<template>
  <Accordion>Example content</Accordion>
</template>
```

```tsx [React]
import { Accordion } from "@/components/ui/accordion"

export default function App() {
  return <Accordion>Example content</Accordion>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `<ui-accordion>Example content</ui-accordion>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@/components/ui/accordion'

export default function App() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionHeader>Section 1</AccordionHeader>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>Section 2</AccordionHeader>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ExpansionPanelList(
      children: [
        ExpansionPanel(
          headerBuilder: (context, isExpanded) => const ListTile(title: Text('Section 1')),
          body: const Padding(
            padding: EdgeInsets.all(16),
            child: Text('Content for section 1'),
          ),
        ),
        ExpansionPanel(
          headerBuilder: (context, isExpanded) => const ListTile(title: Text('Section 2')),
          body: const Padding(
            padding: EdgeInsets.all(16),
            child: Text('Content for section 2'),
          ),
        ),
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
npx @galaxy-stack/nebula-cli@latest add accordion
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add accordion
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add accordion
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add accordion
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add accordion
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-accordion`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

No manual installation needed!
:::

## Usage

### React

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function App() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Content for item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Content for item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Item 1</AccordionTrigger>
      <AccordionContent>
        Content for item 1.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Item 2</AccordionTrigger>
      <AccordionContent>
        Content for item 2.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `
    <ui-accordion type="single" collapsible>
      <ui-accordion-item value="item-1">
        <ui-accordion-trigger>Item 1</ui-accordion-trigger>
        <ui-accordion-content>
          Content for item 1.
        </ui-accordion-content>
      </ui-accordion-item>
      <ui-accordion-item value="item-2">
        <ui-accordion-trigger>Item 2</ui-accordion-trigger>
        <ui-accordion-content>
          Content for item 2.
        </ui-accordion-content>
      </ui-accordion-item>
    </ui-accordion>
  `
})
export class AppComponent {}
```

### React Native

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function App() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Content for item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Content for item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_accordion.dart';

class AccordionExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyAccordion(
      type: AccordionType.single,
      collapsible: true,
      items: [
        GalaxyAccordionItem(
          value: 'item-1',
          header: const Text('Item 1'),
          content: const Text('Content for item 1.'),
        ),
        GalaxyAccordionItem(
          value: 'item-2',
          header: const Text('Item 2'),
          content: const Text('Content for item 2.'),
        ),
      ],
    );
  }
}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Accordion selection behavior (single or multiple open items) | All |
| `value` | `string \| string[] \| null` | `null` | Controlled value for the open item(s) | All |
| `defaultValue` | `string \| string[]` | `undefined` | Uncontrolled initial open item(s) | All |
| `collapsible` | `boolean` | `false` | Allow all items to be closed (single mode only) | All |
| `disabled` | `boolean` | `false` | Disables the accordion and all items | All |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Accordion orientation | All |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction for RTL or LTR layouts | All |
| `asChild` | `boolean` | `false` | Render the root as a child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names for the root element | React, React Native |
| `class` | `string` | `''` | CSS class names for the root element | Vue, Angular, Flutter |

### Subcomponents

#### AccordionItem

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Unique value for the item | All |
| `disabled` | `boolean` | `false` | Disables the item | All |
| `asChild` | `boolean` | `false` | Render as a child element | React, Vue, Angular |

#### AccordionTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as a child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### AccordionContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as a child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

## Subcomponents

### AccordionItem

Container for each accordion item

### AccordionTrigger

Clickable trigger to toggle accordion item

### AccordionContent

Collapsible content area



## Accessibility

- **Keyboard Navigation**: Space/Enter to toggle, Tab to navigate
- **Screen Reader**: Uses proper ARIA accordion pattern
- **Focus Management**: Focus management between triggers
- **WCAG Compliance**: WAI-ARIA design pattern compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)