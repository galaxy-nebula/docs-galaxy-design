# Biểu Đồ Cột

Hiển thị dữ liệu dưới dạng cột dọc hoặc ngang với hỗ trợ bố cục xếp chồng và nhóm.

<ComponentPreview name="BarChartDemo">
  <template #preview>
    <DemoContainer>
      <BarChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { BarChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh số 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#3b82f6',
    },
  ],
}
</script>

<template>
  <BarChart :data="salesData" :height="300" />
</template>
```

```tsx [React]
import { BarChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh số 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#3b82f6',
    },
  ],
}

export default function App() {
  return <BarChart data={salesData} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { BarChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarChartComponent],
  template: `<ui-bar-chart [data]="salesData" [height]="300" />`
})
export class AppComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Doanh số 2024',
        data: [30, 45, 35, 50, 49, 60],
        color: '#3b82f6',
      },
    ],
  }
}
```

```tsx [React Native]
import { BarChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Doanh số 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#007AFF',
    },
  ],
}

export default function App() {
  return (
    <View className="p-4">
      <BarChart data={salesData} height={300} />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/bar_chart.dart';

class MyApp extends StatelessWidget {
  final salesData = ChartData(
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      ChartDataset(
        label: 'Doanh số 2024',
        data: [30, 45, 35, 50, 49, 60],
        color: Color(0xFF3B82F6),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyBarChart(
      data: salesData,
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
npx galaxy-design@latest add bar-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add bar-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add bar-chart
```

```bash [bun]
bunx galaxy-design@latest add bar-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add bar-chart
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

### Biểu Đồ Cột Cơ Bản

Biểu đồ cột dọc đơn giản với một dataset:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { BarChart } from '@/components/ui/charts'

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
  <BarChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { BarChart } from "@/components/ui/charts"

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Doanh thu',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <BarChart data={data} height={300} />
}
```

:::

### Biểu Đồ Cột Ngang

Sử dụng `orientation="horizontal"` để hiển thị cột ngang:

::: code-group

```vue [Vue]
<BarChart :data="data" :height="300" orientation="horizontal" />
```

```tsx [React]
<BarChart data={data} height={300} orientation="horizontal" />
```

:::

### Biểu Đồ Cột Nhóm

So sánh nhiều dataset song song:

::: code-group

```vue [Vue]
<script setup lang="ts">
const groupedData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: '2023', data: [100, 150, 200, 250], color: '#3b82f6' },
    { label: '2024', data: [120, 180, 220, 280], color: '#10b981' }
  ]
}
</script>

<template>
  <BarChart :data="groupedData" :height="300" />
</template>
```

```tsx [React]
const groupedData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: '2023', data: [100, 150, 200, 250], color: '#3b82f6' },
    { label: '2024', data: [120, 180, 220, 280], color: '#10b981' }
  ]
}

<BarChart data={groupedData} height={300} />
```

:::

### Biểu Đồ Cột Xếp Chồng

Sử dụng `stacked` để xếp chồng các dataset:

::: code-group

```vue [Vue]
<BarChart :data="groupedData" :height="300" stacked />
```

```tsx [React]
<BarChart data={groupedData} height={300} stacked />
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
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Hướng cột |
| `stacked` | `boolean` | `false` | Xếp chồng các dataset |
| `rounded` | `boolean` | `true` | Bo góc cột |
| `showLabel` | `boolean` | `true` | Hiển thị giá trị trên cột |
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

- **Dashboard KPIs** - Hiển thị số liệu quan trọng với tác động trực quan
- **So Sánh Theo Thời Gian** - Theo dõi xu hướng qua các khoảng thời gian
- **Phân Tích Danh Mục** - So sánh giá trị qua các danh mục
- **Theo Dõi Tiến Độ** - Hiển thị trạng thái hoàn thành
- **Kết Quả Khảo Sát** - Hiển thị dữ liệu khảo sát

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Cột Với Target Line

::: code-group

```vue [Vue]
<script setup lang="ts">
const targetData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: 'Actual', data: [95, 110, 125, 140], color: '#3b82f6' },
    { label: 'Target', data: [100, 120, 130, 150], color: '#10b981', type: 'line' }
  ]
}
</script>

<template>
  <BarChart :data="targetData" :height="300" />
</template>
```

:::

### Biểu Đồ Cột 100% Stacked

::: code-group

```vue [Vue]
<BarChart :data="groupedData" :height="300" stacked="100%" />
```

```tsx [React]
<BarChart data={groupedData} height={300} stacked="100%" />
```

:::

## Best Practices

### 1. **Giới Hạn Số Lượng Cột**

```vue
<!-- ✅ Tốt: 5-10 cột -->
<BarChart :data="data" />

<!-- ❌ Tránh: Quá nhiều cột gây khó đọc -->
<BarChart :data="tooManyData" />
```

### 2. **Sử Dụng Màu Sắc Phù Hợp**

```typescript
// ✅ Sử dụng palette có sẵn
const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

// ❌ Tránh màu sắc không tương phản
const colors = ['#000000', '#0a0a0a', '#141414']
```

### 3. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-video">
    <BarChart :data="data" />
  </div>
</template>
```

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
- [Biểu đồ vùng](/vi/charts/area-chart) - Trực quan hóa tích lũy
- [Biểu đồ kết hợp](/vi/charts/mixed-chart) - Kết hợp nhiều loại biểu đồ
