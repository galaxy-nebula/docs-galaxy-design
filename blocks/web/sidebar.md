# Sidebar

Collapsible navigation sidebar with nested menu items, badges, icons, and full keyboard support.

## Installation

```bash
npx @galaxy-stack/nebula-cli add sidebar
```

## Features

- ✅ **Collapsible** - Expand/collapse with smooth animation
- ✅ **Nested Menu Items** - Support for multi-level navigation
- ✅ **Icon Support** - Custom icons or emoji
- ✅ **Badges** - Show notification counts
- ✅ **Active State** - Highlight current page
- ✅ **Responsive** - Configurable width
- ✅ **Keyboard Navigation** - Full keyboard support

## Components Used

- [Button](/components/button)
- [Separator](/components/separator)

## Usage

### Basic Sidebar

::: code-group
```vue [Vue]
<script setup>
import { Sidebar } from '@/components/ui/sidebar'

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '🏠',
    active: true
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: '💬',
    badge: 5
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    children: [
      { id: 'profile', label: 'Profile' },
      { id: 'security', label: 'Security' }
    ]
  }
]

const handleItemClick = (item) => {
  console.log('Clicked:', item.label)
  // Navigate to route
}
</script>

<template>
  <Sidebar
    :items="menuItems"
    collapsible
    @item-click="handleItemClick"
  >
    <template #logo>
      <img src="/logo.png" alt="Logo" class="h-8 w-8" />
    </template>
    <template #title>
      <h2>My App</h2>
    </template>
  </Sidebar>
</template>
```

```tsx [React]
import { Sidebar } from '@/components/ui/sidebar'

export default function AppSidebar() {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '🏠',
      active: true
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: '💬',
      badge: 5
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      children: [
        { id: 'profile', label: 'Profile' },
        { id: 'security', label: 'Security' }
      ]
    }
  ]

  const handleItemClick = (item) => {
    console.log('Clicked:', item.label)
  }

  return (
    <Sidebar
      items={menuItems}
      collapsible
      onItemClick={handleItemClick}
    />
  )
}
```
:::

## Props

### Sidebar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `MenuItem[]` | required | Array of menu items |
| `collapsible` | `boolean` | `true` | Enable collapse functionality |
| `defaultCollapsed` | `boolean` | `false` | Start in collapsed state |
| `width` | `string` | `'280px'` | Width when expanded |
| `collapsedWidth` | `string` | `'60px'` | Width when collapsed |
| `onItemClick` | `(item: MenuItem) => void` | - | Called when item is clicked |
| `onCollapseChange` | `(collapsed: boolean) => void` | - | Called when collapse state changes |

### MenuItem Interface

```typescript
interface MenuItem {
  id: string
  label: string
  icon?: string | ReactNode
  href?: string
  badge?: string | number
  children?: MenuItem[]
  active?: boolean
  disabled?: boolean
}
```

## Advanced Usage

### With React Router

```tsx
import { useNavigate, useLocation } from 'react-router-dom'
import { Sidebar } from '@/components/ui/sidebar'

export default function AppSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '🏠',
      href: '/dashboard',
      active: location.pathname === '/dashboard'
    },
    // ...
  ]

  const handleItemClick = (item) => {
    if (item.href) {
      navigate(item.href)
    }
  }

  return <Sidebar items={menuItems} onItemClick={handleItemClick} />
}
```

### Custom Icons

```tsx
import { Home, MessageSquare, Settings } from 'lucide-react'

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
  }
]
```

### Persistent Collapsed State

```tsx
import { useState, useEffect } from 'react'

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('sidebar-collapsed') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', String(collapsed))
  }, [collapsed])

  return (
    <Sidebar
      items={menuItems}
      defaultCollapsed={collapsed}
      onCollapseChange={setCollapsed}
    />
  )
}
```

## Platform Availability

| Platform | Status |
|----------|--------|
| Vue 3 | ✅ Available |
| React 18+ | ✅ Available |
| Angular 20 | ✅ Available |
| React Native | ✅ [Mobile Drawer](/blocks/mobile/sidebar) |
| Flutter | ✅ [Mobile Drawer](/blocks/mobile/sidebar) |
