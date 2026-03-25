# Drawer Navigation (Mobile)

Navigation drawer tối ưu cho mobile với cử chỉ swipe, animations native và các mục menu thân thiện với cảm ứng.

## Cài đặt

```bash
npx galaxy-design add sidebar
```

::: info Nền tảng
Đây là phiên bản drawer mobile cho **React Native** và **Flutter**. Đối với web, xem [Sidebar (Web)](/vi/blocks/web/sidebar).
:::

## Tính năng

- ✅ **Swipe Gestures** - Swipe để mở/đóng
- ✅ **Native Animations** - Chuyển đổi drawer mượt mà
- ✅ **Touch-Optimized** - Kích thước điểm chạm 48x48px
- ✅ **Nested Items** - Các mục menu có thể mở rộng
- ✅ **Safe Area** - Tôn trọng notches của thiết bị
- ✅ **Platform-Specific** - Kiểu dáng iOS/Android

## Sử dụng

### React Native

```tsx
import { Drawer } from '@/components/ui/drawer'

const menuItems = [
  {
    id: 'home',
    label: 'Trang chủ',
    icon: '🏠',
    active: true
  },
  {
    id: 'messages',
    label: 'Tin nhắn',
    icon: '💬',
    badge: 5
  },
  {
    id: 'settings',
    label: 'Cài đặt',
    icon: '⚙️',
    children: [
      { id: 'profile', label: 'Hồ sơ' },
      { id: 'notifications', label: 'Thông báo' }
    ]
  }
]

export default function App() {
  const handleNav = (item) => {
    console.log('Navigate to:', item.id)
  }

  return (
    <Drawer 
      items={menuItems} 
      onItemClick={handleNav}
      drawerPosition="left"
    />
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/drawer.dart';

class MyApp extends StatelessWidget {
  final menuItems = [
    DrawerItem(
      id: 'home',
      label: 'Trang chủ',
      icon: Icons.home,
      active: true,
    ),
    DrawerItem(
      id: 'messages',
      label: 'Tin nhắn',
      icon: Icons.message,
      badge: '5',
    ),
    DrawerItem(
      id: 'settings',
      label: 'Cài đặt',
      icon: Icons.settings,
      children: [
        DrawerItem(id: 'profile', label: 'Hồ sơ'),
        DrawerItem(id: 'notifications', label: 'Thông báo'),
      ],
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GalaxyDrawer(
        items: menuItems,
        onItemClick: (item) {
          print('Navigate to: ${item.id}');
        },
      ),
    );
  }
}
```

## Props

### React Native Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `MenuItem[]` | required | Mảng các mục menu |
| `onItemClick` | `(item: MenuItem) => void` | - | Callback khi click |
| `drawerPosition` | `'left' \| 'right'` | `'left'` | Vị trí drawer |
| `defaultOpen` | `boolean` | `false` | Trạng thái mở mặc định |
| `onOpenChange` | `(open: boolean) => void` | - | Callback khi thay đổi trạng thái |
| `overlayColor` | `string` | `'rgba(0,0,0,0.5)'` | Màu overlay |
| `drawerWidth` | `number` | `280` | Chiều rộng drawer |

### Flutter Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `List<DrawerItem>` | required | Danh sách mục menu |
| `onItemClick` | `Function(DrawerItem)` | - | Callback khi click |
| `drawerPosition` | `DrawerPosition` | `left` | Vị trí drawer |
| `defaultOpen` | `bool` | `false` | Trạng thái mở mặc định |
| `onOpenChange` | `Function(bool)` | - | Callback khi thay đổi |
| `overlayColor` | `Color` | `Colors.black54` | Màu overlay |
| `drawerWidth` | `double` | `280.0` | Chiều rộng drawer |

## Types

```typescript
interface MenuItem {
  id: string;
  label: string;
  icon?: string | ReactNode;
  badge?: string | number;
  children?: MenuItem[];
  active?: boolean;
  disabled?: boolean;
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onItemClick` | `(item: MenuItem)` | Khi click vào mục menu |
| `onOpenChange` | `(open: boolean)` | Khi thay đổi trạng thái mở/đóng |
| `onSwipe` | `(direction: 'start' \| 'end')` | Khi swipe drawer |

## Các ví dụ

### Drawer với nested menus

```tsx
import { Drawer } from '@/components/ui/drawer'

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '🏠',
    active: true
  },
  {
    id: 'products',
    label: 'Sản phẩm',
    icon: '📦',
    children: [
      { id: 'all', label: 'Tất cả' },
      { id: 'categories', label: 'Danh mục' },
      { id: 'inventory', label: 'Kho' }
    ]
  },
  {
    id: 'analytics',
    label: 'Phân tích',
    icon: '📊',
    badge: 'New'
  }
]

export default function App() {
  return <Drawer items={menuItems} />
}
```

### Drawer controlled state

```tsx
import { useState } from 'react'
import { Drawer, Button } from '@/components/ui'

export default function App() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button onPress={toggleDrawer}>Toggle Drawer</Button>
      <Drawer 
        items={menuItems}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}
```

### Drawer với custom header

```tsx
<Drawer items={menuItems}>
  <Drawer.Header>
    <View style={styles.header}>
      <Avatar source={user.avatar} size={48} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  </Drawer.Header>
</Drawer>
```

## Tùy chỉnh

### Tùy chỉnh giao diện

```tsx
<Drawer
  items={menuItems}
  drawerStyle={{
    backgroundColor: '#1a1a2e',
    width: 320
  }}
  itemStyle={{
    active: {
      backgroundColor: '#0f3460',
      color: '#ffffff'
    },
    inactive: {
      backgroundColor: 'transparent',
      color: '#eaeaea'
    }
  }}
/>
```

### Tùy chỉnh animations

```tsx
<Drawer
  items={menuItems}
  animationType="slide"
  animationDuration={300}
  overlayStyle={{
    opacity: 0.5,
    transition: 'ease-in-out'
  }}
/>
```

## Mobile-Specific Features

### Swipe Gestures
- **Edge Swipe**: Swipe từ mép màn hình để mở drawer
- **Drag to Close**: Kéo drawer để đóng
- **Tap Overlay**: Chạm vào overlay để đóng

### Safe Area
- Tự động tôn trọng device notches
- Điều chỉnh padding cho các thiết bị khác nhau
- Hỗ trợ home indicator trên iOS

### Platform-Specific Styling
- **iOS**: Material design với shadow
- **Android**: Material design với elevation
- **RTL**: Hỗ trợ bố cục right-to-left

## Best Practices

### Performance

1. **Lazy render**: Chỉ render drawer content khi mở
2. **Optimize animations**: Sử dụng native driver cho animations
3. **Memoize callbacks**: Ghi nhớ các callback functions

### Accessibility

- Đảm bảo touch targets tối thiểu 48x48px
- Sử dụng accessibility labels
- Hỗ trợ VoiceOver/TalkBack
- Đảm bảo keyboard navigation

### UX Tips

- Persist drawer state trong app session
- Sử dụng haptic feedback khi mở/đóng
- Hiển thị badge counts cho unread items
- Thêm keyboard shortcuts (ví dụ: Escape để đóng)

## Nền tảng hỗ trợ

| Nền tảng | Trạng thái |
|----------|-----------|
| React Native | ✅ |
| Flutter | ✅ |
| Vue | ❌ |
| React (Web) | ❌ |
| Angular | ❌ |

## Tham khảo thêm

- [Components Overview](/vi/components/overview)
- [Blocks Overview](/vi/blocks/overview)
- [Sidebar (Web)](/vi/blocks/web/sidebar)
