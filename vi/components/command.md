# Command

Command palette for keyboard-first navigation and search.

::: warning Chỉ dành cho Web
Component này chỉ khả dụng cho các framework web (Vue, React, Angular). Command palette dành cho bàn phím không phù hợp với nền tảng mobile.
:::

<ComponentPreview name="CommandDemo">
  <template #preview>
    <DemoContainer>
      <CommandDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template>
  <Command>
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
```

```tsx [React]
import { Command } from '@/components/ui/command'
export default function App() {
  return <Command />
}
```

```typescript [Angular]
@Component({
  template: `<ui-command />`
})
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group
```bash [React]
npx galaxy-design add command
```

```bash [Vue]
npx galaxy-design add command
```

```bash [Angular]
npx galaxy-design add command
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@/components/command'

export default function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Command } from '@/components/command'
</script>

<template>
  <Command class="rounded-lg border shadow-md" placeholder="Type a command or search...">
    <template #default="{ search }">
      <div class="p-1">
        <div v-if="!search">No results found.</div>
        <div v-else>
          <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Suggestions
          </div>
          <button class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            Calendar
          </button>
        </div>
      </div>
    </template>
  </Command>
</template>
```
:::


## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị tìm kiếm được kiểm soát | React, Vue, Angular |
| `onValueChange` | `(value: string) => void` | - | Được gọi khi giá trị tìm kiếm thay đổi | React, Vue, Angular |
| `label` | `string` | - | Nhãn truy cập cho command menu | React, Vue, Angular |
| `loop` | `boolean` | `false` | Điều hướng bàn phím có lặp qua các item không | React, Vue, Angular |
| `shouldFilter` | `boolean` | `true` | Lọc tự động có được bật không | React, Vue, Angular |
| `className` / `class` | `string` | `""` | Tên CSS class | React (className), Vue/Angular (class) |
| `placeholder` | `string` | - | Văn bản giữ chỗ cho ô tìm kiếm | Vue, Angular |

### Sub-components

#### CommandDialog

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | - | Trạng thái mở được kiểm soát cho dialog | React, Vue, Angular |
| `defaultOpen` | `boolean` | `false` | Trạng thái mở ban đầu cho chế độ uncontrolled | React, Vue, Angular |
| `onOpenChange` | `(open: boolean) => void` | - | Được gọi khi trạng thái mở dialog thay đổi | React, Vue, Angular |

#### CommandInput

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `placeholder` | `string` | - | Văn bản giữ chỗ | Tất cả |
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue/Angular (class) |

#### CommandList

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue/Angular (class) |

#### CommandGroup

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `heading` | `string` | - | Tiêu đề nhóm | Tất cả |
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue/Angular (class) |

#### CommandItem

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `disabled` | `boolean` | `false` | Vô hiệu hóa item | React, Vue, Angular |
| `onSelect` | `(event: Event) => void` | - | Được gọi khi item được chọn | React, Vue, Angular |
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue/Angular (class) |

## Components

- `Command` - Container command chính
- `CommandInput` - Ô tìm kiếm
- `CommandList` - Danh sách các item có thể cuộn
- `CommandEmpty` - Hiển thị khi không có kết quả
- `CommandGroup` - Nhóm các item liên quan
- `CommandItem` - Item command riêng lẻ
- `CommandSeparator` - Dấu phân cách trực quan
- `CommandShortcut` - Hiển thị phím tắt bàn phím

## Examples

### Command Dialog

```tsx
const [open, setOpen] = useState(false)

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
}, [])

return (
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)
```

## Accessibility

- Keyboard navigation with arrow keys
- Type-ahead search filtering
- Proper ARIA labels and roles

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
