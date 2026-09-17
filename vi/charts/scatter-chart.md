# Biểu Đồ Phân Tán

Hiển thị phân bố và phân tích tương quan với biểu đồ phân tán và biểu đồ bong bóng tùy chỉnh.

<ComponentPreview name="ScatterChartDemo">
  <template #preview>
    <DemoContainer>
      <ScatterChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScatterChart } from '@/components/ui/charts'

const scatterData = {
  datasets: [
    {
      label: 'Nhóm A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#3b82f6',
    },
    {
      label: 'Nhóm B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <ScatterChart
    :data="scatterData"
    :height="300"
    xAxisLabel="Trục X"
    yAxisLabel="Trục Y"
  />
</template>
```

```tsx [React]
import { ScatterChart } from "@/components/ui/charts"

const scatterData = {
  datasets: [
    {
      label: 'Nhóm A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#3b82f6',
    },
    {
      label: 'Nhóm B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return (
    <ScatterChart
      data={scatterData}
      height={300}
      xAxisLabel="Trục X"
      yAxisLabel="Trục Y"
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ScatterChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScatterChartComponent],
  template: `
    <ui-scatter-chart
      [data]="scatterData"
      [height]="300"
      xAxisLabel="Trục X"
      yAxisLabel="Trục Y"
    />
  `
})
export class AppComponent {
  scatterData = {
    datasets: [
      {
        label: 'Nhóm A',
        data: [
          [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
          [35, 45], [40, 50], [45, 55], [50, 60]
        ],
        color: '#3b82f6',
      },
      {
        label: 'Nhóm B',
        data: [
          [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
          [38, 25], [42, 20], [48, 15], [52, 10]
        ],
        color: '#10b981',
      },
    ],
  }
}
```

```tsx [React Native]
import { ScatterChart } from "@/components/ui/charts"

const scatterData = {
  datasets: [
    {
      label: 'Nhóm A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#007AFF',
    },
    {
      label: 'Nhóm B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#34C759',
    },
  ],
}

export default function App() {
  return (
    <ScatterChart
      data={scatterData}
      height={300}
      xAxisLabel="Trục X"
      yAxisLabel="Trục Y"
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/scatter_chart.dart';

class MyApp extends StatelessWidget {
  final scatterData = ChartData(
    datasets: [
      ChartDataset(
        label: 'Nhóm A',
        data: [
          [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
          [35, 45], [40, 50], [45, 55], [50, 60]
        ],
        color: Color(0xFF3B82F6),
      ),
      ChartDataset(
        label: 'Nhóm B',
        data: [
          [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
          [38, 25], [42, 20], [48, 15], [52, 10]
        ],
        color: Color(0xFF10B981),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyScatterChart(
      data: scatterData,
      height: 300,
      xAxisLabel: 'Trục X',
      yAxisLabel: 'Trục Y',
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
npx @galaxy-stack/design-cli@latest add scatter-chart
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add scatter-chart
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add scatter-chart
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add scatter-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add scatter-chart
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

### Biểu Đồ Phân Tán Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScatterChart } from '@/components/ui/charts'

const data = {
  datasets: [{
    label: 'Dữ Liệu',
    data: [
      [10, 20], [15, 25], [20, 30], [25, 35], [30, 40]
    ],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <ScatterChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { ScatterChart } from "@/components/ui/charts"

const data = {
  datasets: [{
    label: 'Dữ Liệu',
    data: [
      [10, 20], [15, 25], [20, 30], [25, 35], [30, 40]
    ],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <ScatterChart data={data} height={300} />
}
```

:::

### Biểu Đồ Phân Tán Với Multiple Datasets

::: code-group

```vue [Vue]
<script setup lang="ts">
const multiData = {
  datasets: [
    { label: 'Nhóm A', data: [[10, 20], [15, 25], [20, 30]], color: '#3b82f6' },
    { label: 'Nhóm B', data: [[12, 50], [18, 45], [22, 40]], color: '#10b981' },
    { label: 'Nhóm C', data: [[25, 35], [30, 30], [35, 25]], color: '#f59e0b' }
  ]
}
</script>

<template>
  <ScatterChart :data="multiData" :height="300" />
</template>
```

```tsx [React]
const multiData = {
  datasets: [
    { label: 'Nhóm A', data: [[10, 20], [15, 25], [20, 30]], color: '#3b82f6' },
    { label: 'Nhóm B', data: [[12, 50], [18, 45], [22, 40]], color: '#10b981' },
    { label: 'Nhóm C', data: [[25, 35], [30, 30], [35, 25]], color: '#f59e0b' }
  ]
}

<ScatterChart data={multiData} height={300} />
```

:::

### Biểu Đồ Bong Bóng (Bubble Chart)

::: code-group

```vue [Vue]
<script setup lang="ts">
const bubbleData = {
  datasets: [{
    label: 'Bong Bóng',
    data: [
      [10, 20, 15], [15, 25, 20], [20, 30, 25], [25, 35, 30]
    ],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <ScatterChart :data="bubbleData" :height="300" :bubble="true" />
</template>
```

```tsx [React]
const bubbleData = {
  datasets: [{
    label: 'Bong Bóng',
    data: [
      [10, 20, 15], [15, 25, 20], [20, 30, 25], [25, 35, 30]
    ],
    color: '#3b82f6'
  }]
}

<ScatterChart data={bubbleData} height={300} bubble />
```

:::

### Biểu Đồ Với Custom Axes

::: code-group

```vue [Vue]
<ScatterChart
  :data="data"
  :height="300"
  xAxisLabel="Doanh Thu (triệu)"
  yAxisLabel="Lợi Nhuận (%)"
  :xMin="0"
  :xMax="100"
  :yMin="0"
  :yMax="100"
/>
```

```tsx [React]
<ScatterChart
  data={data}
  height={300}
  xAxisLabel="Doanh Thu (triệu)"
  yAxisLabel="Lợi Nhuận (%)"
  xMin={0}
  xMax={100}
  yMin={0}
  yMax={100}
/>
```

:::

## API Reference

### Props

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Dữ liệu biểu đồ với datasets |
| `height` | `number` | `300` | Chiều cao biểu đồ (pixels) |
| `width` | `number \| string` | `'100%'` | Chiều rộng biểu đồ |
| `theme` | `'light' \| 'dark'` | `'light'` | Chủ đề màu sắc |
| `bubble` | `boolean` | `false` | Hiển thị chế độ bong bóng |
| `xAxisLabel` | `string` | `''` | Nhãn trục X |
| `yAxisLabel` | `string` | `''` | Nhãn trục Y |
| `xMin` | `number` | `0` | Giá trị tối thiểu trục X |
| `xMax` | `number` | `100` | Giá trị tối đa trục X |
| `yMin` | `number` | `0` | Giá trị tối thiểu trục Y |
| `yMax` | `number` | `100` | Giá trị tối đa trục Y |
| `showGrid` | `boolean` | `true` | Hiển thị lưới |
| `legend` | `boolean` | `true` | Hiển thị chú thích |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Vị trí chú thích |
| `animation` | `boolean` | `true` | Bật/tắt animation |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |
| `emptyText` | `string` | `'Không có dữ liệu'` | Thông báo khi không có dữ liệu |

### ChartData Interface

```typescript
interface ChartData {
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string
  data: number[][] | [number, number, number][] // [x, y] hoặc [x, y, size]
  color?: string
}
```

## Use Cases

- **Phân Tích Tương Quan** - Tìm mối quan hệ giữa hai biến
- **Phân Bố Dữ Liệu** - Hiển thị distribution patterns
- **So Sánh Nhóm** - So sánh multiple groups
- **Phát Hiện Outliers** - Xác định điểm dữ liệu bất thường
- **Nghiên Cứu Khoa Học** - Trực quan hóa experimental data

## Best Practices

### 1. **Sử Dụng Cho Dữ Liệu Phân Tán**

```vue
<!-- ✅ Tốt cho scatter/bubble data -->
<ScatterChart :data="scatterData" />

<!-- ❌ Không dùng cho data có labels -->
<ScatterChart :data="labeledData" />
```

### 2. **Chọn Scale Phù Hợp**

```vue
<!-- ✅ Chọn range phù hợp với dữ liệu -->
<ScatterChart :data="data" :xMin="0" :xMax="100" :yMin="0" :yMax="100" />

<!-- ❌ Tránh range quá rộng -->
<ScatterChart :data="data" :xMin="0" :xMax="10000" />
```

### 3. **Sử Dụng Bubble Cho 3 Dimensions**

```vue
<!-- ✅ Sử dụng bubble cho x, y, size -->
<ScatterChart :data="bubbleData" bubble />
```

### 4. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-video">
    <ScatterChart :data="data" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Với Grid Lines

::: code-group

```vue [Vue]
<ScatterChart :data="data" :height="300" :showGrid="true" />
```

```tsx [React]
<ScatterChart data={data} height={300} showGrid />
```

:::

### Biểu Đồ Với Legend Bottom

::: code-group

```vue [Vue]
<ScatterChart :data="data" :height="300" legendPosition="bottom" />
```

```tsx [React]
<ScatterChart data={data} height={300} legendPosition="bottom" />
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
- [Biểu đồ radar](/vi/charts/radar-chart) - So sánh đa chiều
- [Biểu đồ kết hợp](/vi/charts/mixed-chart) - Kết hợp nhiều loại biểu đồ
