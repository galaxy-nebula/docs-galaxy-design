# Drawer Navigation (Mobile)

Mobile-optimized drawer navigation with swipe gestures, native animations, and touch-friendly menu items.

## Installation

```bash
npx @galaxy-stack/design-cli add sidebar
```

::: info Platform
This is the mobile drawer version for **React Native** and **Flutter**. For web, see [Sidebar (Web)](/blocks/web/sidebar).
:::

## Features

- ✅ **Swipe Gestures** - Swipe to open/close
- ✅ **Native Animations** - Smooth drawer transitions
- ✅ **Touch-Optimized** - 48x48px touch targets
- ✅ **Nested Items** - Expandable menu sections
- ✅ **Safe Area** - Respects device notches
- ✅ **Platform-Specific** - iOS/Android styling

## Usage

### React Native

```tsx
import { Drawer } from '@/components/ui/drawer'

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    active: true
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: '💬',
    badge: 5
  }
]

<Drawer items={menuItems} onItemClick={handleNav} />
```

## Platform Availability

| Platform | Status |
|----------|--------|
| React Native | ✅ Available |
| Flutter | ✅ Available |
