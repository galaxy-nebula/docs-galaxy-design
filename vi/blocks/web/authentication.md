# Authentication

Form authentication hoàn chỉnh với đăng nhập, đăng ký, social login, validation và xử lý lỗi.

## Cài đặt

```bash
npx @galaxy-stack/nebula-cli add authentication
```

## Tính năng

- ✅ **Form Đăng nhập & Đăng ký** - Luồng auth hoàn chỉnh
- ✅ **Validation Form** - Validation client-side với thông báo lỗi
- ✅ **Social Login** - Các nút Google, GitHub
- ✅ **Remember Me** - Checkbox cho đăng nhập duy trì
- ✅ **Mật khẩu mạnh** - Tối thiểu 8 ký tự cho đăng ký
- ✅ **Chấp nhận điều khoản** - Checkbox bắt buộc
- ✅ **Chuyển đổi chế độ** - Chuyển giữa đăng nhập/đăng ký
- ✅ **Trạng thái Loading** - Vô hiệu hóa inputs khi đang gửi
- ✅ **Hiển thị lỗi** - Thông báo lỗi từ server

## Components sử dụng

- [Button](/vi/components/button)
- [Input](/vi/components/input)
- [Label](/vi/components/label)
- [Checkbox](/vi/components/checkbox)
- [Separator](/vi/components/separator)

## Sử dụng

### Form Authentication cơ bản

::: code-group
```vue [Vue]
<script setup>
import { ref } from 'vue'
import { AuthForm } from '@/components/ui/authentication'

const loading = ref(false)
const error = ref('')

const handleSubmit = async (data) => {
  loading.value = true
  error.value = ''

  try {
    // Logic auth của bạn
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error('Đăng nhập thất bại')

    const user = await response.json()
    // Chuyển hướng hoặc cập nhật state
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

const handleSocialLogin = (provider) => {
  window.location.href = `/api/auth/${provider}`
}
</script>

<template>
  <AuthForm
    mode="login"
    :loading="loading"
    :error="error"
    show-social-login
    @submit="handleSubmit"
    @social-login="handleSocialLogin"
  />
</template>
```

```tsx [React]
import { useState } from 'react'
import { AuthForm } from '@/components/ui/authentication'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (data) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('Đăng nhập thất bại')

      const user = await response.json()
      // Chuyển hướng hoặc cập nhật state
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    window.location.href = `/api/auth/${provider}`
  }

  return (
    <AuthForm
      mode="login"
      loading={loading}
      error={error}
      showSocialLogin
      onSubmit={handleSubmit}
      onSocialLogin={handleSocialLogin}
    />
  )
}
```
:::

## Props

### AuthForm Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'login' \| 'register'` | `'login'` | Chế độ form ban đầu |
| `onSubmit` | `(data) => void` | required | Gọi khi submit form |
| `onModeChange` | `(mode) => void` | - | Gọi khi thay đổi chế độ |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |
| `error` | `string` | - | Thông báo lỗi cần hiển thị |
| `showSocialLogin` | `boolean` | `true` | Hiển thị các nút social login |

### Các kiểu Form Data

```typescript
interface LoginFormData {
  email: string
  password: string
  remember?: boolean
}

interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  name: string
  acceptTerms: boolean
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `@submit` | `(data: FormData)` | Khi form được submit |
| `@mode-change` | `(mode: 'login' \| 'register')` | Khi chuyển chế độ |
| `@social-login` | `(provider: string)` | Khi click social login |

## Các ví dụ

### Trang đăng nhập đơn giản

```vue
<script setup>
import { AuthForm } from '@/components/ui/authentication'

const handleLogin = async (data) => {
  console.log('Login:', data.email, data.password)
  // API call here
}
</script>

<template>
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <AuthForm
      mode="login"
      @submit="handleLogin"
      show-social-login
    />
  </div>
</template>
```

### Đăng ký với validation tùy chỉnh

```vue
<script setup>
import { AuthForm } from '@/components/ui/authentication'

const validatePassword = (password) => {
  const errors = []
  
  if (password.length < 8) {
    errors.push('Mật khẩu phải có ít nhất 8 ký tự')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Phải có ít nhất 1 chữ hoa')
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Phải có ít nhất 1 số')
  }
  
  return errors
}

const handleRegister = async (data) => {
  const passwordErrors = validatePassword(data.password)
  if (passwordErrors.length > 0) {
    // Hiển thị lỗi
    return
  }
  
  // Tiếp tục đăng ký
}
</script>

<template>
  <AuthForm
    mode="register"
    @submit="handleRegister"
  />
</template>
```

### Social Login Only

```vue
<script setup>
import { AuthForm } from '@/components/ui/authentication'

const handleSocialLogin = (provider) => {
  // Redirect to OAuth provider
  window.location.href = `/api/auth/${provider}`
}
</script>

<template>
  <AuthForm
    mode="login"
    :show-social-login="true"
    :show-email-login="false"
    @social-login="handleSocialLogin"
  />
</template>
```

## Tùy chỉnh

### Tùy chỉnh giao diện

```vue
<template>
  <AuthForm
    mode="login"
    class="custom-auth"
    show-social-login
  />
</template>

<style>
.custom-auth {
  --auth-bg: #ffffff;
  --auth-border: #e5e7eb;
  --auth-primary: #3b82f6;
}
</style>
```

### Thêm logo

```vue
<template>
  <div className="text-center mb-6">
    <img src="/logo.svg" alt="Logo" className="h-12 mx-auto" />
    <h1 className="text-2xl font-bold mt-4">Chào mừng trở lại</h1>
  </div>
  <AuthForm mode="login" />
</template>
```

## Best Practices

### Security

1. **HTTPS**: Luôn sử dụng HTTPS cho authentication endpoints
2. **Rate limiting**: Giới hạn số lần thử đăng nhập
3. **Password hashing**: Hash mật khẩu trước khi lưu
4. **CSRF protection**: Sử dụng CSRF tokens
5. **Secure cookies**: Sử dụng HttpOnly và Secure flags

### UX Tips

- Hiển thị clear error messages
- Tự động focus vào field đầu tiên
- Cho phép show/hide password
- Giữ email khi chuyển giữa login/register
- Hiển thị loading state rõ ràng

### Accessibility

- Sử dụng proper label associations
- Hỗ trợ keyboard navigation
- Hiển thị error messages với aria-live
- Đảm bảo color contrast

## Tham khảo thêm

- [Components Overview](/vi/components/overview)
- [Blocks Overview](/vi/blocks/overview)
- [Form Component](/vi/components/form)
