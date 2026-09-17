# Card

Component card để hiển thị nội dung trong một hộp chứa với các phần header, content và footer.

<ComponentPreview name="CardDemo">
  <template #preview>
    <DemoContainer>
      <CardDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Tiêu đề Card</CardTitle>
      <CardDescription>Mô tả Card</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Nội dung Card</p>
    </CardContent>
    <CardFooter>
      <p>Footer Card</p>
    </CardFooter>
  </Card>
</template>
```

```tsx [React]
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tiêu đề Card</CardTitle>
        <CardDescription>Mô tả Card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Nội dung Card</p>
      </CardContent>
      <CardFooter>
        <p>Footer Card</p>
      </CardFooter>
    </Card>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent } from '@/components/ui/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent],
  template: `
    <ui-card>
      <ui-card-header>
        <ui-card-title>Tiêu đề Card</ui-card-title>
        <ui-card-description>Mô tả Card</ui-card-description>
      </ui-card-header>
      <ui-card-content>
        <p>Nội dung Card</p>
      </ui-card-content>
      <ui-card-footer>
        <p>Footer Card</p>
      </ui-card-footer>
    </ui-card>
  `
})
export class AppComponent {}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/card.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyCard(
      header: GalaxyCardHeader(
        title: 'Tiêu đề Card',
        description: 'Mô tả Card',
      ),
      content: const Text('Nội dung Card'),
      footer: const Text('Footer Card'),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/design-cli@latest add card
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add card
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add card
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add card
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add card
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `class-variance-authority`
- **Vue**: `class-variance-authority`
- **Angular**: `class-variance-authority`
- **React Native**: `nativewind`, `tailwindcss`
- **Flutter**: Không cần thêm dependencies

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```tsx [React]
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tiêu đề Card</CardTitle>
        <CardDescription>Mô tả Card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Nội dung Card</p>
      </CardContent>
    </Card>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Tiêu đề Card</CardTitle>
      <CardDescription>Mô tả Card</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Nội dung Card</p>
    </CardContent>
  </Card>
</template>
```

:::

### Với Actions

::: code-group

```tsx [React]
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardWithActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tiêu đề Card</CardTitle>
        <CardDescription>Mô tả Card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Nội dung Card</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline">Hủy</Button>
        <Button>Lưu</Button>
      </CardFooter>
    </Card>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Tiêu đề Card</CardTitle>
      <CardDescription>Mô tả Card</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Nội dung Card</p>
    </CardContent>
    <CardFooter class="flex gap-2">
      <Button variant="outline">Hủy</Button>
      <Button>Lưu</Button>
    </CardFooter>
  </Card>
</template>
```

:::

## API Reference

### Components

| Component | Description | Props |
|-----------|-------------|-------|
| `Card` | Container chính | `className` / `class` |
| `CardHeader` | Phần header | `className` / `class` |
| `CardTitle` | Văn bản tiêu đề | `className` / `class` |
| `CardDescription` | Văn bản mô tả | `className` / `class` |
| `CardContent` | Khu vực nội dung chính | `className` / `class` |
| `CardFooter` | Phần footer | `className` / `class` |

## Accessibility

- **Semantic HTML**: Sử dụng các phần tử `<article>`, `<header>`, `<footer>` phù hợp
- **Screen Reader**: Phân cấp nội dung rõ ràng
- **Focus Management**: Kế thừa hành vi focus từ parent
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
