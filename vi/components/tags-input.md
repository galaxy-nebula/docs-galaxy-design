# Tags Input

Input field for entering multiple tags or values.


<ComponentPreview name="TagsInputDemo">
  <template #preview>
    <DemoContainer>
      <TagsInputDemo />
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
npx @galaxy-stack/design-cli add tags-input
```

```bash [Vue]
npx @galaxy-stack/design-cli add tags-input
```

```bash [Angular]
npx @galaxy-stack/design-cli add tags-input
```
:::

## Usage

::: code-group
```tsx [React]
import { TagsInput } from '@/components/tags-input'
import { useState } from 'react'

export default function TagsInputDemo() {
  const [tags, setTags] = useState<string[]>(['react', 'vue'])

  return (
    <TagsInput
      value={tags}
      onChange={setTags}
      placeholder="Add tag..."
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { TagsInput } from '@/components/tags-input'

const tags = ref(['react', 'vue'])
</script>

<template>
  <TagsInput
    v-model="tags"
    placeholder="Add tag..."
  />
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { TagsInputComponent } from '@/components/tags-input'

@Component({
  selector: 'app-tags-input-demo',
  standalone: true,
  imports: [TagsInputComponent],
  template: `
    <ui-tags-input
      [value]="tags"
      (valueChange)="tags = $event"
      placeholder="Add tag..."
    />
  `
})
export class TagsInputDemo {
  tags = ['react', 'vue']
}
```
:::


## API Reference

### Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string[]` | `[]` | Giá trị tags hiện tại | All |
| `onChange` | `(tags: string[]) => void` | - | Gọi khi danh sách tags thay đổi | All |
| `onTagAdd` | `(tag: string) => void` | - | Gọi khi thêm tag | All |
| `onTagRemove` | `(tag: string) => void` | - | Gọi khi xóa tag | All |
| `placeholder` | `string` | `'Add tag...'` | Văn bản giữ chỗ cho input | All |
| `className` | `string` | `''` | CSS class cho container tags | All |
| `disabled` | `boolean` | `false` | Vô hiệu hóa việc thêm/xóa tags | All |

## Features

- Add tags by pressing Enter
- Remove last tag with Backspace
- Click X button to remove individual tags
- Duplicate prevention
- Focus ring styling

## Accessibility

- Proper keyboard navigation
- Screen reader support for tag removal
- Focus management

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
