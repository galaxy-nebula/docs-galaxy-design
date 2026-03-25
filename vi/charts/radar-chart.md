# Biểu Đồ Radar

Hiển thị so sánh dữ liệu đa chiều trên lưới hình tròn với hình dạng và tùy chọn tô tùy chỉnh.

<ComponentPreview name="RadarChartDemo">
  <template #preview>
    <DemoContainer>
      <RadarChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { RadarChart } from '@/components/ui/charts'

const skillsData = {
  labels: ['Tốc Độ', 'Độ Tin Cậy', 'Tiện Nghi', 'An Toàn', 'Hiệu Quả'],
  datasets: [
    {
      label: 'Sản Phẩm A',
      data: [80, 90, 70, 85, 75],
      color: '#3b82f6',
    },
    {
      label: 'Sản Phẩm B',
      data: [70, 75, 85, 80, 90],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <RadarChart :data="skillsData" :height="300" />
</template>
```

```tsx [React]
import { RadarChart } from "@/components/ui/charts"

const skillsData = {
  labels: ['Tốc Độ', 'Độ Tin Cậy', 'Tiện Nghi', 'An Toàn', 'Hiệu Quả'],
  datasets: [
    {
      label: 'Sản Phẩm A',
      data: [80, 90, 70, 85, 75],
      color: '#3b82f6',
    },
    {
      label: 'Sản Phẩm B',
      data: [70, 75, 85, 80, 90],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return <RadarChart data={skillsData} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { RadarChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadarChartComponent],
  template: `<ui-radar-chart [data]="skillsData" [height]="300" />`
})
export class AppComponent {
  skillsData = {
    labels: ['Tốc Độ', 'Độ Tin Cậy', 'Tiện Nghi', 'An Toàn', 'Hiệu Quả'],
    datasets: [
      {
        label: 'Sản Phẩm A',
        data: [80, 90, 70, 85, 75],
        color: '#3b82f6',
      },
      {
        label: 'Sản Phẩm B',
        data: [70, 75, 85, 80, 90],
        color: '#10b981',
      },
    ],
  }
}
```

```tsx [React Native]
import { RadarChart } from "@/components/ui/charts"

const skillsData = {
  labels: ['Tốc Độ', 'Độ Tin Cậy', 'Tiện Nghi', 'An Toàn', 'Hiệu Quả'],
  datasets: [
    {
      label: 'Sản Phẩm A',
      data: [80, 90, 70, 85, 75],
      color: '#007AFF',
    },
    {
      label: 'Sản Phẩm B',
      data: [70, 75, 85, 80, 90],
      color: '#34C759',
    },
  ],
}

export default function App() {
  return <RadarChart data={skillsData} height={300} />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/radar_chart.dart';

class MyApp extends StatelessWidget {
  final skillsData = ChartData(
    labels: ['Tốc Độ', 'Độ Tin Cậy', 'Tiện Nghi', 'An Toàn', 'Hiệu Quả'],
    datasets: [
      ChartDataset(
        label: 'Sản Phẩm A',
        data: [80, 90, 70, 85, 75],
        color: Color(0xFF3B82F6),
      ),
      ChartDataset(
        label: 'Sản Phẩm B',
        data: [70, 75, 85, 80, 90],
        color: Color(0xFF10B981),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyRadarChart(
      data: skillsData,
      height: 300,
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
npx galaxy-design@latest add radar-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add radar-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add radar-chart
```

```bash [bun]
bunx galaxy-design@latest add radar-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add radar-chart
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

### Biểu Đồ Radar Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { RadarChart } from '@/components/ui/charts'

const data = {
  labels: ['Kỹ Năng 1', 'Kỹ Năng 2', 'Kỹ Năng 3', 'Kỹ Năng 4', 'Kỹ Năng 5'],
  datasets: [{
    label: 'Nhân Viên A',
    data: [80, 90, 70, 85, 75],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <RadarChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { RadarChart } from "@/components/ui/charts"

const data = {
  labels: ['Kỹ Năng 1', 'Kỹ Năng 2', 'Kỹ Năng 3', 'Kỹ Năng 4', 'Kỹ Năng 5'],
  datasets: [{
    label: 'Nhân Viên A',
    data: [80, 90, 70, 85, 75],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <RadarChart data={data} height={300} />
}
```

:::

### Biểu Đồ Radar Với Multiple Datasets

::: code-group

```vue [Vue]
<script setup lang="ts">
const comparisonData = {
  labels: ['Tốc Độ', 'Chất Lượng', 'Giá Cả', 'Dịch Vụ', 'Thương Hiệu'],
  datasets: [
    { label: 'Đối Thủ A', data: [80, 70, 90, 75, 85], color: '#3b82f6' },
    { label: 'Đối Thủ B', data: [70, 85, 75, 90, 80], color: '#10b981' },
    { label: 'Chúng Tôi', data: [90, 85, 80, 85, 75], color: '#f59e0b' }
  ]
}
</script>

<template>
  <RadarChart :data="comparisonData" :height="300" />
</template>
```

```tsx [React]
const comparisonData = {
  labels: ['Tốc Độ', 'Chất Lượng', 'Giá Cả', 'Dịch Vụ', 'Thương Hiệu'],
  datasets: [
    { label: 'Đối Thủ A', data: [80, 70, 90, 75, 85], color: '#3b82f6' },
    { label: 'Đối Thủ B', data: [70, 85, 75, 90, 80], color: '#10b981' },
    { label: 'Chúng Tôi', data: [90, 85, 80, 85, 75], color: '#f59e0b' }
  ]
}

<RadarChart data={comparisonData} height={300} />
```

:::

### Biểu Đồ Radar Với Filled Area

::: code-group

```vue [Vue]
<RadarChart :data="data" :height="300" :filled="true" />
```

```tsx [React]
<RadarChart data={data} height={300} filled />
```

:::

### Biểu Đồ Radar Với Custom Shape

::: code-group

```vue [Vue]
<RadarChart :data="data" :height="300" shape="circle" />
```

```tsx [React]
<RadarChart data={data} height={300} shape="circle" />
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
| `filled` | `boolean` | `true` | Tô vùng bên trong shape |
| `shape` | `'polygon' \| 'circle'` | `'polygon'` | Hình dạng lưới |
| `showLabel` | `boolean` | `true` | Hiển thị giá trị trên điểm |
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

- **So Sánh Sản Phẩm** - So sánh nhiều sản phẩm qua các tiêu chí
- **Đánh Giá Kỹ Năng** - Hiển thị competency matrix
- **Phân Tích Đối Thủ** - So sánh competitive advantages
- **Performance Review** - Đánh giá hiệu suất nhân viên
- **Product Features** - So sánh tính năng sản phẩm

## Best Practices

### 1. **Giới Hạn Số Lượng Axes**

```vue
<!-- ✅ Tốt: 4-8 axes -->
<RadarChart :data="data" />

<!-- ❌ Tránh: Quá nhiều axes gây rối -->
<RadarChart :data="tooManyAxes" />
```

### 2. **Sử Dụng Màu Sắc Phân Biệt**

```typescript
// ✅ Sử dụng palette có sẵn
const colors = ['#3b82f6', '#10b981', '#f59e0b']

// ❌ Tránh màu sắc quá giống nhau
const colors = ['#3b82f6', '#3a81f5', '#3980f4']
```

### 3. **Sắp Xếp Labels Hợp Lý**

```typescript
// ✅ Sắp xếp theo thứ tự logic
const labels = ['Chất Lượng', 'Giá Cả', 'Dịch Vụ', 'Tốc Độ']

// ❌ Tránh sắp xếp ngẫu nhiên
const labels = ['Dịch Vụ', 'Chất Lượng', 'Tốc Độ', 'Giá Cả']
```

### 4. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-square">
    <RadarChart :data="data" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Radar Với Circle Shape

::: code-group

```vue [Vue]
<RadarChart :data="data" :height="300" shape="circle" :filled="true" />
```

```tsx [React]
<RadarChart data={data} height={300} shape="circle" filled />
```

:::

### Biểu Đồ Radar Không Filled

::: code-group

```vue [Vue]
<RadarChart :data="data" :height="300" :filled="false" />
```

```tsx [React]
<RadarChart data={data} height={300} filled={false} />
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

- [Biểu đồ tròn](/vi/charts/pie-chart) - Hiển thị tỷ lệ phần trăm
- [Biểu đồ phân tán](/vi/charts/scatter-chart) - Phân tích phân bố
- [Biểu đồ đo](/vi/charts/gauge-chart) - Đồng hồ đo số liệu
