# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

<ComponentPreview name="TabsDemo">
  <template #preview>
    <DemoContainer>
      <TabsDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">
      Change your password here.
    </TabsContent>
  </Tabs>
</template>
```

```tsx [React]
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function App() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TabsComponent } from '@/components/ui/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent],
  template: `
    <ui-tabs [value]="activeTab" (valueChange)="activeTab = $event" class="w-[400px]">
      <ui-tabs-list>
        <ui-tabs-trigger value="account">Account</ui-tabs-trigger>
        <ui-tabs-trigger value="password">Password</ui-tabs-trigger>
      </ui-tabs-list>
      <ui-tabs-content value="account">
        Make changes to your account here.
      </ui-tabs-content>
      <ui-tabs-content value="password">
        Change your password here.
      </ui-tabs-content>
    </ui-tabs>
  `
})
export class AppComponent {
  activeTab = 'account';
}
```

```tsx [React Native]
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Text } from '@/components/ui/text'

export default function App() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account"><Text>Account</Text></TabsTrigger>
        <TabsTrigger value="password"><Text>Password</Text></TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Text>Make changes to your account here.</Text>
      </TabsContent>
      <TabsContent value="password">
        <Text>Change your password here.</Text>
      </TabsContent>
    </Tabs>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Column(
        children: [
          const TabBar(
            tabs: [
              Tab(text: 'Account'),
              Tab(text: 'Password'),
            ],
          ),
          Expanded(
            child: TabBarView(
              children: [
                const Center(child: Text('Make changes to your account here.')),
                const Center(child: Text('Change your password here.')),
              ],
            ),
          ),
        ],
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
npx @galaxy-stack/nebula-cli@latest add tabs
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add tabs
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add tabs
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add tabs
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add tabs
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">
      Change your password here.
    </TabsContent>
  </Tabs>
</template>
```

### React

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '@/components/ui';

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent],
  template: `
    <ui-tabs [value]="activeTab" (valueChange)="activeTab = $event" class="w-[400px]">
      <ui-tabs-list>
        <ui-tabs-trigger value="account" [isActive]="activeTab === 'account'" (triggerClick)="activeTab = $event">
          Account
        </ui-tabs-trigger>
        <ui-tabs-trigger value="password" [isActive]="activeTab === 'password'" (triggerClick)="activeTab = $event">
          Password
        </ui-tabs-trigger>
      </ui-tabs-list>
      <ui-tabs-content value="account" [isActive]="activeTab === 'account'">
        Make changes to your account here.
      </ui-tabs-content>
      <ui-tabs-content value="password" [isActive]="activeTab === 'password'">
        Change your password here.
      </ui-tabs-content>
    </ui-tabs>
  `
})
export class TabsDemoComponent {
  activeTab = 'account';
}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | `undefined` | Controlled active tab value | All |
| `defaultValue` | `string` | `undefined` | Initial active tab value | All |
| `onValueChange` | `(value: string) => void` | - | Called when active tab changes | All |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation for tab list | All |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction for keyboard navigation | React, Vue, Angular |
| `activationMode` | `'automatic' \| 'manual'` | `'automatic'` | Whether tabs activate on focus or require explicit activation | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

### Subcomponents

#### TabsList

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### TabsTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Value of the tab this trigger controls | All |
| `disabled` | `boolean` | `false` | Disables the trigger | All |
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### TabsContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Value of the tab this content belongs to | All |
| `forceMount` | `boolean` | `false` | Force mount content even when inactive | React, Vue |
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
