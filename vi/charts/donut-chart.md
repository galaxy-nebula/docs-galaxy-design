# Biểu Đồ Bánh Rán

Hiển thị dữ liệu tỷ lệ dưới dạng biểu đồ bánh rán với tâm rỗng, hoàn hảo cho dashboards và trực quan hóa dữ liệu.

<ComponentPreview name="DonutChartDemo">
  <template #preview>
    <DemoContainer>
      <DonutChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DonutChart } from '@/components/ui/charts'

const marketShare = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [{
    label: 'Sử Dụng Trình Duyệt',
    data: [45, 25, 15, 10, 5],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  }],
}
</script>

<template>
  <DonutChart :data="marketShare" :height="300" />
</template>
```

```tsx [React]
import { DonutChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [{
    label: 'Sử Dụng Trình Duyệt',
    data: [45, 25, 15, 10, 5],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  }],
}

export default function App() {
  return <DonutChart data={marketShare} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DonutChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DonutChartComponent],
  template: `<ui-donut-chart [data]="marketShare" [height]="300" />`
})
export class AppComponent {
  marketShare = {
    labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
    datasets: [{
      label: 'Sử Dụng Trình Duyệt',
      data: [45, 25, 15, 10, 5],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
    }],
  }
}
```

```tsx [React Native]
import { DonutChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [{
    label: 'Sử Dụng Trình Duyệt',
    data: [45, 25, 15, 10, 5],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  }],
}

export default function App() {
  return <DonutChart data={marketShare} height={300} />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:galaxy_ui/components/charts.dart';

class MyApp extends StatelessWidget {
  final marketShare = ChartData(
    labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
    datasets: [
      ChartDataset(
        label: 'Sử Dụng Trình Duyệt',
        data: [45, 25, 15, 10, 5],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyDonutChart(
      data: marketShare,
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
npx @galaxy-stack/nebula-cli@latest add donut-chart
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add donut-chart
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add donut-chart
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add donut-chart
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **Vue**: `vue-echarts@^7.0.3`, `echarts@^5.5.1`
- **React**: `echarts-for-react@^3.0.2`, `echarts@^5.5.1`
- **Angular**: `ngx-echarts@^18.0.0`, `echarts@^5.5.1`
- **React Native**: `@wuba/react-native-echarts@^3.0.1`, `echarts@^5.5.1`, `@shopify/react-native-skia@^1.6.4`
- **Flutter**: `fl_chart@^0.68.0`
:::

## Tính Năng

- 🍩 **Tâm Rỗng** - Hình dạng bánh rán đặc trưng với bán kính trong tùy chỉnh
- 📊 **Trực Quan Hóa Dữ Liệu** - Hoàn hảo để hiển thị tỷ lệ và phần trăm
- 🎨 **Tùy Chỉnh** - Kiểm soát hoàn toàn màu sắc, nhãn và kiểu
- 📱 **Responsive** - Thích ứng với mọi kích thước màn hình
- 🌓 **Dark Mode** - Hỗ trợ theme tối có sẵn
- ⚡ **Hiệu Suất** - Rendering tối ưu cho tương tác mượt mà

## Use Cases

- **Dashboard KPIs** - Hiển thị số liệu quan trọng với tác động trực quan
- **Thị Phần** - Hiển thị phân bổ qua các danh mục
- **Phân Bổ Ngân Sách** - Trực quan hóa chi tiêu hoặc phân bổ nguồn lực
- **Theo Dõi Tiến Độ** - Hiển thị trạng thái hoàn thành
- **Kết Quả Khảo Sát** - Hiển thị dữ liệu khảo sát hoặc poll

## API Reference

### Props

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Dữ liệu biểu đồ với labels và datasets |
| `height` | `number` | `300` | Chiều cao biểu đồ (pixels) |
| `width` | `number \| string` | `"100%"` | Chiều rộng biểu đồ |
| `theme` | `"light" \| "dark"` | `"light"` | Chủ đề màu sắc |
| `legend` | `boolean` | `true` | Hiển thị/ẩn chú thích |
| `legendPosition` | `"top" \| "bottom" \| "left" \| "right"` | `"right"` | Vị trí chú thích |
| `innerRadius` | `number` | `50` | Bán kính trong phần trăm (0-100) |
| `outerRadius` | `number` | `70` | Bán kính ngoài phần trăm (0-100) |
| `showPercentage` | `boolean` | `true` | Hiển thị phần trăm trong nhãn |
| `labelPosition` | `"inside" \| "outside" \| "center"` | `"outside"` | Vị trí nhãn |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |
| `emptyText` | `string` | `"Không có dữ liệu"` | Thông báo khi không có dữ liệu |

### ChartData Interface

```typescript
interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string
  data: number[]
  backgroundColor?: string[]
}
```

## Sử Dụng

### Biểu Đồ Bánh Rán Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DonutChart } from '@/components/ui/charts'

const data = {
  labels: ['Mobile', 'Desktop', 'Tablet'],
  datasets: [{
    label: 'Thiết Bị',
    data: [55, 35, 10],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
  }]
}
</script>

<template>
  <DonutChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { DonutChart } from "@/components/ui/charts"

const data = {
  labels: ['Mobile', 'Desktop', 'Tablet'],
  datasets: [{
    label: 'Thiết Bị',
    data: [55, 35, 10],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
  }]
}

export default function App() {
  return <DonutChart data={data} height={300} />
}
```

:::

### Tùy Chỉnh Bán Kính

::: code-group

```vue [Vue]
<DonutChart :data="data" :height="300" :innerRadius="60" :outerRadius="80" />
```

```tsx [React]
<DonutChart data={data} height={300} innerRadius={60} outerRadius={80} />
```

:::

### Biểu Đồ Với Center Label

::: code-group

```vue [Vue]
<DonutChart :data="data" :height="300" labelPosition="center" />
```

```tsx [React]
<DonutChart data={data} height={300} labelPosition="center" />
```

:::

### Biểu Đồ Với Multiple Datasets

::: code-group

```vue [Vue]
<script setup lang="ts">
const multiData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: '2023', data: [30, 25, 20, 25], backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'] },
    { label: '2024', data: [35, 30, 20, 15], backgroundColor: ['#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'] }
  ]
}
</script>

<template>
  <DonutChart :data="multiData" :height="300" />
</template>
```

:::

## Best Practices

### 1. **Giới Hạn Số Lượng Phần**

```vue
<!-- ✅ Tốt: 3-6 phần -->
<DonutChart :data="data" />

<!-- ❌ Tránh: Quá nhiều phần gây khó đọc -->
<DonutChart :data="tooManySegments" />
```

### 2. **Sử Dụng Màu Sắc Tương Phản**

```typescript
// ✅ Sử dụng palette có sẵn
const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

// ❌ Tránh màu sắc quá giống nhau
const colors = ['#3b82f6', '#3a81f5', '#3980f4']
```

### 3. **Sắp Xếp Theo Thứ Tự Giảm Dần**

```typescript
// ✅ Sắp xếp giảm dần để dễ đọc
const data = {
  labels: ['Largest', 'Medium', 'Small', 'Smallest'],
  datasets: [{ data: [50, 30, 15, 5] }]
}
```

### 4. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-square">
    <DonutChart :data="data" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Với Legend Top

::: code-group

```vue [Vue]
<DonutChart :data="data" :height="300" legendPosition="top" />
```

```tsx [React]
<DonutChart data={data} height={300} legendPosition="top" />
```

:::

### Biểu Đồ Với Custom Radius

::: code-group

```vue [Vue]
<DonutChart :data="data" :height="300" :innerRadius="40" :outerRadius="75" />
```

```tsx [React]
<DonutChart data={data} height={300} innerRadius={40} outerRadius={75} />
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

- [Biểu đồ tròn](/vi/ch