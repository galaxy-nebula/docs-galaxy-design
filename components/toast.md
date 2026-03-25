# Toast

A succinct message that is displayed temporarily.

<ComponentPreview name="ToastDemo">
  <template #preview>
    <DemoContainer>
      <ToastDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showToast = () => {
  toast.success('Event has been created!')
}
</script>

<template>
  <div>
    <button @click="showToast">Show Toast</button>
    <Toaster />
  </div>
</template>
```

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function App() {
  return (
    <div>
      <button onClick={() => toast.success("Event has been created!")}>
        Show Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showToast()">Show Toast</button>
      <ui-toaster />
    </div>
  `
})
export class AppComponent {
  showToast() {
    toast.success('Event has been created!');
  }
}
```

```tsx [React Native]
import { Toaster } from '@/components/ui/toast'
import { toast } from 'sonner-native'

export default function App() {
  return (
    <View>
      <Button
        title="Show Toast"
        onPress={() => toast.success('Event has been created!')}
      />
      <Toaster />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/toast.dart';
import 'package:galaxy_kit/galaxy_kit.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyToaster(
      child: ElevatedButton(
        onPressed: () {
          GalaxyToast.success('Event has been created!');
        },
        child: Text('Show Toast'),
      ),
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
npx galaxy-design@latest add toast
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add toast
```

```bash [yarn]
yarn dlx galaxy-design@latest add toast
```

```bash [bun]
bunx galaxy-design@latest add toast
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add toast
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `sonner`
- **Vue**: `vue-sonner`
- **Angular**: `ngx-sonner`
- **React Native**: `sonner-native`
- **Flutter**: `galaxy_kit`

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function ToastDemo() {
  return (
    <div>
      <button onClick={() => toast("Event has been created!")}>
        Show Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showToast = () => {
  toast('Event has been created!')
}
</script>

<template>
  <div>
    <button @click="showToast">Show Toast</button>
    <Toaster />
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-toast-demo',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showToast()">Show Toast</button>
      <ui-toaster />
    </div>
  `
})
export class ToastDemoComponent {
  showToast() {
    toast('Event has been created!');
  }
}
```

:::

## Examples

### Success Toast

Display a success message.

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function SuccessToast() {
  return (
    <div>
      <button onClick={() => toast.success("Event has been created!")}>
        Show Success Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showSuccess = () => {
  toast.success('Event has been created!')
}
</script>

<template>
  <div>
    <button @click="showSuccess">Show Success Toast</button>
    <Toaster />
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-success-toast',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showSuccess()">Show Success Toast</button>
      <ui-toaster />
    </div>
  `
})
export class SuccessToastComponent {
  showSuccess() {
    toast.success('Event has been created!');
  }
}
```

:::

### Error Toast

Display an error message.

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function ErrorToast() {
  return (
    <div>
      <button onClick={() => toast.error("Something went wrong!")}>
        Show Error Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showError = () => {
  toast.error('Something went wrong!')
}
</script>

<template>
  <div>
    <button @click="showError">Show Error Toast</button>
    <Toaster />
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-error-toast',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showError()">Show Error Toast</button>
      <ui-toaster />
    </div>
  `
})
export class ErrorToastComponent {
  showError() {
    toast.error('Something went wrong!');
  }
}
```

:::

### Loading Toast

Display a loading state.

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function LoadingToast() {
  return (
    <div>
      <button onClick={() => toast.loading("Saving...")}>
        Show Loading Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showLoading = () => {
  toast.loading('Saving...')
}
</script>

<template>
  <div>
    <button @click="showLoading">Show Loading Toast</button>
    <Toaster />
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-loading-toast',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showLoading()">Show Loading Toast</button>
      <ui-toaster />
    </div>
  `
})
export class LoadingToastComponent {
  showLoading() {
    toast.loading('Saving...');
  }
}
```

:::

### Promise Toast

Automatically handle loading, success, and error states from a Promise.

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function PromiseToast() {
  const handlePromise = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Saving...',
        success: 'Saved!',
        error: 'Error',
      }
    )
  }

  return (
    <div>
      <button onClick={handlePromise}>Show Promise Toast</button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const handlePromise = () => {
  toast.promise(
    new Promise((resolve) => setTimeout(resolve, 2000)),
    {
      loading: 'Saving...',
      success: 'Saved!',
      error: 'Error',
    }
  )
}
</script>

<template>
  <div>
    <button @click="handlePromise">Show Promise Toast</button>
    <Toaster />
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-promise-toast',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="handlePromise()">Show Promise Toast</button>
      <ui-toaster />
    </div>
  `
})
export class PromiseToastComponent {
  handlePromise() {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Saving...',
        success: 'Saved!',
        error: 'Error',
      }
    );
  }
}
```

:::

## Props

### Toaster Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark' \| 'system'` | `'light'` | Visual theme for the toaster |
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-right'` | Screen position for toast notifications |
| `expand` | `boolean` | `false` | Whether stacked toasts can expand to show full content |
| `richColors` | `boolean` | `false` | Use rich colors for success, error, warning, and info toasts |
| `closeButton` | `boolean` | `false` | Show a close button on each toast |
| `duration` | `number` | `2000` | Default duration in milliseconds |
| `visibleToasts` | `number` | `3` | Maximum number of visible toasts |
| `offset` | `string \| number` | `32` | Offset from the screen edge |

## API

### `toast()`

The main function to display a toast notification.

```typescript
toast(message: string, options?: ToastOptions)
```

### `toast.success()`

Display a success toast.

```typescript
toast.success(message: string, options?: ToastOptions)
```

### `toast.error()`

Display an error toast.

```typescript
toast.error(message: string, options?: ToastOptions)
```

### `toast.warning()`

Display a warning toast.

```typescript
toast.warning(message: string, options?: ToastOptions)
```

### `toast.info()`

Display an info toast.

```typescript
toast.info(message: string, options?: ToastOptions)
```

### `toast.loading()`

Display a loading toast.

```typescript
toast.loading(message: string, options?: ToastOptions)
```

### `toast.promise()`

Automatically handle loading, success, and error states from a Promise.

```typescript
toast.promise(
  promise: Promise<T>,
  options: {
    loading: string,
    success: string | (data: T) => string,
    error: string | (error: Error) => string,
  }
)
```

### `toast.dismiss()`

Dismiss a toast.

```typescript
toast.dismiss(toastId?: string | number)
```

If `toastId` is not provided, all toasts will be dismissed.

### `toast.remove()`

Remove a toast.

```typescript
toast.remove(toastId?: string | number)
```

If `toastId` is not provided, all toasts will be removed.

## Related Components

- [Alert](./alert) - For inline messages within content
- [AlertDialog](./alert-dialog) - For modal confirmations
- [Badge](./badge) - For status indicators
