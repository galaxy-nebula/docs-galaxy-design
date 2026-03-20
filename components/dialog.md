# Dialog

A window overlaid on either the primary window or another dialog window.

<ComponentPreview name="DialogDemo">
  <template #preview>
    <DemoContainer>
      <DialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>Example content</Dialog>
</template>
```

```tsx [React]
import { Dialog } from "@/components/ui/dialog"

export default function App() {
  return <Dialog>Example content</Dialog>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `<ui-dialog>Example content</ui-dialog>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><ButtonText>Open Dialog</ButtonText></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/dialog.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => GalaxyDialog(
            title: 'Dialog Title',
            content: const Text('Dialog content'),
          ),
        );
      },
      child: const Text('Open Dialog'),
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
npx galaxy-design@latest add dialog
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add dialog
```

```bash [yarn]
yarn dlx galaxy-design@latest add dialog
```

```bash [bun]
bunx galaxy-design@latest add dialog
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add dialog
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-dialog`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

No manual installation needed!
:::

## Usage

### React

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a description of the dialog.
        </DialogDescription>
      </DialogHeader>
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `
    <ui-dialog>
      <button trigger>Open Dialog</button>
      <div content>
        <ui-dialog-header>
          <ui-dialog-title>Dialog Title</ui-dialog-title>
          <ui-dialog-description>
            This is a description of the dialog.
          </ui-dialog-description>
        </ui-dialog-header>
        <button close>Close</button>
      </div>
    </ui-dialog>
  `
})
export class AppComponent {}
```

### React Native

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><ButtonText>Open Dialog</ButtonText></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant="outline">
            <ButtonText>Close</ButtonText>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_dialog.dart';

class DialogExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => GalaxyDialog(
            title: 'Dialog Title',
            description: 'This is a description of the dialog.',
            actions: [
              GalaxyButton(
                onPressed: () => Navigator.pop(context),
                child: const Text('Close'),
              ),
            ],
          ),
        );
      },
      child: const Text('Open Dialog'),
    );
  }
}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | `undefined` | Controlled open state | All |
| `defaultOpen` | `boolean` | `false` | Initial open state | All |
| `onOpenChange` | `(open: boolean) => void` | - | Called when open state changes | All |
| `modal` | `boolean` | `true` | Whether interaction outside is disabled | All |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

### Subcomponents

#### DialogTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### DialogContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### DialogHeader

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### DialogTitle

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### DialogDescription

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### DialogClose

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

## Subcomponents

### DialogTrigger

Button to open the dialog

### DialogContent

The dialog content container

### DialogHeader

Header section of dialog

### DialogTitle

Title of the dialog

### DialogDescription

Description text

### DialogFooter

Footer section for actions



## Accessibility

- **Keyboard Navigation**: Escape to close, Tab to navigate within
- **Screen Reader**: Uses dialog role with proper labeling
- **Focus Management**: Focus trapped within dialog when open
- **WCAG Compliance**: WCAG 2.1 Level AA compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)