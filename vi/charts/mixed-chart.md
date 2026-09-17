# Biểu Đồ Kết Hợp

Kết hợp nhiều loại biểu đồ (đường, cột, vùng) trong một trực quan hóa mạnh mẽ để phân tích dữ liệu đa chiều.

<ComponentPreview name="MixedChartDemo">
  <template #preview>
    <DemoContainer>
      <MixedChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { MixedChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh Thu',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Doanh Số',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#10b981',
    },
    {
      label: 'Lợi Nhuận',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}
</script>

<template>
  <MixedChart :data="salesData" :height="350" />
</template>
```

```tsx [React]
import { MixedChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh Thu',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Doanh Số',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#10b981',
    },
    {
      label: 'Lợi Nhuận',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}

export default function App() {
  return <MixedChart data={salesData} height={350} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MixedChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MixedChartComponent],
  template: `<ui-mixed-chart [data]="salesData" [height]="350" />`
})
export class AppComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Doanh Thu',
        data: [30, 45, 35, 50, 45, 60],
        type: 'line',
        color: '#3b82f6',
      },
      {
        label: 'Doanh Số',
        data: [20, 35, 30, 45, 55, 50],
        type: 'bar',
        color: '#10b981',
      },
      {
        label: 'Lợi Nhuận',
        data: [15, 25, 22, 30, 35, 40],
        type: 'area',
        color: '#f59e0b',
      },
    ],
  }
}
```

```tsx [React Native]
import { MixedChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh Thu',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#007AFF',
    },
    {
      label: 'Doanh Số',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#34C759',
    },
    {
      label: 'Lợi Nhuận',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#FF9500',
    },
  ],
}

export default function App() {
  return <MixedChart data={salesData} height={350} />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/mixed_chart.dart';

class MyApp extends StatelessWidget {
  final salesData = ChartData(
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      ChartDataset(
        label: 'Doanh Thu',
        data: [30, 45, 35, 50, 45, 60],
        type: 'line',
        color: Color(0xFF3B82F6),
      ),
      ChartDataset(
        label: 'Doanh Số',
        data: [20, 35, 30, 45, 55, 50],
        type: 'bar',
        color: Color(0xFF10B981),
      ),
      ChartDataset(
        label: 'Lợi Nhuận',
        data: [15, 25, 22, 30, 35, 40],
        type: 'area',
        color: Color(0xFFF59E0B),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyMixedChart(
      data: salesData,
      height: 350,
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
npx @galaxy-stack/design-cli@latest add mixed-chart
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add mixed-chart
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add mixed-chart
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add mixed-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add mixed-chart
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

### Biểu Đồ Kết Hợp Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { MixedChart } from '@/components/ui/charts'

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: 'Doanh Thu', data: [100, 150, 200, 250], type: 'line', color: '#3b82f6' },
    { label: 'Chi Phí', data: [80, 100, 120, 150], type: 'bar', color: '#10b981' }
  ]
}
</script>

<template>
  <MixedChart :data="data" :height="350" />
</template>
```

```tsx [React]
import { MixedChart } from "@/components/ui/charts"

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: 'Doanh Thu', data: [100, 150, 200, 250], type: 'line', color: '#3b82f6' },
    { label: 'Chi Phí', data: [80, 100, 120, 150], type: 'bar', color: '#10b981' }
  ]
}

export default function App() {
  return <MixedChart data={data} height={350} />
}
```

:::

### Biểu Đồ Kết Hợp Line + Bar

::: code-group

```vue [Vue]
<script setup lang="ts">
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'Lượng Mưa', data: [50, 60, 70, 80, 90], type: 'bar', color: '#3b82f6' },
    { label: 'Nhiệt Độ', data: [20, 22, 25, 28, 30], type: 'line', color: '#f59e0b' }
  ]
}
</script>

<template>
  <MixedChart :data="data" :height="350" />
</template>
```

```tsx [React]
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'Lượng Mưa', data: [50, 60, 70, 80, 90], type: 'bar', color: '#3b82f6' },
    { label: 'Nhiệt Độ', data: [20, 22, 25, 28, 30], type: 'line', color: '#f59e0b' }
  ]
}

<MixedChart data={data} height={350} />
```

:::

### Biểu Đồ Kết Hợp Line + Bar + Area

::: code-group

```vue [Vue]
<script setup lang="ts">
const data = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    { label: 'Users', data: [1000, 1500, 2000, 2500, 3000], type: 'bar', color: '#3b82f6' },
    { label: 'Revenue', data: [500, 750, 1000, 1250, 1500], type: 'line', color: '#10b981' },
    { label: 'Profit', data: [200, 300, 400, 500, 600], type: 'area', color: '#f59e0b' }
  ]
}
</script>

<template>
  <MixedChart :data="data" :height="350" />
</template>
```

```tsx [React]
const data = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    { label: 'Users', data: [1000, 1500, 2000, 2500, 3000], type: 'bar', color: '#3b82f6' },
    { label: 'Revenue', data: [500, 750, 1000, 1250, 1500], type: 'line', color: '#10b981' },
    { label: 'Profit', data: [200, 300, 400, 500, 600], type: 'area', color: '#f59e0b' }
  ]
}

<MixedChart data={data} height={350} />
```

:::

### Biểu Đồ Với Dual Y-Axis

::: code-group

```vue [Vue]
<MixedChart
  :data="data"
  :height="350"
  :dualYAxis="true"
  yAxisLeftLabel="Doanh Thu ($)"
  yAxisRightLabel="Tăng Trưởng (%)"
/>
```

```tsx [React]
<MixedChart
  data={data}
  height={350}
  dualYAxis
  yAxisLeftLabel="Doanh Thu ($)"
  yAxisRightLabel="Tăng Trưởng (%)"
/>
```

:::

## API Reference

### Props

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Dữ liệu biểu đồ với labels và datasets |
| `height` | `number` | `350` | Chiều cao biểu đồ (pixels) |
| `width` | `number \| string` | `'100%'` | Chiều rộng biểu đồ |
| `theme` | `'light' \| 'dark'` | `'light'` | Chủ đề màu sắc |
| `dualYAxis` | `boolean` | `false` | Hiển thị hai trục Y |
| `yAxisLeftLabel` | `string` | `''` | Nhãn trục Y trái |
| `yAxisRightLabel` | `string` | `''` | Nhãn trục Y phải |
| `showLabel` | `boolean` | `true` | Hiển thị giá trị trên biểu đồ |
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
  type: 'line' | 'bar' | 'area'
  color?: string
  yAxisIndex?: number // 0 for left, 1 for right
}
```

## Use Cases

- **Dashboard Tài Chính** - Hiển thị revenue, costs, profit cùng lúc
- **Phân Tích Hiệu Suất** - So sánh multiple metrics
- **Theo Dõi KPIs** - Trực quan hóa nhiều chỉ số quan trọng
- **Báo Cáo Bán Hàng** - Kết hợp sales volume và revenue
- **Phân Tích Thời Tiết** - Hiển thị temperature và precipitation

## Best Practices

### 1. **Giới Hạn Số Lượng Datasets**

```vue
<!-- ✅ Tốt: 2-4 datasets -->
<MixedChart :data="data" />

<!-- ❌ Tránh: Quá nhiều datasets gây rối -->
<MixedChart :data="tooManyDatasets" />
```

### 2. **Sử Dụng Dual Y-Axis Cho Different Scales**

```vue
<!-- ✅ Sử dụng dual axis cho khác scale -->
<MixedChart
  :data="data"
  :dualYAxis="true"
  yAxisLeftLabel="Doanh Thu ($)"
  yAxisRightLabel="Tăng Trưởng (%)"
/>
```

### 3. **Phân Biệt Chart Types Rõ Ràng**

```typescript
// ✅ Sử dụng chart types phân biệt
const datasets = [
  { label: 'Revenue', type: 'line', color: '#3b82f6' },
  { label: 'Costs', type: 'bar', color: '#10b981' },
  { label: 'Profit', type: 'area', color: '#f59e0b' }
]

// ❌ Tránh cùng type
const datasets = [
  { label: 'Revenue', type: 'line' },
  { label: 'Costs', type: 'line' },
  { label: 'Profit', type: 'line' }
]
```

### 4. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-video">
    <MixedChart :data="data" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Với Smooth Line

::: code-group

```vue [Vue]
<MixedChart :data="data" :height="350" :smooth="true" />
```

```tsx [React]
<MixedChart data={data} height={350} smooth />
```

:::

### Biểu Đồ Với Stacked Bar

::: code-group

```vue [Vue]
<MixedChart :data="data" :height="350" :stacked="true" />
```

```tsx [React]
<MixedChart data={data} height={350} stacked />
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
- [Biểu đồ cột](/vi/ch