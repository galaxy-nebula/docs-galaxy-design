# Tổng quan về Blocks

Blocks là các mẫu UI tổng hợp, sẵn sàng cho production, được xây dựng từ các component cơ sở của Galaxy UI. Khác với các component nguyên tử (Button, Input, v.v.), blocks cung cấp chức năng hoàn chỉnh, thực tế mà bạn có thể nhúng trực tiếp vào ứng dụng của mình.

## Blocks là gì?

Blocks là **các phần UI hoàn chỉnh** được tạo thành từ nhiều component cơ sở làm việc cùng nhau:

- **Components** = Các phần tử nguyên tử (Button, Input, Avatar)
- **Blocks** = Các mẫu tổng hợp (Chat UI, Sidebar, Authentication Forms)

## Web vs Mobile Blocks

Galaxy UI cung cấp blocks cho cả hai nền tảng **Web** và **Mobile**:

### Web Blocks
Có sẵn cho **Vue**, **React**, và **Angular**:
- Chat UI
- Sidebar Navigation
- Authentication Forms
- Email Client
- Featured Sections (Hero, Features Grid)

### Mobile Blocks
Có sẵn cho **React Native** và **Flutter**:
- Chat UI (Tối ưu cho mobile)
- Drawer Navigation
- Authentication Forms (Mobile)

::: info
Mobile blocks được tối ưu cho giao diện cảm ứng với kích thước phù hợp (tối thiểu 48x48px cho các điểm chạm), cử chỉ native và bố cục mobile-first.
:::

## Tại sao sử dụng Blocks?

### 1. **Tiết kiệm thời gian phát triển**
Nhận các mẫu UI phức tạp trong vài phút thay vì vài giờ:

```bash
# Cài đặt giao diện chat hoàn chỉnh trong một lệnh
npx @galaxy-stack/nebula-cli add chat-ui
```

### 2. **Sẵn sàng cho Production**
Tất cả blocks bao gồm:
- ✅ Accessibility (ARIA, điều hướng bàn phím)
- ✅ Thiết kế responsive
- ✅ Hỗ trợ dark mode
- ✅ Type safety (TypeScript)
- ✅ Best practices

### 3. **Kiểm soát hoàn toàn**
Blocks được **copy vào dự án của bạn** (không cài đặt như dependencies):
- Tùy chỉnh tự do
- Không có thay đổi breaking từ updates
- Sở hữu code hoàn toàn

### 4. **Thiết kế nhất quán**
Được xây dựng trên cùng một hệ thống thiết kế như các component cơ sở:
- Theming thống nhất
- Cùng cấu hình Tailwind
- Spacing và colors nhất quán

## Cách Blocks hoạt động

### Cài đặt

```bash
# Khởi tạo Galaxy UI trong dự án của bạn
npx @galaxy-stack/nebula-cli init

# Thêm một block
npx @galaxy-stack/nebula-cli add chat-ui

# Thêm nhiều blocks cùng lúc
npx @galaxy-stack/nebula-cli add sidebar authentication email
```

### Cấu trúc file

Khi bạn thêm một block, nó tạo một thư mục hoàn chỉnh với tất cả các file cần thiết:

```
src/components/ui/
└── chat-ui/
    ├── types.ts           # TypeScript types & interfaces
    ├── ChatMessage.vue    # Sub-components
    ├── MessageList.vue
    ├── MessageInput.vue
    ├── ChatUI.vue         # Main block component
    └── index.ts           # Exports
```

### Dependencies

Blocks tự động cài đặt các component cơ sở cần thiết của chúng. Ví dụ:

**Chat UI** yêu cầu:
- Avatar
- Button
- ScrollArea
- Textarea

Những cái này được cài đặt tự động khi bạn thêm block chat-ui.

## Các Blocks có sẵn

### Web Blocks (Vue/React/Angular)

| Block | Mô tả | Components sử dụng |
|-------|-------|-------------------|
| [Chat UI](/vi/blocks/web/chat-ui) | Giao diện nhắn tin hoàn chỉnh | Avatar, Button, ScrollArea, Textarea |
| [Sidebar](/vi/blocks/web/sidebar) | Sidebar điều hướng thu gọn | Button, Separator |
| [Authentication](/vi/blocks/web/authentication) | Form Đăng nhập/Đăng ký | Button, Input, Label, Checkbox, Separator |
| [Email Client](/vi/blocks/web/email) | Giao diện email giống Gmail | Button, Input, Avatar, ScrollArea |
| [Featured Sections](/vi/blocks/web/featured) | Hero + Features grid | Button |

### Mobile Blocks (React Native/Flutter)

| Block | Mô tả | Nền tảng |
|-------|-------|----------|
| [Chat UI](/vi/blocks/mobile/chat-ui) | Chat tối ưu cho mobile | RN, Flutter |
| [Drawer Navigation](/vi/blocks/mobile/sidebar) | Menu drawer mobile | RN, Flutter |
| [Authentication](/vi/blocks/mobile/authentication) | Form auth mobile | RN, Flutter |

## Tùy chỉnh

Vì blocks được copy vào dự án của bạn, bạn có quyền tự do hoàn toàn để tùy chỉnh:

### 1. **Styling**
Sửa đổi các classes Tailwind trực tiếp:

```vue
<!-- Thay đổi màu sắc, spacing của button, v.v -->
<Button class="bg-blue-500 px-8 py-4">
  Custom Styled Button
</Button>
```

### 2. **Functionality**
Thêm hoặc xóa các tính năng theo nhu cầu:

```typescript
// Thêm emoji picker vào chat input
const handleEmojiSelect = (emoji: string) => {
  messageContent.value += emoji
}
```

### 3. **Layout**
Điều chỉnh các breakpoints responsive và kích thước:

```vue
<!-- Làm sidebar rộng hơn -->
<Sidebar width="320px" collapsed-width="80px" />
```

## Block vs Component

| Khía cạnh | Components | Blocks |
|-----------|------------|--------|
| **Mục đích** | Phần tử UI đơn lẻ | Mẫu UI hoàn chỉnh |
| **Độ phức tạp** | Đơn giản | Tổng hợp |
| **Ví dụ** | Button, Input | Chat UI, Dashboard |
| **Files** | 1-3 files | 5-10 files |
| **Dependencies** | Tối thiểu | Nhiều components |
| **Use Case** | Khối xây dựng | Các phần sẵn sàng sử dụng |

## Best Practices

### 1. Bắt đầu với Blocks
Sử dụng blocks cho các mẫu phổ biến thay vì xây dựng từ đầu:

```bash
# ✅ Tốt: Sử dụng authentication block
npx @galaxy-stack/nebula-cli add authentication

# ❌ Tránh: Xây dựng auth forms từ đầu
# Tự tạo LoginForm, RegisterForm, validation logic, v.v.
```

### 2. Tùy chỉnh sau khi cài đặt
Cài đặt trước, sau đó tùy chỉnh theo nhu cầu của bạn:

```bash
# 1. Cài đặt block
npx @galaxy-stack/nebula-cli add chat-ui

# 2. Tùy chỉnh trong dự án của bạn
# Chỉnh sửa src/components/ui/chat-ui/ChatUI.vue
```

### 3. Kết hợp với Components
Trộn blocks và components theo nhu cầu:

```vue
<template>
  <!-- Block -->
  <Sidebar :items="menuItems" />
  
  <!-- Component -->
  <Button @click="toggleSidebar">Toggle</Button>
</template>
```

## Các ví dụ thực tế

### Dashboard với Sidebar + Chat

```vue
<template>
  <div class="flex h-screen">
    <!-- Sidebar Block -->
    <Sidebar :items="navigationItems" />
    
    <!-- Main Content -->
    <main class="flex-1 p-6">
      <!-- Your dashboard content -->
      
      <!-- Chat Block -->
      <ChatUI :messages="messages" @send="sendMessage" />
    </main>
  </div>
</template>
```

### Authentication Flow

```vue
<template>
  <div class="min-h-screen flex items-center justify-center">
    <!-- Authentication Block -->
    <Authentication 
      mode="login"
      @submit="handleLogin"
      @switch-mode="toggleAuthMode"
    />
  </div>
</template>
```

## Tham khảo thêm

- [Components Overview](/vi/components/overview)
- [Installation Guide](/vi/guide/installation)
- [CLI Usage](/vi/guide/cli-usage)
