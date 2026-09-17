# Chế Độ Tối

Triển khai chế độ tối trong ứng dụng của bạn với các component Galaxy UI.

## Tổng Quan

Các component Galaxy UI hỗ trợ chế độ tối ngay từ đầu sử dụng chiến lược `class`. Chỉ cần thêm class `dark` để kích hoạt giao diện tối.

## Thiết Lập

### Cài Đặt

Chế độ tối đã được cấu hình sẵn khi bạn khởi tạo Galaxy UI:

```bash
npx @galaxy-stack/design-cli@latest init
```

Lệnh này sẽ tạo các CSS variables cần thiết cho cả chế độ sáng và tối trong stylesheet của bạn.

### Cấu Hình Tailwind

Đảm bảo `darkMode: ["class"]` được thiết lập trong cấu hình Tailwind:

::: code-group

```js [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // ← Bật dark mode dựa trên class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... các màu khác
      },
    },
  },
}
```

:::

### CSS Variables

Stylesheet của bạn nên bao gồm các biến cho cả giao diện sáng và tối:

```css
@layer base {
  :root {
    /* Màu chế độ sáng */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... các màu chế độ sáng khác */
  }

  .dark {
    /* Màu chế độ tối */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... các màu chế độ tối khác */
  }
}
```

## Triển Khai

### Nút Chuyển Đổi Cơ Bản

Thêm nút chuyển đổi chế độ tối vào ứng dụng:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'

const isDark = ref(false)

onMounted(() => {
  // Kiểm tra tùy chọn hệ thống hoặc tùy chọn đã lưu
  isDark.value =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

  updateTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  updateTheme()
}

function updateTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}
</script>

<template>
  <Button @click="toggleTheme">
    {{ isDark ? '☀️ Sáng' : '🌙 Tối' }}
  </Button>
</template>
```

```tsx [React]
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Kiểm tra tùy chọn hệ thống hoặc tùy chọn đã lưu
    const dark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

    setIsDark(dark)
    updateTheme(dark)
  }, [])

  function updateTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  function toggleTheme() {
    const newDark = !isDark
    setIsDark(newDark)
    updateTheme(newDark)
  }

  return (
    <Button onClick={toggleTheme}>
      {isDark ? '☀️ Sáng' : '🌙 Tối'}
    </Button>
  )
}
```

```typescript [Angular]
import { Component, OnInit, signal } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ui-button (click)="toggleTheme()">
      {{ isDark() ? '☀️ Sáng' : '🌙 Tối' }}
    </ui-button>
  `
})
export class ThemeToggleComponent implements OnInit {
  isDark = signal(false)

  ngOnInit() {
    // Kiểm tra tùy chọn hệ thống hoặc tùy chọn đã lưu
    const dark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)

    this.isDark.set(dark)
    this.updateTheme(dark)
  }

  toggleTheme() {
    const newDark = !this.isDark()
    this.isDark.set(newDark)
    this.updateTheme(newDark)
  }

  updateTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
}
```

:::

### Service/Composable Quản Lý Giao Diện

Tạo trình quản lý giao diện có thể tái sử dụng:

::: code-group

```typescript [Vue - useTheme.ts]
import { ref, onMounted } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const theme = ref<Theme>('system')

  onMounted(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      theme.value = stored
    }
    applyTheme()
  })

  function applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme.value === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme.value)
    }

    localStorage.setItem('theme', theme.value)
  }

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    applyTheme()
  }

  return {
    theme,
    setTheme,
  }
}
```

```typescript [React - useTheme.ts]
import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      setThemeState(stored)
    }
  }, [])

  useEffect(() => {
    applyTheme()
  }, [theme])

  function applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme)
  }

  return {
    theme,
    setTheme,
  }
}
```

```typescript [Angular - theme.service.ts]
import { Injectable, signal, effect } from '@angular/core'

export type Theme = 'light' | 'dark' | 'system'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<Theme>('system')

  constructor() {
    // Tải giao diện đã lưu
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      this.theme.set(stored)
    }

    // Áp dụng giao diện khi thay đổi
    effect(() => {
      this.applyTheme()
    })
  }

  setTheme(newTheme: Theme) {
    this.theme.set(newTheme)
  }

  private applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    const theme = this.theme()
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }
}
```

:::

### Dropdown Chọn Giao Diện

Tạo dropdown để chọn giao diện:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTheme, type Theme } from '@/composables/useTheme'

const { theme, setTheme } = useTheme()

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: '☀️ Sáng' },
  { value: 'dark', label: '🌙 Tối' },
  { value: 'system', label: '💻 Hệ Thống' },
]
</script>

<template>
  <Select :model-value="theme" @update:model-value="setTheme">
    <SelectTrigger class="w-[150px]">
      <SelectValue placeholder="Chọn giao diện" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="t in themes" :key="t.value" :value="t.value">
        {{ t.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
```

```tsx [React]
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTheme, type Theme } from '@/hooks/useTheme'

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: '☀️ Sáng' },
  { value: 'dark', label: '🌙 Tối' },
  { value: 'system', label: '💻 Hệ Thống' },
]

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme()

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Chọn giao diện" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((t) => (
          <SelectItem key={t.value} value={t.value}>
            {t.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
```

```typescript [Angular]
import { Component, inject } from '@angular/core'
import { SelectComponent, SelectTriggerComponent, SelectValueComponent, SelectContentComponent, SelectItemComponent } from '@/components/ui/select'
import { ThemeService, type Theme } from '@/services/theme.service'

interface ThemeOption {
  value: Theme
  label: string
}

@Component({
  selector: 'app-theme-select',
  standalone: true,
  imports: [SelectComponent, SelectTriggerComponent, SelectValueComponent, SelectContentComponent, SelectItemComponent],
  template: `
    <ui-select [value]="themeService.theme()" (valueChange)="themeService.setTheme($event)">
      <ui-select-trigger class="w-[150px]">
        <ui-select-value placeholder="Chọn giao diện" />
      </ui-select-trigger>
      <ui-select-content>
        @for (theme of themes; track theme.value) {
          <ui-select-item [value]="theme.value">
            {{ theme.label }}
          </ui-select-item>
        }
      </ui-select-content>
    </ui-select>
  `
})
export class ThemeSelectComponent {
  themeService = inject(ThemeService)

  themes: ThemeOption[] = [
    { value: 'light', label: '☀️ Sáng' },
    { value: 'dark', label: '🌙 Tối' },
    { value: 'system', label: '💻 Hệ Thống' },
  ]
}
```

:::

## Tùy Chọn Hệ Thống

Tôn trọng tùy chọn chế độ tối của người dùng:

```javascript
// Phát hiện tùy chọn hệ thống
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

// Lắng nghe thay đổi
prefersDark.addEventListener('change', (e) => {
  if (theme === 'system') {
    const newTheme = e.matches ? 'dark' : 'light'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }
})
```

## Ngăn Flash Khi Tải Trang

Thêm script này vào thẻ `<head>` của HTML để ngăn flash giao diện khi tải trang:

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ứng Dụng Của Tôi</title>

    <!-- ✨ Ngăn flash dark mode -->
    <script>
      // Thực thi trước khi trang render
      (function() {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        }
      })()
    </script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## Màu Sắc Tùy Chỉnh Cho Dark Mode

Điều chỉnh màu sắc riêng cho chế độ tối:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }

  .dark {
    /* Điều chỉnh nền - làm tối hơn */
    --background: 222.2 84% 4.9%;

    /* Điều chỉnh chữ - làm sáng hơn */
    --foreground: 210 40% 98%;

    /* Điều chỉnh primary - tăng độ sáng để dễ nhìn hơn */
    --primary: 217 91% 70%; /* Sáng hơn chế độ sáng */

    /* Viền cần tương phản cao hơn trong dark mode */
    --border: 217.2 32.6% 25%; /* Dễ thấy hơn */
  }
}
```

### Hướng Dẫn Dark Mode

1. **Tăng độ sáng** cho màu sắc trong dark mode
2. **Sử dụng nền mềm mại hơn** (không phải đen thuần #000)
3. **Tăng tương phản viền** để dễ nhìn hơn
4. **Kiểm tra khả năng đọc** - đảm bảo chữ rõ ràng

## Dark Mode Cho Component Cụ Thể

Ghi đè component cụ thể trong dark mode:

```css
/* Style nút tùy chỉnh trong dark mode */
.dark .btn-custom {
  background: hsl(217 91% 70%);
  color: hsl(222.2 84% 4.9%);
}

/* Card với nền dark khác */
.dark .card-special {
  background: hsl(217.2 32.6% 10%);
  border-color: hsl(217.2 32.6% 20%);
}
```

## Kiểm Tra Dark Mode

### Kiểm Tra Thủ Công

1. Chuyển đổi dark mode trong ứng dụng
2. Kiểm tra tất cả trang và component
3. Xác minh khả năng đọc chữ
4. Kiểm tra trạng thái hover/focus
5. Kiểm tra form input và nút
6. Xác minh tương phản hình ảnh/icon

### Kiểm Tra Tự Động

::: code-group

```typescript [Playwright]
import { test, expect } from '@playwright/test'

test('nút chuyển dark mode hoạt động', async ({ page }) => {
  await page.goto('/')

  // Click nút chuyển giao diện
  await page.click('[data-testid="theme-toggle"]')

  // Xác minh class dark đã được thêm
  const html = page.locator('html')
  await expect(html).toHaveClass(/dark/)

  // Xác minh localStorage
  const theme = await page.evaluate(() => localStorage.getItem('theme'))
  expect(theme).toBe('dark')
})
```

```typescript [Cypress]
describe('Dark Mode', () => {
  it('chuyển đổi dark mode', () => {
    cy.visit('/')

    // Click nút chuyển giao diện
    cy.get('[data-testid="theme-toggle"]').click()

    // Xác minh class dark
    cy.get('html').should('have.class', 'dark')

    // Xác minh localStorage
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.equal('dark')
    })
  })
})
```

:::

## Thực Hành Tốt

### 1. Cung Cấp Nút Chuyển Đổi

Luôn cho người dùng quyền kiểm soát tùy chọn giao diện:

```vue
<!-- ✅ Tốt: Người dùng kiểm soát -->
<ThemeToggle />

<!-- ❌ Không tốt: Ép buộc dark mode -->
<div class="dark">...</div>
```

### 2. Tôn Trọng Tùy Chọn Hệ Thống

Mặc định theo tùy chọn hệ thống khi chưa có tùy chọn đã lưu:

```javascript
// ✅ Tốt
const theme = localStorage.theme ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

// ❌ Không tốt: Luôn mặc định sáng
const theme = localStorage.theme || 'light'
```

### 3. Lưu Tùy Chọn Người Dùng

Lưu giao diện vào localStorage:

```javascript
// ✅ Tốt: Lưu tùy chọn
localStorage.setItem('theme', theme)

// ❌ Không tốt: Mất tùy chọn khi reload
```

### 4. Kiểm Tra Tương Phản

Đảm bảo tương phản đủ ở cả hai chế độ:

- Chế độ sáng: Chữ tối trên nền sáng
- Chế độ tối: Chữ sáng trên nền tối
- Sử dụng [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 5. Tránh Đen Thuần

Sử dụng xám tối thay vì đen thuần (#000):

```css
/* ✅ Tốt: Xám tối */
.dark {
  --background: 222.2 84% 4.9%; /* Xám xanh rất tối */
}

/* ❌ Không tốt: Đen thuần */
.dark {
  --background: 0 0% 0%;
}
```

## Khắc Phục Sự Cố

### Flash nội dung chưa style

**Vấn đề**: Trang flash chế độ sáng trước khi áp dụng dark mode

**Giải pháp**: Thêm inline script vào HTML head (xem [phần Ngăn Flash](#ngan-flash-khi-tai-trang))

### Dark mode không áp dụng

**Vấn đề**: Các class không hoạt động

**Giải pháp**: Kiểm tra cấu hình Tailwind có `darkMode: ["class"]`

### Màu không thay đổi

**Vấn đề**: Màu trông giống nhau ở dark mode

**Giải pháp**: Đảm bảo CSS variables `.dark` được định nghĩa trong stylesheet

### Giao diện không lưu

**Vấn đề**: Giao diện reset khi reload trang

**Giải pháp**: Lưu vào localStorage và load khi mount

## Ví Dụ

### Theme Provider Hoàn Chỉnh

::: code-group

```vue [Vue - ThemeProvider.vue]
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const theme = ref<Theme>('system')

provide('theme', {
  theme,
  setTheme: (newTheme: Theme) => {
    theme.value = newTheme
    applyTheme()
  },
})

onMounted(() => {
  const stored = localStorage.getItem('theme') as Theme
  if (stored) theme.value = stored
  applyTheme()

  // Lắng nghe thay đổi tùy chọn hệ thống
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', () => {
    if (theme.value === 'system') applyTheme()
  })
})

function applyTheme() {
  const root = document.documentElement
  root.classList.remove('light', 'dark')

  if (theme.value === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    root.classList.add(systemTheme)
  } else {
    root.classList.add(theme.value)
  }

  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <slot />
</template>
```

```tsx [React - ThemeProvider.tsx]
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'system'

type ThemeContext = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) setThemeState(stored)
  }, [])

  useEffect(() => {
    applyTheme()

    // Lắng nghe thay đổi tùy chọn hệ thống
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      if (theme === 'system') applyTheme()
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [theme])

  function applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme phải được sử dụng trong ThemeProvider')
  return context
}
```

:::

## Tài Nguyên

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Bước Tiếp Theo

- [Tùy Chỉnh Giao Diện](/vi/guide/theming) - Tùy chỉnh màu sắc và design token
- [Cấu Hình](/vi/guide/configuration) - Cấu hình components.json
- [Components](/vi/components/overview) - Khám phá các component
