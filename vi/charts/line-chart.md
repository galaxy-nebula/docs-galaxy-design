# Biểu đồ đường

Hiển thị dữ liệu dưới dạng biểu đồ đường với các đường cong mượt mà, vùng tô màu và khả năng tùy chỉnh kiểu dáng.

<ComponentPreview name="LineChartDemo">
  <template #preview>
    <DemoContainer>
      <LineChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
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
  <LineChart :data="salesData" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
  datasets: [
    {
      label: 'Doanh số 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#3b82f6',
    },
  ],
}

export default function App() {
  return <LineChart data={salesData} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { LineChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LineChartComponent],
  template: `<ui-line-chart [data]="salesData" [height]="300" />`
})
export class AppComponent {
  salesData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
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
import { LineChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
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
      <LineChart data={salesData} height={300} />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/line_chart.dart';

class MyApp extends StatelessWidget {
  final salesData = ChartData(
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
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
    return GalaxyLineChart(
      data: salesData,
      height: 300,
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/design-cli@latest add line-chart
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add line-chart
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add line-chart
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add line-chart
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add line-chart
```

:::

::: tip Dependencies
Component này sẽ tự động cài đặt các dependencies sau:
- **Vue**: `vue-echarts@^7.0.3`, `echarts@^5.5.1`
- **React**: `echarts-for-react@^3.0.2`, `echarts@^5.5.1`
- **Angular**: `ngx-echarts@^18.0.0`, `echarts@^5.5.1`
- **React Native**: `@wuba/react-native-echarts@^3.0.1`, `echarts@^5.5.1`, `@shopify/react-native-skia@^1.6.4`
- **Flutter**: `fl_chart@^0.68.0`

Không cần cài đặt thủ công!
:::

## Sử dụng

### Biểu đồ đường cơ bản

Biểu đồ đường đơn giản với một tập dữ liệu:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6'],
  datasets: [{
    label: 'Doanh thu',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <LineChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6'],
  datasets: [{
    label: 'Doanh thu',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <LineChart data={data} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { LineChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LineChartComponent],
  template: `<ui-line-chart [data]="data" [height]="300" />`
})
export class AppComponent {
  data = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6'],
    datasets: [{
      label: 'Doanh thu',
      data: [120, 190, 300, 500, 420],
      color: '#3b82f6'
    }]
  }
}
```

:::

### Nhiều dòng dữ liệu

So sánh nhiều tập dữ liệu trên cùng một biểu đồ:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: '2023',
      data: [100, 150, 200, 250],
      color: '#3b82f6'
    },
    {
      label: '2024',
      data: [120, 180, 220, 280],
      color: '#10b981'
    }
  ]
}
</script>

<template>
  <LineChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: '2023',
      data: [100, 150, 200, 250],
      color: '#3b82f6'
    },
    {
      label: '2024',
      data: [120, 180, 220, 280],
      color: '#10b981'
    }
  ]
}

export default function App() {
  return <LineChart data={data} height={300} />
}
```

:::

### Biểu đồ có vùng tô

Hiển thị với vùng tô màu bên dưới đường:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Users',
    data: [500, 800, 1200, 1500, 1800],
    color: '#8b5cf6',
    areaStyle: {
      opacity: 0.3
    }
  }]
}
</script>

<template>
  <LineChart :data="data" :height="300" :area="true" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Users',
    data: [500, 800, 1200, 1500, 1800],
    color: '#8b5cf6',
    areaStyle: {
      opacity: 0.3
    }
  }]
}

export default function App() {
  return <LineChart data={data} height={300} area={true} />
}
```

:::

### Biểu đồ với gradient

Sử dụng gradient cho đường và vùng tô:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Traffic',
    data: [2000, 3500, 4200, 5000, 4800],
    gradientColors: ['#3b82f6', '#8b5cf6']
  }]
}
</script>

<template>
  <LineChart :data="data" :height="300" :gradient="true" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Traffic',
    data: [2000, 3500, 4200, 5000, 4800],
    gradientColors: ['#3b82f6', '#8b5cf6']
  }]
}

export default function App() {
  return <LineChart data={data} height={300} gradient={true} />
}
```

:::

### Biểu đồ thời gian thực

Cập nhật dữ liệu theo thời gian thực:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { LineChart } from '@/components/ui/charts'

const liveData = ref({
  labels: ['10:00', '10:05', '10:10', '10:15', '10:20'],
  datasets: [{
    label: 'CPU Usage',
    data: [45, 52, 38, 65, 48],
    color: '#ef4444'
  }]
})

// Update data every 5 seconds
setInterval(() => {
  const newTime = new Date().toLocaleTimeString()
  const newValue = Math.floor(Math.random() * 100)
  
  liveData.value.labels.shift()
  liveData.value.labels.push(newTime)
  liveData.value.datasets[0].data.shift()
  liveData.value.datasets[0].data.push(newValue)
}, 5000)
</script>

<template>
  <LineChart :data="liveData" :height="300" />
</template>
```

```tsx [React]
import { useState, useEffect } from 'react'
import { LineChart } from "@/components/ui/charts"

export default function App() {
  const [liveData, setLiveData] = useState({
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20'],
    datasets: [{
      label: 'CPU Usage',
      data: [45, 52, 38, 65, 48],
      color: '#ef4444'
    }]
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString()
      const newValue = Math.floor(Math.random() * 100)
      
      setLiveData(prev => ({
        labels: [...prev.labels.slice(1), newTime],
        datasets: [{
          ...prev.datasets[0],
          data: [...prev.datasets[0].data.slice(1), newValue]
        }]
      }))
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return <LineChart data={liveData} height={300} />
}
```

:::

## Props

### LineChart Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData` | - | Dữ liệu biểu đồ với labels và datasets |
| `height` | `number` | `300` | Chiều cao của biểu đồ (px) |
| `width` | `number` | `100%` | Chiều rộng của biểu đồ |
| `area` | `boolean` | `false` | Hiển thị vùng tô bên dưới đường |
| `gradient` | `boolean` | `false` | Sử dụng gradient cho đường và vùng tô |
| `smooth` | `boolean` | `true` | Làm mượt đường cong |
| `showLegend` | `boolean` | `true` | Hiển thị chú thích |
| `showTooltip` | `boolean` | `true` | Hiển thị tooltip khi hover |
| `showGrid` | `boolean` | `true` | Hiển thị lưới |
| `xAxisType` | `string` | `'category'` | Loại trục X: 'category', 'value', 'time' |
| `yAxisType` | `string` | `'value'` | Loại trục Y: 'category', 'value', 'time' |
| `animation` | `boolean` | `true` | Bật hiệu ứng động |
| `theme` | `'light' \| 'dark'` | `'light'` | Chủ đề màu sắc |

### ChartData Type

```typescript
interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface ChartDataset {
  label: string;
  data: number[];
  color?: string;
  gradientColors?: string[];
  areaStyle?: {
    opacity?: number;
    color?: string;
  };
  lineStyle?: {
    width?: number;
    type?: 'solid' | 'dashed' | 'dotted';
  };
}
```

## Các ví dụ nâng cao

### Biểu đồ với đánh dấu điểm

Thêm điểm đánh dấu đặc biệt:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Conversion Rate',
    data: [2.5, 3.2, 4.8, 3.5],
    color: '#f59e0b',
    markPoint: {
      data: [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' }
      ]
    }
  }]
}
</script>

<template>
  <LineChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Conversion Rate',
    data: [2.5, 3.2, 4.8, 3.5],
    color: '#f59e0b',
    markPoint: {
      data: [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' }
      ]
    }
  }]
}

export default function App() {
  return <LineChart data={data} height={300} />
}
```

:::

### Biểu đồ với đường mục tiêu

Thêm đường mục tiêu hoặc đường trung bình:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Actual',
      data: [85, 92, 88, 95, 90, 96],
      color: '#10b981'
    },
    {
      label: 'Target',
      data: [90, 90, 90, 90, 90, 90],
      color: '#ef4444',
      lineStyle: {
        type: 'dashed',
        width: 2
      }
    }
  ]
}
</script>

<template>
  <LineChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Actual',
      data: [85, 92, 88, 95, 90, 96],
      color: '#10b981'
    },
    {
      label: 'Target',
      data: [90, 90, 90, 90, 90, 90],
      color: '#ef4444',
      lineStyle: {
        type: 'dashed',
        width: 2
      }
    }
  ]
}

export default function App() {
  return <LineChart data={data} height={300} />
}
```

:::

## Sự kiện

### Event Handlers

| Event | Parameters | Description |
|-------|------------|-------------|
| `@click` | `(dataPoint: DataPoint)` | Khi click vào điểm dữ liệu |
| `@legendselectchanged` | `(selected: string[])` | Khi thay đổi lựa chọn legend |
| `@brushselected` | `(range: BrushRange)` | Khi chọn vùng bằng brush |

```vue
<template>
  <LineChart 
    :data="data" 
    :height="300"
    @click="handleClick"
    @legendselectchanged="handleLegendChange"
  />
</template>

<script setup>
const handleClick = (dataPoint) => {
  console.log('Clicked:', dataPoint)
}

const handleLegendChange = (selected) => {
  console.log('Selected legends:', selected)
}
</script>
```

## Tùy chỉnh nâng cao

### Dark Mode

Tự động thích ứng với dark mode:

```vue
<script setup>
import { useDark } from '@vueuse/core'
import { LineChart } from '@/components/ui/charts'

const isDark = useDark()
</script>

<template>
  <LineChart 
    :data="data" 
    :height="300"
    :theme="isDark ? 'dark' : 'light'"
  />
</template>
```

### Responsive Container

Sử dụng container responsive:

```vue
<template>
  <div className="w-full h-64">
    <LineChart :data="data" :height="100%" />
  </div>
</template>
```

## Best Practices

### Performance Tips

1. **Giới hạn số điểm dữ liệu**: Với dataset lớn (>1000 điểm), hãy xem xét việc sampling hoặc aggregation
2. **Tắt animation cho dữ liệu thời gian thực**: `:animation="false"` để cải thiện performance
3. **Sử dụng `notMerge`**: Khi update dữ liệu thường xuyên, đặt `notMerge: true` để tránh memory leak

### Accessibility

- Luôn cung cấp `aria-label` cho biểu đồ
- Sử dụng màu có độ tương phản cao
- Cung cấp data table alternative cho screen readers

## Tham khảo thêm

- [Apache ECharts Line Series](https://echarts.apache.org/en/option.html#series-line)
- [Vue-ECharts Documentation](https://github.com/ecomfe/vue-echarts)
- [ECharts for React](https://github.com/hustcc/echarts-for-react)
