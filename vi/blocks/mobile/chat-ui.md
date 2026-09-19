# Chat UI (Mobile)

Giao diện chat tối ưu cho mobile với các điều khiển thân thiện với cảm ứng, xử lý bàn phím native và kích thước điểm chạm tối thiểu 48x48px.

## Cài đặt

```bash
npx @galaxy-stack/nebula-cli add chat-ui
```

::: info Nền tảng
Đây là phiên bản mobile cho **React Native** và **Flutter**. Đối với các nền tảng web, xem [Chat UI (Web)](/vi/blocks/web/chat-ui).
:::

## Tính năng

- ✅ **Touch-Optimized** - Kích thước điểm chạm tối thiểu 48x48px
- ✅ **Keyboard Handling** - Tự động tránh bàn phím
- ✅ **Auto-Scroll** - Tự động cuộn xuống dưới khi có tin nhắn mới
- ✅ **Message Bubbles** - Kiểu dáng native iOS/Android
- ✅ **Avatar Support** - Với fallback là chữ cái đầu
- ✅ **Timestamps** - Định dạng thời gian thông minh
- ✅ **Performance** - Tối ưu cho rendering mobile

## Sử dụng

### React Native

```tsx
import { useState } from 'react'
import { View } from 'react-native'
import { ChatUI } from '@/components/ui/chat-ui'

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: 'Chào! Bạn khỏe không?',
      senderId: 'user1',
      senderName: 'John',
      timestamp: new Date(),
      isCurrentUser: false
    }
  ])

  const handleSend = (content: string) => {
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
    <View style={{ flex: 1 }}>
      <ChatUI
        messages={messages}
        currentUserId="current"
        onSendMessage={handleSend}
      />
    </View>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/chat_ui.dart';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  List<Message> messages = [
    Message(
      id: '1',
      content: 'Chào! Bạn khỏe không?',
      senderId: 'user1',
      senderName: 'John',
      timestamp: DateTime.now(),
      isCurrentUser: false,
    ),
  ];

  void _handleSend(String content) {
    setState(() {
      messages.add(Message(
        id: DateTime.now().toString(),
        content: content,
        senderId: 'current',
        senderName: 'Me',
        timestamp: DateTime.now(),
        isCurrentUser: true,
      ));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ChatUI(
        messages: messages,
        currentUserId: 'current',
        onSendMessage: _handleSend,
      ),
    );
  }
}
```

## Tính năng đặc thù cho Mobile

### Touch Targets
Tất cả các phần tử tương tác đáp ứng kích thước điểm chạm tối thiểu **48x48px**:
- Nút gửi: 48x80px
- Ô nhập: Chiều cao tối thiểu 48px
- Avatar: 32x32px (chạm để xem profile)

### Keyboard Handling
- **iOS**: Tự động tránh bàn phím với padding
- **Android**: Điều chỉnh hành vi height
- **Dismiss**: Chạm bên ngoài để đóng bàn phím

### Performance
- Rendering FlatList/ListView tối ưu
- Re-renders hiệu quả
- Animation cuộn xuống dưới

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | `Message[]` | required | Mảng các tin nhắn |
| `currentUserId` | `string` | required | ID người dùng hiện tại |
| `onSendMessage` | `(content: string) => void` | - | Callback gửi tin nhắn |
| `placeholder` | `string` | `'Nhập tin nhắn...'` | Placeholder ô nhập |
| `showTimestamp` | `boolean` | `true` | Hiển thị dấu thời gian |

## Types

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
| `onSendMessage` | `(content: string)` | Khi gửi tin nhắn |
| `onAvatarPress` | `(userId: string)` | Khi chạm vào avatar |

## Các ví dụ

### Chat với avatar

```tsx
import { ChatUI } from '@/components/ui/chat-ui'

const messages = [
  {
    id: '1',
    content: 'Xin chào!',
    senderId: 'user1',
    senderName: 'Alice',
    senderAvatar: 'https://example.com/avatar.jpg',
    timestamp: new Date(),
    isCurrentUser: false
  }
]

export default function ChatScreen() {
  return (
    <ChatUI
      messages={messages}
      currentUserId="current"
      showAvatar={true}
    />
  )
}
```

### Chat với typing indicator

```tsx
import { useState } from 'react'
import { ChatUI } from '@/components/ui/chat-ui'

export default function ChatScreen() {
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([])

  return (
    <ChatUI
      messages={messages}
      currentUserId="current"
      isTyping={isTyping}
      onSendMessage={(content) => {
        setMessages([...messages, {
          id: Date.now().toString(),
          content,
          senderId: 'current',
          timestamp: new Date(),
          isCurrentUser: true
        }])
      }}
    />
  )
}
```

## Tùy chỉnh

### Tùy chỉnh giao diện

```tsx
<ChatUI
  messages={messages}
  currentUserId="current"
  containerStyle={{
    backgroundColor: '#f5f5f5'
  }}
  messageBubbleStyle={{
    currentUser: {
      backgroundColor: '#007AFF',
      textColor: '#ffffff'
    },
    otherUser: {
      backgroundColor: '#ffffff',
      textColor: '#000000'
    }
  }}
/>
```

### Tùy chỉnh input

```tsx
<ChatUI
  messages={messages}
  currentUserId="current"
  inputStyle={{
    minHeight: 48,
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0'
  }}
  sendButtonStyle={{
    backgroundColor: '#007AFF',
    width: 80
  }}
/>
```

## Best Practices

### Performance

1. **Virtual scrolling**: Sử dụng FlatList với `initialNumToRender` và `maxToRenderPerBatch`
2. **Image optimization**: Sử dụng cache cho avatar images
3. **Debouncing**: Debounce input để tránh re-render quá nhiều

### UX Tips

- Hiển thị "typing..." indicator khi người khác đang soạn
- Tự động focus vào input khi load screen
- Sử dụng haptic feedback khi gửi tin nhắn
- Lưu draft khi user navigate away

### Accessibility

- Đảm bảo touch targets tối thiểu 48x48px
- Sử dụng accessibility labels cho các elements
- Hỗ trợ VoiceOver/TalkBack
- Đảm bảo color contrast đủ tiêu chuẩn

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
- [Chat UI (Web)](/vi/blocks/web/chat-ui)
