# Empty

Displays an empty state placeholder when there is no content.

<ComponentPreview name="EmptyDemo">
  <template #preview>
    <DemoContainer>
      <EmptyDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template>
  <Empty title="No content" description="Get started by creating your first item" />
</template>
```

```tsx [React]
import { Empty } from '@/components/ui/empty'
export default function App() {
  return <Empty />
}
```

```typescript [Angular]
@Component({
  template: `<ui-empty />`
})
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group
```bash [React]
npx galaxy-design add empty
```

```bash [Vue]
npx galaxy-design add empty
```

```bash [Angular]
npx galaxy-design add empty
```
:::

## Usage

::: code-group
```tsx [React]
import { Empty } from '@/components/empty'
import { Button } from '@/components/button'

export default function EmptyDemo() {
  return (
    <Empty description="No data available">
      <Button>Create New</Button>
    </Empty>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Empty } from '@/components/empty'
import { Button } from '@/components/button'
</script>

<template>
  <Empty description="No data available">
    <Button>Create New</Button>
  </Empty>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { EmptyComponent } from '@/components/empty'
import { ButtonDirective } from '@/components/button'

@Component({
  selector: 'app-empty-demo',
  standalone: true,
  imports: [EmptyComponent, ButtonDirective],
  template: `
    <ui-empty description="No data available">
      <button gButton>Create New</button>
    </ui-empty>
  `
})
export class EmptyDemo {}
```
:::


## API Reference

### Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `description` | `ReactNode` | - | Nội dung mô tả empty state | All |
| `image` | `ReactNode` | - | Nội dung icon hoặc hình ảnh tùy chỉnh | All |
| `imageAlt` | `string` | `'Empty'` | Nhãn truy cập cho minh họa mặc định | All |
| `className` | `string` | `''` | CSS class cho container | All |
| `children` | `ReactNode` | - | Nội dung action tùy chọn bên dưới mô tả | All |

## Examples

### Custom Image

::: code-group
```tsx [React]
<Empty
  image={<img src="/empty.svg" alt="No data" className="w-32 h-32" />}
  description="No items found"
/>
```
:::

### With Action Button

::: code-group
```tsx [React]
<Empty description="No projects yet">
  <Button onClick={() => navigate('/create')}>
    Create First Project
  </Button>
</Empty>
```
:::


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
