# Form

A form component that provides validation, error handling, and accessible form controls.

<ComponentPreview name="FormDemo">
  <template #preview>
    <DemoContainer>
      <FormDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
</script>

<template>
  <Form>
    <FormField>
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormDescription>This is your public email.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
  </Form>
</template>
```

```tsx [React]
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <Form>
      <FormField>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormDescription>This is your public email.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
    </Form>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { FormComponent, FormFieldComponent, FormItemComponent, FormLabelComponent, FormControlComponent, FormDescriptionComponent, FormMessageComponent } from '@/components/ui/form';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, FormFieldComponent, FormItemComponent, FormLabelComponent, FormControlComponent, FormDescriptionComponent, FormMessageComponent, InputComponent],
  template: `
    <ui-form>
      <ui-form-field>
        <ui-form-item>
          <ui-form-label>Email</ui-form-label>
          <ui-form-control>
            <ui-input type="email" placeholder="Enter your email" />
          </ui-form-control>
          <ui-form-description>This is your public email.</ui-form-description>
          <ui-form-message />
        </ui-form-item>
      </ui-form-field>
    </ui-form>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add form
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add form
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add form
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add form
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add form
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `react-hook-form`, `@radix-ui/react-label`
- **Vue**: `radix-vue`, `vee-validate`
- **Angular**: `@angular/forms`, `@radix-ng/primitives`
- **React Native**: `react-hook-form`
- **Flutter**: No additional dependencies (uses built-in Form)

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FormDemo() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: { email: string }) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { useForm } from 'vee-validate'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const form = useForm({
  validationSchema: {
    email: (value: string) => {
      return value ? true : 'Email is required'
    },
  },
})

function onSubmit(values: { email: string }) {
  console.log(values)
}
</script>

<template>
  <Form @submit="onSubmit">
    <FormField v-slot="{ field, errorMessage }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Enter your email" v-bind="field" />
        </FormControl>
        <FormMessage v-if="errorMessage">{{ errorMessage }}</FormMessage>
      </FormItem>
    </FormField>
    <Button type="submit">Submit</Button>
  </Form>
</template>
```

:::

### With Validation

::: code-group

```tsx [React]
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string().min(2, "Username must be at least 2 characters"),
})

export default function FormValidation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>This is your public username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

:::

## API Reference

### Components

| Component | Description | Props |
|-----------|-------------|-------|
| `Form` | Root form container | `form`, `onSubmit`, `className` / `class` |
| `FormField` | Form field wrapper with validation | `control`, `name`, `render` |
| `FormItem` | Individual item wrapper | `className` / `class` |
| `FormLabel` | Label for form control | `htmlFor`, `className` / `class` |
| `FormControl` | Wrapper for form control | `className` / `class` |
| `FormDescription` | Help text below control | `className` / `class` |
| `FormMessage` | Error message display | `className` / `class` |

## Accessibility

- **Keyboard Navigation**: Tab through form fields, Enter to submit
- **Screen Reader**: Uses proper `<label>`, `aria-describedby`, `aria-invalid`
- **Error Handling**: Clear error messages with ARIA live regions
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
