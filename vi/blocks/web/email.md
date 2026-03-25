# Email Client

Giao diện email giống Gmail với inbox, folders, danh sách email, reading pane và các hành động email.

## Cài đặt

```bash
npx galaxy-design add email
```

## Tính năng

- ✅ **Bố cục ba cột** - Folders, danh sách email, reading pane
- ✅ **Danh sách email** - Với preview và trạng thái đã đọc/chưa đọc
- ✅ **Reading Pane** - Hiển thị nội dung email đầy đủ
- ✅ **Folder Sidebar** - Inbox, starred, sent, v.v.
- ✅ **Search** - Lọc emails theo subject, sender, hoặc content
- ✅ **Email Actions** - Star, archive, delete
- ✅ **Avatar Support** - Avatars của sender với fallbacks
- ✅ **Smart Date Formatting** - "5 phút trước", "Hôm qua", v.v.

## Components sử dụng

- [Button](/vi/components/button)
- [Input](/vi/components/input)
- [Avatar](/vi/components/avatar)
- [Separator](/vi/components/separator)
- [ScrollArea](/vi/components/scroll-area)

## Sử dụng

::: code-group
```vue [Vue]
<script setup>
import { ref } from 'vue'
import { EmailClient } from '@/components/ui/email'

const emails = ref([
  {
    id: '1',
    from: {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/avatars/john.jpg'
    },
    subject: 'Cập nhật dự án',
    preview: 'Đây là cập nhật mới nhất về dự án...',
    body: '<p>Nội dung email đầy đủ ở đây...</p>',
    date: new Date(),
    read: false,
    starred: false
  }
])

const handleEmailClick = (email) => {
  email.read = true
}

const handleEmailAction = (emailId, action) => {
  console.log(`${action} email:`, emailId)
}
</script>

<template>
  <EmailClient
    :emails="emails"
    @email-click="handleEmailClick"
    @email-action="handleEmailAction"
  />
</template>
```

```tsx [React]
import { useState } from 'react'
import { EmailClient } from '@/components/ui/email'

export default function EmailApp() {
  const [emails, setEmails] = useState([
    {
      id: '1',
      from: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/avatars/john.jpg'
      },
      subject: 'Cập nhật dự án',
      preview: 'Đây là cập nhật mới nhất...',
      body: '<p>Nội dung email đầy đủ...</p>',
      date: new Date(),
      read: false,
      starred: false
    }
  ])

  const handleEmailClick = (email) => {
    setEmails(emails.map(e => 
      e.id === email.id ? { ...e, read: true } : e
    ))
  }

  return (
    <EmailClient
      emails={emails}
      onEmailClick={handleEmailClick}
    />
  )
}
```
:::

## Props

| Prop | Type | Description |
|------|------|-------------|
| `emails` | `Email[]` | Mảng các đối tượng email |
| `folders` | `EmailFolder[]` | Các folders trong sidebar (tùy chọn) |
| `onEmailClick` | `(email: Email) => void` | Gọi khi click vào email |
| `onCompose` | `() => void` | Gọi khi click compose |
| `onEmailAction` | `(id: string, action) => void` | Các hành động Star, archive, delete |

## Types

```typescript
interface Email {
  id: string
  from: {
    name: string
    email: string
    avatar?: string
  }
  subject: string
  preview: string
  body: string
  date: Date
  read: boolean
  starred: boolean
  labels?: string[]
}

interface EmailFolder {
  id: string
  name: string
  icon?: ReactNode
  count?: number
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `@email-click` | `(email: Email)` | Khi click vào email |
| `@compose` | `()` | Khi click nút compose |
| `@email-action` | `(id: string, action: string)` | Khi thực hiện action trên email |

## Các ví dụ

### Email với custom folders

```vue
<script setup>
import { EmailClient } from '@/components/ui/email'

const folders = [
  { id: 'inbox', name: 'Hộp thư', icon: '📥', count: 12 },
  { id: 'starred', name: 'Đánh dấu', icon: '⭐' },
  { id: 'sent', name: 'Đã gửi', icon: '📤' },
  { id: 'drafts', name: 'Bản nháp', icon: '📝', count: 3 },
  { id: 'trash', name: 'Thùng rác', icon: '🗑️' }
]

const emails = [
  {
    id: '1',
    from: { name: 'Team', email: 'team@company.com' },
    subject: 'Weekly Report',
    preview: 'Here is the weekly report...',
    date: new Date(),
    read: false,
    starred: true
  }
]
</script>

<template>
  <EmailClient
    :emails="emails"
    :folders="folders"
  />
</template>
```

### Email với search

```vue
<script setup>
import { ref } from 'vue'
import { EmailClient } from '@/components/ui/email'

const searchQuery = ref('')
const emails = ref([...])

const filteredEmails = computed(() => {
  if (!searchQuery.value) return emails.value
  return emails.value.filter(email =>
    email.subject.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    email.from.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <EmailClient
    :emails="filteredEmails"
    :search-query="searchQuery"
    @search-update="searchQuery = $event"
  />
</template>
```

### Email với labels

```vue
<script setup>
import { EmailClient } from '@/components/ui/email'

const emails = [
  {
    id: '1',
    from: { name: 'HR', email: 'hr@company.com' },
    subject: 'Policy Update',
    preview: 'New company policies...',
    date: new Date(),
    read: false,
    starred: false,
    labels: ['Important', 'Work']
  }
]
</script>

<template>
  <EmailClient :emails="emails" />
</template>
```

## Tùy chỉnh

### Tùy chỉnh layout

```vue
<template>
  <EmailClient
    :emails="emails"
    :show-preview="true"
    :show-labels="true"
    :compact-mode="false"
  />
</template>
```

### Tùy chỉnh giao diện

```vue
<template>
  <EmailClient
    :emails="emails"
    class="custom-email"
  />
</template>

<style>
.custom-email {
  --email-bg: #ffffff;
  --email-border: #e5e7eb;
  --email-selected: #f3f4f6;
  --email-unread: #1a1a1a;
}
</style>
```

## Best Practices

### Performance

1. **Virtual scrolling**: Sử dụng virtual scroll cho danh sách email dài
2. **Lazy load**: Load email content lazily khi click
3. **Pagination**: Phân trang cho danh sách email lớn

### Accessibility

- Sử dụng proper ARIA labels cho folders và actions
- Hỗ trợ keyboard navigation
- Đảm bảo color contrast cho unread/read states

### UX Tips

- Hiển thị số lượng unread emails trong folder
- Sử dụng smart date formatting ("5 phút trước", "Hôm qua")
- Tự động mark as read khi mở email
- Thêm keyboard shortcuts (ví dụ: 'c' để compose)

## Nền tảng hỗ trợ

| Nền tảng | Trạng thái |
|----------|-----------|
| Vue | ✅ |
| React | ✅ |
| Angular | ✅ |
| React Native | ❌ |
| Flutter | ❌ |

## Tham khảo thêm

- [Components Overview](/vi/components/overview)
- [Blocks Overview](/vi/blocks/overview)
- [Input Component](/vi/components/input)
