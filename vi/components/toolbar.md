# Toolbar

A container for grouping a set of controls, such as buttons, toggle groups, or dropdown menus.


<ComponentPreview name="ToolbarDemo">
  <template #preview>
    <DemoContainer>
      <ToolbarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template><div>Demo</div></template>
```

```tsx [React]
export default function App() { return <div>Demo</div> }
```

```typescript [Angular]
@Component({ template: `<div>Demo</div>` })
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>
## Cài đặt

::: code-group
```bash [React]
npx @galaxy-stack/nebula-cli add toolbar
```

```bash [Vue]
npx @galaxy-stack/nebula-cli add toolbar
```

```bash [Angular]
npx @galaxy-stack/nebula-cli add toolbar
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@/components/toolbar'

export default function ToolbarDemo() {
  return (
    <Toolbar>
      <ToolbarButton>Undo</ToolbarButton>
      <ToolbarButton>Redo</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="bold">Bold</ToolbarToggleItem>
        <ToolbarToggleItem value="italic">Italic</ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  )
}
```
:::


## API Reference

### Toolbar Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Hướng của toolbar | All |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Hướng đọc cho focus | All |
| `loop` | `boolean` | `true` | Lặp focus từ cuối về đầu | All |
| `className` | `string` | `''` | CSS class cho toolbar root | All |
| `children` | `ReactNode` | - | Nội dung toolbar | All |

### ToolbarButton Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như phần tử con | React, Vue, Angular |
| `disabled` | `boolean` | `false` | Vô hiệu hóa button | All |
| `className` | `string` | `''` | CSS class | All |

### ToolbarSeparator Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | All |

### ToolbarToggleGroup Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `type` | `'single' \| 'multiple'` | - | Kiểu toggle | All |
| `className` | `string` | `''` | CSS class | All |

### ToolbarToggleItem Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị toggle item | All |
| `disabled` | `boolean` | `false` | Vô hiệu hóa item | All |
| `className` | `string` | `''` | CSS class | All |

## Components

- `Toolbar` - Container toolbar chính
- `ToolbarButton` - Button có thể click
- `ToolbarSeparator` - Phân cách trực quan
- `ToolbarLink` - Link button
- `ToolbarToggleGroup` - Nhóm các toggle items
- `ToolbarToggleItem` - Toggle button riêng lẻ


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
