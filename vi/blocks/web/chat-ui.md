# Chat UI

Giao diện chat hoàn chỉnh với danh sách tin nhắn, avatar người dùng, dấu thời gian và ô nhập tin nhắn.

## Cài đặt

::: code-group

```bash [Vue]
npx galaxy-ui add chat-ui
```

```bash [React]
npx galaxy-ui add chat-ui
```

```bash [Angular]
npx galaxy-ui add chat-ui
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup>
import { ref } from 'vue'
import { ChatUI } from '@/components/ui/chat-ui'

const messages = ref([
  {
    id: '1',
    content: 'Chào! Bạn khỏe không?',
    senderId: 'user1',
    senderName: 'John Doe',
    senderAvatar: '/avatars/john.jpg',
    timestamp: new Date(Date.now() - 3600000),
    isCurrentUser: false
  },
  {
    id: '2',
    content: 'Mình khỏe lắm, cảm ơn nhé!',
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(Date.now() - 3000000),
    isCurrentUser: true
  },
  {
    id: '3',
    content: 'Đang làm Galaxy UI blocks mới. Tuyệt vời!',
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(Date.now() - 2000000),
    isCurrentUser: true
  }
])

const handleSendMessage = (content) => {
  messages.value.push({
    id: Date.now().toString(),
    content,
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(),
    isCurrentUser: true
  })
}
</script>

<template>
  <ChatUI
    :messages="messages"
    current-user-id="current"
    placeholder="Nhập tin nhắn của bạn..."
    @send-message="handleSendMessage"
  />
</template>
```

```tsx [React]
import { useState } from 'react'
import { ChatUI } from '@/components/ui/chat-ui'

export default function ChatExample() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: 'Chào! Bạn khỏe không?',
      senderId: 'user1',
      senderName: 'John Doe',
      senderAvatar: '/avatars/john.jpg',
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false
    },
    {
      id: '2',
      content: 'Mình khỏe lắm, cảm ơn!',
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }
  ])

  const handleSendMessage = (content) => {
    setMessages([...messages, {
      id: Date.now().toString(),
      content,
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }])
  }

  return (
    <ChatUI
      messages={messages}
      currentUserId="current"
      onSendMessage={handleSendMessage}
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ChatUIComponent, Message } from '@/components/ui/chat-ui';

@Component({
  selector: 'app-chat-example',
  standalone: true,
  imports: [ChatUIComponent],
  template: `
    <ui-chat-ui
      [messages]="messages"
      [currentUserId]="'current'"
      (sendMessage)="handleSendMessage($event)"
    />
  `
})
export class ChatExampleComponent {
  messages: Message[] = [
    {
      id: '1',
      content: 'Chào! Bạn khỏe không?',
      senderId: 'user1',
      senderName: 'John Doe',
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false
    },
    {
      id: '2',
      content: 'Mình khỏe lắm!',
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }
  ];

  handleSendMessage(content: string) {
    this.messages.push({
      id: Date.now().toString(),
      content,
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    });
  }
}
```

:::

## Tính năng

- ✅ **Danh sách tin nhắn** với tự động cuộn xuống dưới
- ✅ **Avatar người dùng** với fallback là chữ cái đầu
- ✅ **Dấu thời gian** với định dạng thông minh
- ✅ **Ô nhập tin nhắn** với Enter để gửi (Shift+Enter cho dòng mới)
- ✅ **Kiểu người dùng hiện tại** - giao diện khác cho người gửi/người nhận
- ✅ **Thiết kế Responsive** - hoạt động trên mọi kích thước màn hình
- ✅ **Hỗ trợ Dark Mode**

## Components sử dụng

Block này được xây dựng bằng các component cơ sở sau:
- [Avatar](/vi/components/avatar)
- [Button](/vi/components/button)
- [ScrollArea](/vi/components/scroll-area)
- [Textarea](/vi/components/textarea)

## Props

### ChatUI Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | `Message[]` | `[]` | Mảng các đối tượng tin nhắn |
| `currentUserId` | `string` | - | ID của người dùng hiện tại |
| `placeholder` | `string` | `'Type a message...'` | Placeholder cho ô nhập |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |
| `disabled` | `boolean` | `false` | Vô hiệu hóa ô nhập |
| `showTimestamp` | `boolean` | `true` | Hiển thị dấu thời gian |
| `showAvatar` | `boolean` | `true` | Hiển thị avatar |
| `autoScroll` | `boolean` | `true` | Tự động cuộn xuống tin nhắn mới |

### Message Type

```typescript
interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  timestamp: Date;
  isCurrentUser: boolean;
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `@send-message` | `(content: string)` | Khi người dùng gửi tin nhắn |
| `@message-click` | `(message: Message)` | Khi click vào tin nhắn |

## Các ví dụ

### Chat với nhiều người dùng

```vue
<script setup>
import { ChatUI } from '@/components/ui/chat-ui'

const messages = [
  {
    id: '1',
    content: 'Hello team!',
    senderId: 'user1',
    senderName: 'Alice',
    timestamp: new Date(),
    isCurrentUser: false
  },
  {
    id: '2',
    content: 'Hi Alice!',
    senderId: 'user2',
    senderName: 'Bob',
    timestamp: new Date(),
    isCurrentUser: false
  }
]
</script>

<template>
  <ChatUI
    :messages="messages"
    current-user-id="current"
    placeholder="Nhắn trong nhóm..."
  />
</template>
```

### Chat với file đính kèm

```vue
<script setup>
import { ChatUI } from '@/components/ui/chat-ui'

const messages = [
  {
    id: '1',
    content: 'Check this file',
    senderId: 'user1',
    senderName: 'John',
    timestamp: new Date(),
    isCurrentUser: false,
    attachment: {
      name: 'document.pdf',
      size: 1024000,
      type: 'application/pdf'
    }
  }
]
</script>

<template>
  <ChatUI :messages="messages" current-user-id="current" />
</template>
```

### Chat với trạng thái typing

```vue
<script setup>
import { ref } from 'vue'
import { ChatUI } from '@/components/ui/chat-ui'

const isTyping = ref(false)
const messages = ref([])

const handleTyping = (typing) => {
  isTyping.value = typing
}
</script>

<template>
  <ChatUI
    :messages="messages"
    current-user-id="current"
    :is-typing="isTyping"
    @typing="handleTyping"
  />
</template>
```

## Tùy chỉnh

### Tùy chỉnh giao diện tin nhắn

```vue
<template>
  <ChatUI
    :messages="messages"
    current-user-id="current"
    class="custom-chat"
  />
</template>

<style>
.custom-chat {
  --chat-bg: #f5f5f5;
  --message-bg-user: #dcf8c6;
  --message-bg-other: #ffffff;
}
</style>
```

### Tùy chỉnh avatar

```vue
<template>
  <ChatUI
    :messages="messages"
    :avatar-size="48"
    :show-avatar="true"
  />
</template>
```

## Best Practices

### Performance

1. **Virtual scrolling**: Với danh sách tin nhắn lớn (>1000), sử dụng virtual scroll
2. **Lazy load avatars**: Load avatar images lazily để giảm bundle size
3. **Debounce input**: Debounce ô nhập để tránh re-render quá nhiều

### Accessibility

- Sử dụng `aria-label` cho các elements
- Hỗ trợ điều hướng bàn phím (Tab, Enter, Escape)
- Đảm bảo color contrast đủ tiêu chuẩn WCAG

### UX Tips

- Hiển thị "typing..." indicator khi người khác đang soạn tin
- Tự động focus vào ô nhập khi load
- Lưu draft khi user refresh page

## Tham khảo thêm

- [Components Overview](/vi/components/overview)
- [Blocks Overview](/vi/blocks/overview)
- [Avatar Component](/vi/components/avatar)
