# Biểu Đồ Vùng

Trực quan hóa tổng tích lũy theo thời gian với vùng tô, đường cong mượt và hỗ trợ gradient.

<ComponentPreview name="AreaChartDemo">
  <template #preview>
    <DemoContainer>
      <AreaChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AreaChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh số',
      data: [30, 45, 35, 50, 45, 60],
      color: '#3b82f6',
    },
    {
      label: 'Doanh thu',
      data: [20, 35, 30, 45, 55, 50],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <AreaChart :data="salesData" :height="300" gradient />
</template>
```

```tsx [React]
import { AreaChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh số',
      data: [30, 45, 35, 50, 45, 60],
      color: '#3b82f6',
    },
    {
      label: 'Doanh thu',
      data: [20, 35, 30, 45, 55, 50],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return <AreaChart data={salesData} height={300} gradient />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AreaChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AreaChartComponent],
  template: `<ui-area-chart [data]="salesData" [height]="300" [gradient]="true" />`
})
export class AppComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Doanh số',
        data: [30, 45, 35, 50, 45, 60],
        color: '#3b82f6',
      },
      {
        label: 'Doanh thu',
        data: [20, 35, 30, 45, 55, 50],
        color: '#10b981',
      },
    ],
  }
}
```

```tsx [React Native]
import { AreaChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh số',
      data: [30, 45, 35, 50, 45, 60],
      color: '#007AFF',
    },
    {
      label: 'Doanh thu',
      data: [20, 35, 30, 45, 55, 50],
      color: '#34C759',
    },
  ],
}

export default function App() {
  return <AreaChart data={salesData} height={300} gradient />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/area_chart.dart';

class MyApp extends StatelessWidget {
  final salesData = ChartData(
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      ChartDataset(
        label: 'Doanh số',
        data: [30, 45, 35, 50, 45, 60],
        color: Color(0xFF3B82F6),
      ),
      ChartDataset(
        label: 'Doanh thu',
        data: [20, 35, 30, 45, 55, 50],
        color: Color(0xFF10B981),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyAreaChart(
      data: salesData,
      height: 300,
      gradient: true,
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài Đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add area-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add area-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add area-chart
```

```bash [bun]
bunx galaxy-design@latest add area-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add area-chart
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **Vue**: `vue-echarts@^7.0.3`, `echarts@^5.5.1`
- **React**: `echarts-for-react@^3.0.2`, `echarts@^5.5.1`
- **Angular**: `ngx-echarts@^18.0.0`, `echarts@^5.5.1`
- **React Native**: `@wuba/react-native-echarts@^3.0.1`, `echarts@^5.5.1`, `@shopify/react-native-skia@^1.6.4`
- **Flutter**: `fl_chart@^0.68.0`

Không cần cài đặt thủ công!
:::

## Sử Dụng

### Biểu Đồ Vùng Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AreaChart } from '@/components/ui/charts'

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Doanh thu',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <AreaChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { AreaChart } from "@/components/ui/charts"

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Doanh thu',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <AreaChart data={data} height={300} />
}
```

:::

### Biểu Đồ Vùng Với Gradient

::: code-group

```vue [Vue]
<AreaChart :data="data" :height="300" gradient />
```

```tsx [React]
<AreaChart data={data} height={300} gradient />
```

:::

### Biểu Đồ Vùng Với Multiple Datasets

::: code-group

```vue [Vue]
<script setup lang="ts">
const multiData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: '2023', data: [100, 150, 200, 250], color: '#3b82f6' },
    { label: '2024', data: [120, 180, 220, 280], color: '#10b981' }
  ]
}
</script>

<template>
  <AreaChart :data="multiData" :height="300" />
</template>
```

```tsx [React]
const multiData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: '2023', data: [100, 150, 200, 250], color: '#3b82f6' },
    { label: '2024', data: [120, 180, 220, 280], color: '#10b981' }
  ]
}

<AreaChart data={multiData} height={300} />
```

:::

### Biểu Đồ Vùng Xếp Chồng

::: code-group

```vue [Vue]
<AreaChart :data="multiData" :height="300" stacked />
```

```tsx [React]
<AreaChart data={multiData} height={300} stacked />
```

:::

## API Reference

### Props

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Dữ liệu biểu đồ với labels và datasets |
| `height` | `number` | `300` | Chiều cao biểu đồ (pixels) |
| `width` | `number \| string` | `'100%'` | Chiều rộng biểu đồ |
| `theme` | `'light' \| 'dark'` | `'light'` | Chủ đề màu sắc |
| `gradient` | `boolean` | `false` | Hiển thị gradient fill |
| `stacked` | `boolean` | `false` | Xếp chồng các datasets |
| `smooth` | `boolean` | `true` | Đường cong mượt |
| `showLabel` | `boolean` | `true` | Hiển thị giá trị trên đường |
| `legend` | `boolean` | `true` | Hiển thị chú thích |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Vị trí chú thích |
| `animation` | `boolean` | `true` | Bật/tắt animation |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |
| `emptyText` | `string` | `'Không có dữ liệu'` | Thông báo khi không có dữ liệu |

### ChartData Interface

```typescript
interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string
  data: number[]
  color?: string
  backgroundColor?: string
}
```

## Use Cases

- **Theo Dõi Xu Hướng** - Hiển thị biến đổi theo thời gian
- **So Sánh Tích Lũy** - Trực quan hóa tổng tích lũy qua thời gian
- **Phân Tích Hiệu Suất** - Theo dõi KPIs và metrics
- **Dự Báo** - Hiển thị xu hướng và projections
- **Dashboard Tài Chính** - Hiển thị revenue, profit, costs

## Best Practices

### 1. **Sử Dụng Gradient Cho Tích Lũy**

```vue
<!-- ✅ Sử dụng gradient cho stacked area -->
<AreaChart :data="data" gradient stacked />
```

### 2. **Giới Hạn Số Lượng Datasets**

```vue
<!-- ✅ Tốt: 2-4 datasets -->
<AreaChart :data="data" />

<!-- ❌ Tránh: Quá nhiều datasets gây rối -->
<AreaChart :data="tooManyDatasets" />
```

### 3. **Sử Dụng Màu Sắc Phân Biệt**

```typescript
// ✅ Sử dụng màu sắc tương phản
const colors = ['#3b82f6', '#10b981', '#f59e0b']

// ❌ Tránh màu sắc quá giống nhau
const colors = ['#3b82f6', '#3a81f5', '#3980f4']
```

### 4. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-video">
    <AreaChart :data="data" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Vùng Với Smooth Line

::: code-group

```vue [Vue]
<AreaChart :data="data" :height="300" :smooth="true" />
```

```tsx [React]
<AreaChart data={data} height={300} smooth />
```

:::

### Biểu Đồ Vùng Với Custom Gradient

::: code-group

```vue [Vue]
<AreaChart :data="data" :height="300" :gradient="true" gradientFrom="#3b82f6" gradientTo="#ffffff" />
```

```tsx [React]
<AreaChart data={data} height={300} gradient gradientFrom="#3b82f6" gradientTo="#ffffff" />
```

:::

## Framework Support

| Framework | Thư Viện | Version |
|-----------|----------|---------|
| Vue | ECharts | ^5.5.1 |
| React | ECharts for React | ^3.0.2 |
| Angular | ngx-echarts | ^18.0.0 |
| React Native | @wuba/react-native-echarts | ^3.0.1 |
| Flutter | fl_chart | ^0.68.0 |

## Các Trang Liên Quan

- [Biểu đồ đường](/vi/charts/line-chart) - Hiển thị xu hướng theo thời gian
- [Biểu đồ cột](/vi/charts/bar-chart) - So sánh giá trị qua danh mục
- [Biểu đồ kết hợp](/vi/charts/mixed-chart) - Kết hợp nhiều loại biểu đồ
