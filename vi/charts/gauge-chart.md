# Biểu Đồ Đo

Hiển thị biểu đồ đồng hồ đo hình tròn (speedometer) cho số liệu với dải min-max và vùng màu tùy chỉnh.

<ComponentPreview name="GaugeChartDemo">
  <template #preview>
    <DemoContainer>
      <GaugeChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'

const cpuUsage = 75
</script>

<template>
  <GaugeChart
    :value="cpuUsage"
    title="Sử Dụng CPU"
    unit="%"
    :height="300"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function App() {
  const cpuUsage = 75

  return (
    <GaugeChart
      value={cpuUsage}
      title="Sử Dụng CPU"
      unit="%"
      height={300}
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { GaugeChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GaugeChartComponent],
  template: `
    <ui-gauge-chart
      [value]="cpuUsage"
      title="Sử Dụng CPU"
      unit="%"
      [height]="300"
    />
  `
})
export class AppComponent {
  cpuUsage = 75
}
```

```tsx [React Native]
import { GaugeChart } from "@/components/ui/charts"
import { View } from "react-native"

export default function App() {
  const cpuUsage = 75

  return (
    <View className="p-4">
      <GaugeChart
        value={cpuUsage}
        title="Sử Dụng CPU"
        unit="%"
        height={300}
      />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/gauge_chart.dart';

class App extends StatelessWidget {
  final double cpuUsage = 75;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: GalaxyGaugeChart(
        value: cpuUsage,
        title: 'Sử Dụng CPU',
        unit: '%',
        height: 300,
      ),
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
npx @galaxy-stack/nebula-cli@latest add gauge-chart
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add gauge-chart
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add gauge-chart
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add gauge-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add gauge-chart
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

### Biểu Đồ Đo Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'

const batteryLevel = 85
</script>

<template>
  <GaugeChart :value="batteryLevel" title="Pin" unit="%" />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function Dashboard() {
  const batteryLevel = 85

  return <GaugeChart value={batteryLevel} title="Pin" unit="%" />
}
```

:::

### Biểu Đồ Đo Với Custom Min/Max

::: code-group

```vue [Vue]
<GaugeChart :value="75" :min="0" :max="200" title="Tốc Độ" unit="km/h" />
```

```tsx [React]
<GaugeChart value={75} min={0} max={200} title="Tốc Độ" unit="km/h" />
```

:::

### Biểu Đồ Đo Với Vùng Màu

::: code-group

```vue [Vue]
<GaugeChart
  :value="75"
  title="Nhiệt Độ"
  unit="°C"
  :zones="[
    { min: 0, max: 30, color: '#10b981', label: 'Bình thường' },
    { min: 30, max: 70, color: '#f59e0b', label: 'Cảnh báo' },
    { min: 70, max: 100, color: '#ef4444', label: 'Nguy hiểm' }
  ]"
/>
```

```tsx [React]
<GaugeChart
  value={75}
  title="Nhiệt Độ"
  unit="°C"
  zones={[
    { min: 0, max: 30, color: '#10b981', label: 'Bình thường' },
    { min: 30, max: 70, color: '#f59e0b', label: 'Cảnh báo' },
    { min: 70, max: 100, color: '#ef4444', label: 'Nguy hiểm' }
  ]}
/>
```

:::

### Biểu Đồ Đo Với Multiple Gauges

::: code-group

```vue [Vue]
<script setup lang="ts">
const metrics = [
  { value: 75, title: 'CPU', unit: '%' },
  { value: 60, title: 'RAM', unit: '%' },
  { value: 45, title: 'Disk', unit: '%' }
]
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <GaugeChart
      v-for="metric in metrics"
      :key="metric.title"
      :value="metric.value"
      :title="metric.title"
      :unit="metric.unit"
    />
  </div>
</template>
```

```tsx [React]
const metrics = [
  { value: 75, title: 'CPU', unit: '%' },
  { value: 60, title: 'RAM', unit: '%' },
  { value: 45, title: 'Disk', unit: '%' }
]

<div className="grid grid-cols-3 gap-4">
  {metrics.map(metric => (
    <GaugeChart
      key={metric.title}
      value={metric.value}
      title={metric.title}
      unit={metric.unit}
    />
  ))}
</div>
```

:::

## API Reference

### Props

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------------|
| `value` | `number` | **required** | Giá trị hiện tại |
| `min` | `number` | `0` | Giá trị tối thiểu |
| `max` | `number` | `100` | Giá trị tối đa |
| `title` | `string` | `''` | Tiêu đề biểu đồ |
| `unit` | `string` | `''` | Đơn vị đo lường |
| `height` | `number` | `300` | Chiều cao biểu đồ (pixels) |
| `width` | `number \| string` | `'100%'` | Chiều rộng biểu đồ |
| `theme` | `'light' \| 'dark'` | `'light'` | Chủ đề màu sắc |
| `zones` | `GaugeZone[]` | `[]` | Các vùng màu tùy chỉnh |
| `showValue` | `boolean` | `true` | Hiển thị giá trị số |
| `animation` | `boolean` | `true` | Bật/tắt animation |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |

### GaugeZone Interface

```typescript
interface GaugeZone {
  min: number
  max: number
  color: string
  label?: string
}
```

## Use Cases

- **Dashboard Hệ Thống** - Hiển thị CPU, RAM, Disk usage
- **Theo Dõi Hiệu Suất** - Hiển thị KPIs và metrics
- **Giám Sát Nhiệt Độ** - Hiển thị nhiệt độ với cảnh báo
- **Đồng Hồ Tốc Độ** - Hiển thị tốc độ vehicle
- **Số Liệu Tài Chính** - Hiển thị progress toward goals

## Best Practices

### 1. **Sử Dụng Zones Cho Cảnh Báo**

```vue
<!-- ✅ Sử dụng zones để phân vùng rõ ràng -->
<GaugeChart
  :value="temperature"
  :zones="[
    { min: 0, max: 30, color: '#10b981', label: 'OK' },
    { min: 30, max: 70, color: '#f59e0b', label: 'Warning' },
    { min: 70, max: 100, color: '#ef4444', label: 'Critical' }
  ]"
/>
```

### 2. **Chọn Min/Max Phù Hợp**

```vue
<!-- ✅ Chọn range phù hợp với dữ liệu -->
<GaugeChart :value="speed" :min="0" :max="200" />

<!-- ❌ Tránh range quá rộng hoặc quá hẹp -->
<GaugeChart :value="speed" :min="0" :max="1000" />
```

### 3. **Sử Dụng Cho Single Metric**

```vue
<!-- ✅ Tốt cho single metric -->
<GaugeChart :value="cpu" title="CPU" />

<!-- ❌ Tránh cho nhiều metrics cùng lúc -->
<GaugeChart :value="multipleMetrics" />
```

### 4. **Responsive Design**

```vue
<template>
  <div class="w-full aspect-square">
    <GaugeChart :value="value" />
  </div>
</template>
```

## Accessibility

- **Screen Reader**: Mô tả văn bản thay thế cho giá trị
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Ví Dụ Khác

### Biểu Đồ Đo Với Custom Color

::: code-group

```vue [Vue]
<GaugeChart :value="75" :color="#3b82f6" title="Custom" />
```

```tsx [React]
<GaugeChart value={75} color="#3b82f6" title="Custom" />
```

:::

### Biểu Đồ Đo Không Animation

::: code-group

```vue [Vue]
<GaugeChart :value="75" :animation="false" />
```

```tsx [React]
<GaugeChart value={75} animation={false} />
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

- [Tổng quan biểu đồ](/vi/charts/overview) - Giới thiệu tất cả các loại biểu đồ
- [Biểu đồ tròn](/vi/charts/pie-chart) - Hiển thị tỷ lệ phần trăm
- [Biểu đồ radar](/vi/charts/radar-chart) - So sánh đa chiều
