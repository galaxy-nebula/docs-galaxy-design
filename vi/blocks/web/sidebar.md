# Sidebar

Sidebar điều hướng thu gọn với các mục menu lồng nhau, badges, icons và hỗ trợ bàn phím đầy đủ.

## Cài đặt

```bash
npx @galaxy-stack/nebula-cli add sidebar
```

## Tính năng

- ✅ **Collapsible** - Mở rộng/thu gọn với animation mượt mà
- ✅ **Nested Menu Items** - Hỗ trợ điều hướng đa cấp
- ✅ **Icon Support** - Icons tùy chỉnh hoặc emoji
- ✅ **Badges** - Hiển thị số lượng thông báo
- ✅ **Active State** - Làm nổi bật trang hiện tại
- ✅ **Responsive** - Chiều rộng có thể cấu hình
- ✅ **Keyboard Navigation** - Hỗ trợ bàn phím đầy đủ

## Components sử dụng

- [Button](/vi/components/button)
- [Separator](/vi/components/separator)

## Sử dụng

### Sidebar cơ bản

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
  // Điều hướng đến route
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
| `items` | `MenuItem[]` | required | Mảng các mục menu |
| `collapsible` | `boolean` | `true` | Bật chức năng thu gọn |
| `defaultCollapsed` | `boolean` | `false` | Bắt đầu ở trạng thái thu gọn |
| `width` | `string` | `'280px'` | Chiều rộng khi mở rộng |
| `collapsedWidth` | `string` | `'60px'` | Chiều rộng khi thu gọn |
| `onItemClick` | `(item: MenuItem) => void` | - | Gọi khi click vào mục |
| `onCollapseChange` | `(collapsed: boolean) => void` | - | Gọi khi thay đổi trạng thái thu gọn |

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

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `@item-click` | `(item: MenuItem)` | Khi click vào mục menu |
| `@collapse-change` | `(collapsed: boolean)` | Khi thay đổi trạng thái thu gọn |

## Các ví dụ

### Sidebar với nested menus

```vue
<script setup>
import { Sidebar } from '@/components/ui/sidebar'

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '🏠',
    href: '/dashboard'
  },
  {
    id: 'products',
    label: 'Products',
    icon: '📦',
    children: [
      { id: 'all', label: 'All Products', href: '/products' },
      { id: 'categories', label: 'Categories', href: '/categories' },
      { id: 'inventory', label: 'Inventory', href: '/inventory' }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📊',
    badge: 'New',
    children: [
      { id: 'overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'real-time', label: 'Real-time' }
    ]
  }
]
</script>

<template>
  <Sidebar :items="menuItems" collapsible />
</template>
```

### Sidebar với custom icons

```vue
<script setup>
import { Sidebar } from '@/components/ui/sidebar'
import { Home, Mail, Settings, Users } from 'lucide-vue-next'

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: h(Home),
    active: true
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: h(Mail),
    badge: 12
  },
  {
    id: 'team',
    label: 'Team',
    icon: h(Users)
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: h(Settings)
  }
]
</script>

<template>
  <Sidebar :items="menuItems" collapsible />
</template>
```

### Sidebar controlled state

```vue
<script setup>
import { ref } from 'vue'
import { Sidebar } from '@/components/ui/sidebar'

const collapsed = ref(false)
const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
]

const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div>
    <button @click="toggleSidebar">Toggle Sidebar</button>
    <Sidebar
      :items="menuItems"
      :collapsed="collapsed"
      @collapse-change="collapsed = $event"
    />
  </div>
</template>
```

## Tùy chỉnh

### Tùy chỉnh width

```vue
<template>
  <Sidebar
    :items="menuItems"
    width="320px"
    collapsed-width="80px"
    collapsible
  />
</template>
```

### Tùy chỉnh giao diện

```vue
<template>
  <Sidebar
    :items="menuItems"
    class="custom-sidebar"
  />
</template>

<style>
.custom-sidebar {
  --sidebar-bg: #1a1a2e;
  --sidebar-text: #eaeaea;
  --sidebar-hover: #16213e;
  --sidebar-active: #0f3460;
}
</style>
```

### Thêm footer

```vue
<template>
  <Sidebar :items="menuItems">
    <template #footer>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <Avatar :size="32" src="/user.jpg" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </template>
  </Sidebar>
</template>
```

## Best Practices

### Performance

1. **Lazy load icons**: Chỉ load icons khi cần
2. **Virtualize long lists**: Sử dụng virtual scroll cho menu dài
3. **Memoize callbacks**: Ghi nhớ các callback functions

### Accessibility

- Sử dụng proper ARIA labels
- Hỗ trợ keyboard navigation (Tab, Arrow keys, Enter)
- Highlight focused items rõ ràng
- Đảm bảo color contrast

### UX Tips

- Persist collapse state trong localStorage
- Sử dụng tooltips khi collapsed để hiển thị labels
- Thêm keyboard shortcut để toggle (ví dụ: Ctrl+B)
- Hiển thị active state rõ ràng

## Tham khảo thêm

- [Components Overview](/vi/components/overview)
- [Blocks Overview](/vi/blocks/overview)
- [Button Component](/vi/components/button)
