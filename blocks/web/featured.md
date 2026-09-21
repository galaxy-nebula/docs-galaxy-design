# Featured Sections

Landing page sections including hero and features grid with multiple variants for marketing pages.

<ComponentPreview name="FeaturedSectionDemo">
  <template #preview>
    <DemoContainer>
      <FeaturedSectionDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

```bash
npx @galaxy-stack/nebula-cli add featured
```

## Features

- ✅ **Hero Section** - 3 variants (default, centered, split)
- ✅ **Features Grid** - 2/3/4 column layouts
- ✅ **Multiple Variants** - Default, centered, cards
- ✅ **Image Support** - Hero images and feature images
- ✅ **CTA Buttons** - Primary and secondary actions
- ✅ **Background Effects** - Gradient decorations
- ✅ **Responsive** - Mobile-first design

## Components

This block provides two main components:
- `HeroSection` - Landing page hero
- `FeaturedSection` - Features grid

## Components Used

- [Button](/components/button)

## Usage

### Hero Section

::: code-group
```vue [Vue]
<script setup>
import { HeroSection } from '@/components/ui/featured'
</script>

<template>
  <HeroSection
    title="Build amazing products faster"
    description="Galaxy UI helps you create beautiful interfaces"
    :primary-cta="{ label: 'Get Started' }"
    :secondary-cta="{ label: 'Learn More' }"
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
      title="Build amazing products faster"
      description="Galaxy UI helps you create beautiful interfaces"
      primaryCta={{
        label: 'Get Started',
        onClick: () => router.push('/signup')
      }}
      secondaryCta={{
        label: 'Learn More',
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
    title: 'Fast Performance',
    description: 'Lightning fast load times',
    icon: '⚡'
  },
  {
    id: '2',
    title: 'Easy to Use',
    description: 'Intuitive interface',
    icon: '✨'
  },
  {
    id: '3',
    title: 'Secure',
    description: 'Enterprise-grade security',
    icon: '🔒'
  }
]

<FeaturedSection
  title="Why choose Galaxy UI?"
  description="Everything you need"
  features={features}
  columns={3}
  variant="cards"
/>
```

## Props

### HeroSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Main heading |
| `description` | `string` | - | Subheading text |
| `primaryCta` | `{label, onClick}` | - | Primary button |
| `secondaryCta` | `{label, onClick}` | - | Secondary button |
| `image` | `string` | - | Hero image URL |
| `variant` | `'default' \| 'centered' \| 'split'` | `'default'` | Layout variant |

### FeaturedSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Section title |
| `description` | `string` | - | Section description |
| `features` | `Feature[]` | required | Features array |
| `columns` | `2 \| 3 \| 4` | `3` | Grid columns |
| `variant` | `'default' \| 'centered' \| 'cards'` | `'default'` | Display variant |

## Examples

### Complete Landing Page

```tsx
export default function LandingPage() {
  return (
    <>
      <HeroSection
        title="Welcome to Galaxy UI"
        description="The fastest way to build modern UIs"
        primaryCta={{ label: 'Start Free Trial' }}
        variant="centered"
      />

      <FeaturedSection
        title="Features"
        description="Everything you need"
        features={features}
        columns={3}
        variant="cards"
      />

      <HeroSection
        title="Ready to get started?"
        primaryCta={{ label: 'Sign Up Now' }}
        variant="centered"
      />
    </>
  )
}
```

## Platform Availability

| Platform | Status |
|----------|--------|
| Vue 3 | ✅ Available |
| React 18+ | ✅ Available |
| Angular 20 | ✅ Available |
| React Native | ⚠️ Use custom layouts |
| Flutter | ⚠️ Use custom layouts |
