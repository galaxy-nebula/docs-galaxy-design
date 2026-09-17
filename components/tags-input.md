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
<script setup lang="ts">
import { ref } from 'vue'
import { TagsInput } from '@/components/ui/tags-input'

const tags = ref(['react', 'vue'])
</script>

<template>
  <TagsInput
    v-model="tags"
    placeholder="Add tag..."
  />
</template>
```

```tsx [React]
import { TagsInput } from '@/components/ui/tags-input'
import { useState } from 'react'

export default function App() {
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

```typescript [Angular]
import { Component } from '@angular/core';
import { TagsInputComponent } from '@/components/ui/tags-input';

@Component({
  selector: 'app-root',
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
export class AppComponent {
  tags = ['react', 'vue'];
}
```

```tsx [React Native]
import { TagsInput } from '@/components/ui/tags-input'
import { useState } from 'react'

export default function App() {
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

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/tags_input.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List<String> _tags = ['react', 'vue'];

  @override
  Widget build(BuildContext context) {
    return GalaxyTagsInput(
      tags: _tags,
      onTagsChanged: (tags) {
        setState(() {
          _tags = tags;
        });
      },
      hintText: 'Add tag...',
    );
  }
}
```
:::

  </template>
</ComponentPreview>
## Installation

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

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add tags-input
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

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string[]` | `[]` | Current tag values | All |
| `onChange` | `(tags: string[]) => void` | - | Called when tag list changes | All |
| `onTagAdd` | `(tag: string) => void` | - | Called when a tag is added | All |
| `onTagRemove` | `(tag: string) => void` | - | Called when a tag is removed | All |
| `placeholder` | `string` | `'Add tag...'` | Placeholder text for input | All |
| `className` | `string` | `''` | CSS class names for tags container | All |
| `disabled` | `boolean` | `false` | Disables tag entry and removal | All |

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

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
