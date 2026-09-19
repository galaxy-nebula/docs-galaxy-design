# Featured Sections

Các phần landing page bao gồm hero và features grid với nhiều biến thể cho các trang marketing.

## Cài đặt

```bash
npx @galaxy-stack/nebula-cli add featured
```

## Tính năng

- ✅ **Hero Section** - 3 biến thể (default, centered, split)
- ✅ **Features Grid** - Các bố cục 2/3/4 cột
- ✅ **Multiple Variants** - Default, centered, cards
- ✅ **Image Support** - Hero images và feature images
- ✅ **CTA Buttons** - Các nút primary và secondary
- ✅ **Background Effects** - Decorations gradient
- ✅ **Responsive** - Thiết kế mobile-first

## Components

Block này cung cấp hai component chính:
- `HeroSection` - Hero cho landing page
- `FeaturedSection` - Features grid

## Components sử dụng

- [Button](/vi/components/button)

## Sử dụng

### Hero Section

::: code-group
```vue [Vue]
<script setup>
import { HeroSection } from '@/components/ui/featured'
</script>

<template>
  <HeroSection
    title="Xây dựng sản phẩm tuyệt vời nhanh hơn"
    description="Galaxy UI giúp bạn tạo giao diện đẹp"
    :primary-cta="{ label: 'Bắt đầu' }"
    :secondary-cta="{ label: 'Tìm hiểu thêm' }"
    variant="split"
    image="/hero.jpg"
    @primary-click="() => router.push('/signup')"
  />
</template>
```

```tsx [React]
import { HeroSection } from '@/components/ui/featured'

export default function Landing() {
  return (
    <HeroSection
      title="Xây dựng sản phẩm tuyệt vời nhanh hơn"
      description="Galaxy UI giúp bạn tạo giao diện đẹp"
      primaryCta={{
        label: 'Bắt đầu',
        onClick: () => router.push('/signup')
      }}
      secondaryCta={{
        label: 'Tìm hiểu thêm',
        onClick: () => router.push('/docs')
      }}
      variant="split"
      image="/hero.jpg"
    />
  )
}
```
:::

### Features Grid

```tsx
import { FeaturedSection } from '@/components/ui/featured'

const features = [
  {
    id: '1',
    title: 'Hiệu suất nhanh',
    description: 'Tải nhanh như chớp',
    icon: '⚡'
  },
  {
    id: '2',
    title: 'Dễ sử dụng',
    description: 'Giao diện trực quan',
    icon: '✨'
  },
  {
    id: '3',
    title: 'Bảo mật',
    description: 'Bảo mật cấp doanh nghiệp',
    icon: '🔒'
  }
]

<FeaturedSection
  title="Tại sao chọn Galaxy UI?"
  description="Tất cả những gì bạn cần"
  features={features}
  columns={3}
  variant="cards"
/>
```

## Props

### HeroSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Tiêu đề chính |
| `description` | `string` | - | Mô tả phụ |
| `primaryCta` | `{label, onClick}` | - | Nút primary |
| `secondaryCta` | `{label, onClick}` | - | Nút secondary |
| `image` | `string` | - | URL hero image |
| `variant` | `'default' \| 'centered' \| 'split'` | `'default'` | Biến thể layout |

### FeaturedSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Tiêu đề section |
| `description` | `string` | - | Mô tả section |
| `features` | `Feature[]` | required | Mảng các features |
| `columns` | `2 \| 3 \| 4` | `3` | Số cột grid |
| `variant` | `'default' \| 'centered' \| 'cards'` | `'default'` | Biến thể hiển thị |

## Các ví dụ

### Landing Page hoàn chỉnh

```tsx
export default function LandingPage() {
  return (
    <>
      <HeroSection
        title="Chào mừng đến với Galaxy UI"
        description="Cách nhanh nhất để xây dựng UI hiện đại"
        primaryCta={{ label: 'Dùng thử miễn phí' }}
        variant="centered"
      />

      <FeaturedSection
        title="Tính năng nổi bật"
        description="Mọi thứ bạn cần để xây dựng UI đẹp"
        features={[
          {
            id: '1',
            title: 'Nhanh',
            description: 'Tối ưu hiệu suất',
            icon: '⚡'
          },
          {
            id: '2',
            title: 'Đẹp',
            description: 'Thiết kế hiện đại',
            icon: '✨'
          },
          {
            id: '3',
            title: 'Dễ dùng',
            description: 'API trực quan',
            icon: '🎯'
          }
        ]}
        columns={3}
      />
    </>
  )
}
```

### Hero với split layout

```vue
<script setup>
import { HeroSection } from '@/components/ui/featured'
</script>

<template>
  <HeroSection
    title="Giải pháp toàn diện"
    description="Tất cả trong một nền tảng"
    :primary-cta="{ label: 'Bắt đầu ngay' }"
    :secondary-cta="{ label: 'Demo' }"
    variant="split"
    image="/dashboard.png"
  />
</template>
```

### Features với cards variant

```vue
<script setup>
import { FeaturedSection } from '@/components/ui/featured'

const features = [
  {
    id: '1',
    title: 'Component Library',
    description: '50+ components sẵn sàng',
    icon: '🧩',
    image: '/components.png'
  },
  {
    id: '2',
    title: 'Multi-Framework',
    description: 'Vue, React, Angular, RN, Flutter',
    icon: '🌐',
    image: '/frameworks.png'
  },
  {
    id: '3',
    title: 'CLI Tool',
    description: 'Cài đặt nhanh với 1 lệnh',
    icon: '⚡',
    image: '/cli.png'
  }
]
</script>

<template>
  <FeaturedSection
    title="Tại sao Galaxy UI?"
    description="Nền tảng UI tốt nhất cho mọi framework"
    :features="features"
    :columns="3"
    variant="cards"
  />
</template>
```

## Tùy chỉnh

### Tùy chỉnh Hero variant

```vue
<template>
  <!-- Default variant -->
  <HeroSection
    title="Default Layout"
    description="Left-aligned content"
    variant="default"
  />

  <!-- Centered variant -->
  <HeroSection
    title="Centered Layout"
    description="Centered content"
    variant="centered"
  />

  <!-- Split variant -->
  <HeroSection
    title="Split Layout"
    description="Content on left, image on right"
    variant="split"
    image="/hero.jpg"
  />
</template>
```

### Tùy chỉnh giao diện

```vue
<template>
  <HeroSection
    title="Custom Styled"
    class="custom-hero"
  />
</template>

<style>
.custom-hero {
  --hero-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --hero-text: #ffffff;
  --hero-primary: #ffd700;
}
</style>
```

## Best Practices

### Content Strategy

1. **Clear value proposition**: Tiêu đề nên truyền tải giá trị chính
2. **Concise description**: Mô tả ngắn gọn, dễ hiểu
3. **Strong CTA**: Nút kêu gọi hành động rõ ràng
4. **Visual hierarchy**: Sử dụng kích thước và màu sắc để tạo hierarchy

### Performance

- Sử dụng optimized images (WebP, AVIF)
- Lazy load hero images
- Sử dụng responsive images với srcset

### Accessibility

- Đảm bảo color contrast đủ tiêu chuẩn WCAG
- Sử dụng proper heading hierarchy (H1, H2)
- Thêm alt text cho images
- Đảm bảo keyboard navigation cho CTAs

### SEO Tips

- Sử dụng semantic HTML
- Thêm meta descriptions
- Sử dụng structured data
- Tối ưu page load speed

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
- [Button Component](/vi/components/button)
