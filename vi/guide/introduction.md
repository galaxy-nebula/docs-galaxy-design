# Giới Thiệu

Chào mừng đến với **Galaxy UI** - thư viện component đa nền tảng mang đến các component đẹp mắt, dễ tiếp cận cho Vue, React, Angular, React Native và Flutter.

## Galaxy UI là gì?

Galaxy UI là bộ sưu tập các component có thể tái sử dụng trải dài trên cả web và mobile. Đối với web, components được xây dựng trên **Radix primitives** và tạo kiểu với **Tailwind CSS**. Đối với mobile, React Native sử dụng **NativeWind v4** và Flutter sử dụng **Material Design 3**. Khác với các thư viện component truyền thống, Galaxy UI theo triết lý **copy-paste** do [shadcn/ui](https://ui.shadcn.com/) khởi xướng.

### Tính Năng Chính

- **🎨 Hỗ Trợ Đa Nền Tảng** - Vue 3, React, Angular, React Native và Flutter
- **📱 Web + Mobile** - Registry riêng theo framework trên 5 nền tảng, với khác biệt phạm vi được ghi rõ
- **♿ Dễ Tiếp Cận** - Xây dựng trên Radix primitives với hỗ trợ ARIA (web)
- **🎭 Tùy Chỉnh** - Tailwind CSS (web) / NativeWind (RN) / Material 3 (Flutter)
- **📦 Copy-Paste** - Sở hữu code của bạn, không phụ thuộc npm
- **🌙 Dark Mode** - Hỗ trợ theme tối hạng nhất
- **🚀 CLI Tool** - Cài đặt dễ dàng với lệnh `galaxy-design`
- **📱 Responsive** - Thiết kế mobile-first
- **🔧 TypeScript** - Type safety đầy đủ trên tất cả nền tảng

## Tại Sao Copy-Paste?

### Thư Viện Truyền Thống

```bash
npm install some-ui-library
```

**Vấn Đề:**
- ❌ Xung đột phiên bản
- ❌ Kích thước bundle phình to
- ❌ Tùy chỉnh hạn chế
- ❌ Thay đổi gây lỗi khi cập nhật

### Cách Tiếp Cận của Galaxy UI

```bash
galaxy-design add button
```

**Lợi Ích:**
- ✅ Sở hữu toàn bộ code
- ✅ Tùy chỉnh hoàn toàn
- ✅ Không xung đột phiên bản
- ✅ Tối ưu tree-shaking

## Hỗ Trợ Framework

Galaxy UI cung cấp cùng các component đẹp mắt trên ba framework chính:

### Vue 3

Xây dựng với **[Radix Vue](https://www.radix-vue.com/)** primitives.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

### React

Xây dựng với **[Radix UI](https://www.radix-ui.com/)** primitives.

```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Click me</Button>
}
```

### Angular

Xây dựng với **[Radix NG](https://www.radix-ng.com/)** primitives.

```typescript
import { ButtonComponent } from '@/components/ui/button';

@Component({
  template: `<ui-button>Click me</ui-button>`
})
export class AppComponent {}
```

## Cách Hoạt Động

1. **Khởi tạo** dự án với `galaxy-design init`
2. **Thêm** components bạn cần với `galaxy-design add [component]`
3. **Tùy chỉnh** code đã sao chép theo nhu cầu
4. **Deploy** ứng dụng của bạn

```bash
# Bước 1: Khởi tạo
galaxy-design init

# Bước 2: Thêm components
galaxy-design add button input card

# Bước 3: Sử dụng trong ứng dụng
# Components hiện ở trong thư mục src/components/ui
```

## Kiến Trúc

Galaxy UI được xây dựng trên ba trụ cột:

### 1. Radix Primitives

Component không có style, dễ tiếp cận xử lý:
- ♿ Accessibility (thuộc tính ARIA)
- ⌨️ Điều hướng bàn phím
- 🎯 Quản lý focus
- 📱 Tương tác touch/mouse

### 2. Tailwind CSS

Framework CSS utility-first cho:
- 🎨 Tạo kiểu components
- 🌙 Dark mode
- 📱 Thiết kế responsive
- 🎭 Tùy chỉnh dễ dàng

### 3. Framework Wrappers

Wrapper mỏng bao quanh Radix primitives:
- Vue 3 composables
- React hooks
- Angular services

## Triết Lý

### Sở Hữu Code Của Bạn

Khi bạn sử dụng Galaxy UI, bạn không cài đặt một package hộp đen. Bạn đang sao chép code đã được kiểm tra kỹ, sẵn sàng production vào dự án của bạn.

### Tùy Chỉnh Không Giới Hạn

Mọi component chỉ là TypeScript/JavaScript và Tailwind classes. Sửa đổi bất cứ thứ gì:
- Thay đổi màu sắc, khoảng cách, viền
- Thêm hoặc xóa tính năng
- Tích hợp với state management của bạn
- Điều chỉnh cho design system của bạn

### Học Bằng Cách Đọc

Cách tốt nhất để học là đọc code. Với Galaxy UI, source code của mọi component đều có trong dự án của bạn. Học cách mọi thứ hoạt động!

## Tiếp Theo?

Sẵn sàng bắt đầu? Làm theo hướng dẫn cài đặt:

<div style="margin-top: 2rem;">
  <a href="./installation" style="display: inline-block; padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border-radius: 0.5rem; text-decoration: none; font-weight: 600;">
    Hướng Dẫn Cài Đặt →
  </a>
</div>

## Công Trạng

Galaxy UI lấy cảm hứng và được xây dựng dựa trên công việc của:

- **[Radix UI](https://www.radix-ui.com/)** - React primitives không style
- **[Radix Vue](https://www.radix-vue.com/)** - Phiên bản Vue của Radix UI
- **[Radix NG](https://www.radix-ng.com/)** - Phiên bản Angular của Radix UI
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

## Tác Giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com
- Repository: [buikevin/galaxy-design](https://github.com/galaxy-nebula/galaxy-design)

## Giấy Phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
