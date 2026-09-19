# Authentication (Mobile)

Form authentication tối ưu cho mobile với quản lý bàn phím native, hỗ trợ biometric và các ô nhập thân thiện với cảm ứng.

## Cài đặt

```bash
npx @galaxy-stack/nebula-cli add authentication
```

::: info Nền tảng
Phiên bản mobile cho **React Native** và **Flutter**. Đối với web, xem [Authentication (Web)](/vi/blocks/web/authentication).
:::

## Tính năng

- ✅ **Native Keyboard** - Quản lý bàn phím tự động
- ✅ **Biometric Auth** - Hỗ trợ Touch ID / Face ID
- ✅ **Form Validation** - Validation thời gian thực
- ✅ **Touch-Optimized** - Các ô nhập lớn
- ✅ **Platform-Specific** - Kiểu dáng iOS/Android

## Sử dụng

### React Native

```tsx
import { AuthForm } from '@/components/ui/authentication'

export default function LoginScreen() {
  const handleLogin = async (data) => {
    // Logic auth của bạn
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error('Đăng nhập thất bại')
      
      const user = await response.json()
      // Lưu user hoặc chuyển hướng
    } catch (e) {
      console.error(e)
    }
  }

  const handleBiometric = async () => {
    // Sử dụng Touch ID / Face ID
    const auth = await Biometric.authenticate()
    if (auth.success) {
      // Đăng nhập thành công
    }
  }

  return (
    <AuthForm
      mode="login"
      onSubmit={handleLogin}
      onBiometric={handleBiometric}
      showBiometric={true}
    />
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/authentication.dart';
import 'package:local_auth/local_auth.dart';

class LoginScreen extends StatelessWidget {
  final _auth = LocalAuthentication();

  Future<void> _handleLogin(Map<String, dynamic> data) async {
    // Logic auth của bạn
    try {
      final response = await http.post(
        Uri.parse('/api/auth/login'),
        body: jsonEncode(data),
      );
      
      if (response.statusCode != 200) {
        throw Exception('Đăng nhập thất bại');
      }
      
      final user = jsonDecode(response.body);
      // Lưu user hoặc chuyển hướng
    } catch (e) {
      print('Error: $e');
    }
  }

  Future<void> _handleBiometric() async {
    final canCheck = await _auth.canCheckBiometrics;
    if (canCheck) {
      final authenticated = await _auth.authenticate(
        localizedReason: 'Xác thực để đăng nhập',
      );
      if (authenticated) {
        // Đăng nhập thành công
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GalaxyAuthForm(
        mode: AuthMode.login,
        onSubmit: _handleLogin,
        onBiometric: _handleBiometric,
        showBiometric: true,
      ),
    );
  }
}
```

## Props

### React Native Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'login' \| 'register'` | `'login'` | Chế độ form |
| `onSubmit` | `(data: FormData) => void` | required | Callback khi submit |
| `onModeChange` | `(mode: string) => void` | - | Callback khi đổi chế độ |
| `loading` | `boolean` | `false` | Trạng thái loading |
| `error` | `string` | - | Thông báo lỗi |
| `showBiometric` | `boolean` | `false` | Hiển thị nút biometric |
| `onBiometric` | `() => void` | - | Callback biometric |

### Flutter Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mode` | `AuthMode` | `login` | Chế độ form |
| `onSubmit` | `Function(Map)` | required | Callback khi submit |
| `onModeChange` | `Function(String)` | - | Callback khi đổi chế độ |
| `loading` | `bool` | `false` | Trạng thái loading |
| `error` | `String` | - | Thông báo lỗi |
| `showBiometric` | `bool` | `false` | Hiển thị nút biometric |
| `onBiometric` | `Function()` | - | Callback biometric |

## Types

```typescript
interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  acceptTerms: boolean;
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onSubmit` | `(data: FormData)` | Khi submit form |
| `onModeChange` | `(mode: string)` | Khi thay đổi chế độ |
| `onBiometric` | `()` | Khi sử dụng biometric |

## Các ví dụ

### Login đơn giản

```tsx
import { AuthForm } from '@/components/ui/authentication'

export default function LoginScreen() {
  const handleLogin = (data) => {
    console.log('Login:', data.email)
    // API call
  }

  return (
    <AuthForm
      mode="login"
      onSubmit={handleLogin}
    />
  )
}
```

### Register với validation

```tsx
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

export default function RegisterScreen() {
  const handleRegister = (data) => {
    const errors = validatePassword(data.password)
    if (errors.length > 0) {
      // Hiển thị lỗi
      return
    }
    // Tiếp tục đăng ký
  }

  return (
    <AuthForm
      mode="register"
      onSubmit={handleRegister}
      showBiometric={false}
    />
  )
}
```

### Biometric Only Login

```tsx
import { AuthForm } from '@/components/ui/authentication'

export default function BiometricLogin() {
  const handleBiometric = async () => {
    const auth = await Biometric.authenticate({
      promptMessage: 'Đăng nhập bằng vân tay',
      cancelButton: 'Hủy'
    })
    
    if (auth.success) {
      // Đăng nhập thành công
    }
  }

  return (
    <AuthForm
      mode="login"
      showEmailLogin={false}
      showBiometric={true}
      onBiometric={handleBiometric}
    />
  )
}
```

## Tùy chỉnh

### Tùy chỉnh giao diện

```tsx
<AuthForm
  mode="login"
  containerStyle={{
    backgroundColor: '#ffffff',
    padding: 24
  }}
  inputStyle={{
    height: 48,
    backgroundColor: '#f5f5f5',
    borderRadius: 8
  }}
  buttonStyle={{
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 8
  }}
/>
```

### Thêm logo

```tsx
<AuthForm
  mode="login"
  header={
    <View style={styles.header}>
      <Image source={require('/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Chào mừng trở lại</Text>
    </View>
  }
/>
```

## Mobile-Specific Features

### Keyboard Handling
- **Auto-dismiss**: Tự động đóng bàn phím khi submit
- **Scroll on focus**: Tự động scroll để tránh bàn phím
- **Next button**: Nút "Next" để chuyển field

### Biometric Support
- **Touch ID** (iOS): Xác thực vân tay
- **Face ID** (iOS): Xác thực khuôn mặt
- **Fingerprint** (Android): Vân tay Android
- **Face Unlock** (Android): Khuôn mặt Android

### Touch-Optimized
- Ô nhập cao tối thiểu 48px
- Nút cao tối thiểu 48px
- Khoảng cách touch targets đủ rộng

### Platform-Specific
- **iOS**: Kiểu dáng Cupertino
- **Android**: Kiểu dáng Material Design
- **Auto-fill**: Hỗ trợ tự động điền thông tin

## Best Practices

### Security

1. **HTTPS**: Luôn sử dụng HTTPS cho auth endpoints
2. **Token storage**: Lưu tokens trong secure storage
3. **Biometric fallback**: Cung cấp phương án thay thế
4. **Rate limiting**: Giới hạn số lần thử
5. **Session timeout**: Tự động đăng xuất sau thời gian

### UX Tips

- Hiển thị clear error messages
- Tự động focus vào field đầu tiên
- Cho phép show/hide password
- Sử dụng biometric khi có thể
- Persist login state

### Accessibility

- Đảm bảo touch targets 48x48px
- Sử dụng accessibility labels
- Hỗ trợ VoiceOver/TalkBack
- Đảm bảo color contrast

### Performance

- Lazy load biometric libraries
- Memoize form handlers
- Optimize keyboard animations

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
- [Authentication (Web)](/vi/blocks/web/authentication)
