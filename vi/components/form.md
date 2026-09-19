# Form

Component form cung cấp validation, xử lý lỗi và các form controls dễ tiếp cận.

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
          <Input type="email" placeholder="Nhập email của bạn" />
        </FormControl>
        <FormDescription>Đây là email công khai của bạn.</FormDescription>
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
            <Input type="email" placeholder="Nhập email của bạn" />
          </FormControl>
          <FormDescription>Đây là email công khai của bạn.</FormDescription>
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
            <ui-input type="email" placeholder="Nhập email của bạn" />
          </ui-form-control>
          <ui-form-description>Đây là email công khai của bạn.</ui-form-description>
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

## Cài đặt

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
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add form
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `react-hook-form`, `@radix-ui/react-label`
- **Vue**: `radix-vue`, `vee-validate`
- **Angular**: `@angular/forms`, `@radix-ng/primitives`
- **React Native**: `react-hook-form`
- **Flutter**: Không cần thêm dependencies (sử dụng Form có sẵn)

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

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
                <Input type="email" placeholder="Nhập email của bạn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Gửi</Button>
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
      return value ? true : 'Email là bắt buộc'
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
          <Input type="email" placeholder="Nhập email của bạn" v-bind="field" />
        </FormControl>
        <FormMessage v-if="errorMessage">{{ errorMessage }}</FormMessage>
      </FormItem>
    </FormField>
    <Button type="submit">Gửi</Button>
  </Form>
</template>
```

:::

### Với Validation

::: code-group

```tsx [React]
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  username: z.string().min(2, "Tên đăng nhập phải có ít nhất 2 ký tự"),
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
              <FormLabel>Tên đăng nhập</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên đăng nhập" {...field} />
              </FormControl>
              <FormDescription>Đây là tên đăng nhập công khai của bạn.</FormDescription>
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
                <Input type="email" placeholder="Nhập email của bạn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Gửi</Button>
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
| `Form` | Container form chính | `form`, `onSubmit`, `className` / `class` |
| `FormField` | Wrapper field form với validation | `control`, `name`, `render` |
| `FormItem` | Wrapper item riêng lẻ | `className` / `class` |
| `FormLabel` | Label cho form control | `htmlFor`, `className` / `class` |
| `FormControl` | Wrapper cho form control | `className` / `class` |
| `FormDescription` | Văn bản trợ giúp bên dưới control | `className` / `class` |
| `FormMessage` | Hiển thị thông báo lỗi | `className` / `class` |

## Accessibility

- **Keyboard Navigation**: Tab qua các form fields, Enter để gửi
- **Screen Reader**: Sử dụng `<label>`, `aria-describedby`, `aria-invalid` phù hợp
- **Error Handling**: Thông báo lỗi rõ ràng với ARIA live regions
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
