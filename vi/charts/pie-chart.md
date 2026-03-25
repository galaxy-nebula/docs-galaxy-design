# Biểu Đồ Tròn

Hiển thị dữ liệu tỷ lệ dưới dạng biểu đồ tròn với nhãn và chú thích tùy chỉnh.

<ComponentPreview name="PieChartDemo">
  <template #preview>
    <DemoContainer>
      <PieChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { PieChart } from '@/components/ui/charts'

const marketShare = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Thị Phần',
      data: [35, 25, 20, 20],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    },
  ],
}
</script>

<template>
  <PieChart :data="marketShare" :height="300" />
</template>
```

```tsx [React]
import { PieChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Thị Phần',
      data: [35, 25, 20, 20],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    },
  ],
}

export default function App() {
  return <PieChart data={marketShare} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { PieChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PieChartComponent],
  template: `<ui-pie-chart [data]="marketShare" [height]="300" />`
})
export class AppComponent {
  marketShare = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Thị Phần',
        data: [35, 25, 20, 20],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  }
}
```

```tsx [React Native]
import { PieChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Thị Phần',
      data: [35, 25, 20, 20],
      backgroundColor: ['#007AFF', '#34C759', '#FF9500', '#FF3B30'],
    },
  ],
}

export default function App() {
  return (
    <View className="p-4">
      <PieChart data={marketShare} height={300} />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/pie_chart.dart';

class MyApp extends StatelessWidget {
  final marketShare = ChartData(
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      ChartDataset(
        label: 'Thị Phần',
        data: [35, 25, 20, 20],
        backgroundColor: [
          Color(0xFF3B82F6),
          Color(0xFF10B981),
          Color(0xFFF59E0B),
          Color(0xFFEF4444),
        ],
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyPieChart(
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
npx galaxy-design@latest add pie-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add pie-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add pie-chart
```

```bash [bun]
bunx galaxy-design@latest add pie-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add pie-chart
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

### Biểu Đồ Tròn Cơ Bản

Biểu đồ tròn đơn giản với một dataset:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { PieChart } from '@/components/ui/charts'

const data = {
  labels: ['Direct', 'Email', 'Social', 'Referral'],
  datasets: [{
    label: 'Nguồn Truy Cập',
    data: [30, 25, 20, 25],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
  }]
}
</script>

<template>
  <PieChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { PieChart } from "@/components/ui/charts"

const data = {
  labels: ['Direct', 'Email', 'Social', 'Referral'],
  datasets: [{
    label: 'Nguồn Truy Cập',
    data: [30, 25, 20, 25],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
  }]
}

export default function App() {
  return <PieChart data={data} height={300} />
}
```

:::

### Biểu Đồ Tròn Với Chú Thích Bên Ngoài

::: code-group

```vue [Vue]
<PieChart :data="data" :height="300" labelPosition="outside" />
```

```tsx [React]
<PieChart data={data} height={300} labelPosition="outside" />
```

:::

### Biểu Đồ Tròn Với Phần Trăm

::: code-group

```vue [Vue]
<PieChart :data="data" :height="300" :showPercentage="true" />
```

```tsx [React]
<PieChart data={data} height={300} showPercentage={true} />
```

:::

### Biểu Đồ Tròn Với Custom Colors

::: code-group

```vue [Vue]
<script setup lang="ts">
const customData = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge'],
  datasets: [{
    label: 'Trình Duyệt',
    data: [45, 25, 15, 15],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  }]
}
</script>

<template>
  <PieChart :data="customData" :height="300" />
</template>
```

```tsx [React]
const customData = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge'],
  datasets: [{
    label: 'Trình Duyệt',
    data: [45, 25, 15, 15],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  }]
}

<PieChart data={customData} height={300} />
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
| `legend` | `boolean` | `true` | Hiển thị/ẩn chú thích |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'right'` | Vị trí chú thích |
| `showPercentage` | `boolean` | `true` | Hiển thị phần trăm trong nhãn |
| `labelPosition` | `'inside' \| 'outside' \| 'center'` | `'outside'` | Vị trí nhãn |
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
  backgroundColor?: string[]
}
```

## Use Cases

- **Phân Tích Thị Phần** - Hiển thị tỷ lệ thị trường
- **Ngân Sách Phân Bổ** - Trực quan hóa chi tiêu hoặc phân bổ nguồn lực
- **Kết Quả Khảo Sát** - Hiển thị dữ liệu khảo sát hoặc poll
- **Thành Phần Dữ Liệu** - Hiển thị breakdown của tổng số
- **KPI Dashboard** - Hiển thị số liệu quan trọng với tác động trực quan

## Best Practices

### 1. **Giới Hạn Số Lượng Phần**

```vue
<!-- ✅ Tốt: 3-6 phần -->
<PieChart :data="data" />

<!-- ❌ Tránh: Quá nhiều phần gây khó đọc -->
<PieChart :data="tooManySegments" />
```

### 2. **Sử Dụng Màu Sắc Tương Phản**

```typescript
// ✅ Sử dụng palette có sẵn
const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

// ❌ Tránh màu sắc quá giống nhau
const colors = ['#3b82f6', '#3a81f5', '#3980f4']
```

### 3. **Sắp Xếp Theo Thứ Tự**

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
    <PieChart :data="data" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Tròn Với Center Label

::: code-group

```vue [Vue]
<PieChart :data="data" :height="300" labelPosition="center" />
```

```tsx [React]
<PieChart data={data} height={300} labelPosition="center" />
```

:::

### Biểu Đồ Tròn Với Legend Bottom

::: code-group

```vue [Vue]
<PieChart :data="data" :height="300" legendPosition="bottom" />
```

```tsx [React]
<PieChart data={data} height={300} legendPosition="bottom" />
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

- [Biểu đồ bánh rán](/vi/charts/donut-chart) - Biến thể của biểu đồ tròn với tâm rỗng
- [Biểu đồ vùng](/vi/charts/area-chart) - Trực quan hóa tích lũy
- [Tổng quan biểu đồ](/vi/charts/overview) - Giới thiệu tất cả các loại biểu đồ
