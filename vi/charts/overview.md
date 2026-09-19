# Tổng Quan Biểu Đồ

Các component biểu đồ đẹp, responsive được xây dựng dựa trên các thư viện biểu đồ hàng đầu ngành.

## Tính Năng

- **✅ API Thống Nhất** - Cùng props và cách sử dụng trên mọi framework (Vue, React, Angular, React Native, Flutter)
- **✅ Sức Mạnh Từ Thư Viện Tốt Nhất** - ECharts cho web, fl_chart cho Flutter
- **✅ Responsive** - Tự động thay đổi kích thước theo container
- **✅ Hỗ Trợ Theme** - Chế độ sáng và tối có sẵn
- **✅ TypeScript** - Full type safety trên mọi framework
- **✅ Accessible** - Tuân thủ WCAG 2.1 AA
- **✅ Tùy Chỉnh** - Nhiều tùy chọn cấu hình
- **✅ Tối Ưu Mobile** - Thân thiện với cảm ứng, hiệu suất cao trên mobile

## Các Biểu Đồ Có Sẵn

| Loại Biểu Đồ | Trạng Thái | Mô Tả |
|------------|--------|-------------|
| [Biểu đồ đường](/vi/charts/line-chart) | ✅ Available | Hiển thị xu hướng dữ liệu theo thời gian với đường cong mượt |
| [Biểu đồ cột](/vi/charts/bar-chart) | ✅ Available | So sánh giá trị qua các danh mục với cột dọc/ngang |
| [Biểu đồ tròn](/vi/charts/pie-chart) | ✅ Available | Hiển thị tỷ lệ và phần trăm dưới dạng hình tròn |
| [Biểu đồ bánh rán](/vi/charts/donut-chart) | ✅ Available | Hiển thị dữ liệu tỷ lệ với tâm rỗng để nhấn mạnh |
| [Biểu đồ vùng](/vi/charts/area-chart) | ✅ Available | Trực quan hóa tổng tích lũy với vùng tô và gradient |
| [Biểu đồ radar](/vi/charts/radar-chart) | ✅ Available | So sánh dữ liệu đa chiều trên lưới hình tròn |
| [Biểu đồ phân tán](/vi/charts/scatter-chart) | ✅ Available | Phân tích phân bố và tương quan với biểu đồ phân tán |
| [Biểu đồ kết hợp](/vi/charts/mixed-chart) | ✅ Available | Kết hợp nhiều loại biểu đồ (đường, cột, vùng) trong một trực quan hóa |
| [Biểu đồ đo](/vi/charts/gauge-chart) | ✅ Available | Đồng hồ đo hình tròn (speedometer) cho số liệu với dải min-max và vùng màu |

## Thiết Kế Triết Lý

### 1. **API Thống Nhất Trên Mọi Framework**

Cùng cấu trúc dữ liệu, cùng props, hành vi nhất quán:

::: code-group

```typescript [Cấu Trúc Dữ Liệu]
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Sales 2024',
    data: [30, 45, 35, 50, 49],
    color: '#3b82f6'
  }]
}
```

```vue [Vue]
<LineChart :data="chartData" :height="350" theme="light" />
```

```tsx [React]
<LineChart data={chartData} height={350} theme="light" />
```

```typescript [Angular]
<ui-line-chart [data]="chartData" [height]="350" theme="light" />
```

```tsx [React Native]
<LineChart data={chartData} height={300} theme="light" />
```

```dart [Flutter]
GalaxyLineChart(
  data: chartData,
  height: 300,
  theme: ChartTheme.light,
)
```

:::

### 2. **Tối Ưu Hóa Riêng Cho Framework**

Trong khi API thống nhất, mỗi implementation được tối ưu cho nền tảng:

- **Web (Vue/React/Angular)**: Sử dụng ECharts với đầy đủ tương tác
- **React Native**: Sử dụng @wuba/react-native-echarts với Skia rendering
- **Flutter**: Sử dụng fl_chart với hiệu suất native Dart

### 3. **Production-Ready**

- Tree-shakeable imports
- Hỗ trợ lazy loading
- Tác động tối thiểu lên bundle
- Xử lý lỗi toàn diện

## Cài Đặt

Các biểu đồ được cài đặt riêng lẻ qua Galaxy UI CLI:

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add line-chart
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add line-chart
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add line-chart
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add line-chart
```

:::

CLI tự động:
- Sao chép files component vào project của bạn
- Cài đặt dependencies cần thiết (ECharts, fl_chart, v.v.)
- Thiết lập TypeScript types
- Cấu hình imports

## Ví Dụ Quick Start

Đây là ví dụ hoàn chỉnh về cách sử dụng biểu đồ trong ứng dụng:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'
import { ref } from 'vue'

const salesData = ref({
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Doanh thu',
    data: [45000, 52000, 48000, 61000],
    color: '#3b82f6'
  }]
})
</script>

<template>
  <div class="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-4">Doanh Thu Năm</h2>
    <LineChart
      :data="salesData"
      :height="350"
      theme="light"
      :smooth="true"
    />
  </div>
</template>
```

```tsx [React]
import { LineChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Doanh thu',
    data: [45000, 52000, 48000, 61000],
    color: '#3b82f6'
  }]
}

export default function Dashboard() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Doanh Thu Năm</h2>
      <LineChart
        data={salesData}
        height={350}
        theme="light"
        smooth
      />
    </div>
  )
}
```

:::

## Props Chung

Tất cả các component biểu đồ chia sẻ các props chung sau:

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Dữ liệu biểu đồ với labels và datasets |
| `height` | `number` | `300` | Chiều cao biểu đồ tính bằng pixels |
| `width` | `number \| string` | `'100%'` | Chiều rộng biểu đồ |
| `theme` | `'light' \| 'dark'` | `'light'` | Chủ đề màu sắc |
| `legend` | `boolean` | `true` | Hiển thị/ẩn chú thích |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Vị trí chú thích |
| `animation` | `boolean` | `true` | Bật/tắt animations |
| `loading` | `boolean` | `false` | Hiển thị trạng thái loading |
| `emptyText` | `string` | `'Không có dữ liệu'` | Thông báo trạng thái rỗng |

## Bảng Màu

Các biểu đồ hỗ trợ nhiều bảng màu có sẵn:

::: code-group

```typescript [Default Palette]
const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
```

```typescript [Categorical Palette]
const colors = ['#0077b6', '#00b4d8', '#90e0ef', '#48cae4', '#0096c7']
```

```typescript [Sequential Palette]
const colors = ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8']
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

## Best Practices

### 1. **Tối Ưu Hiệu Suất**

```vue
<script setup lang="ts">
// ✅ Sử dụng lazy loading cho biểu đồ lớn
import { defineAsyncComponent } from 'vue'
const LineChart = defineAsyncComponent(() => import('@/components/ui/charts/line-chart'))
</script>
```

### 2. **Xử Lý Responsive**

```tsx
// ✅ Sử dụng container responsive
<div className="w-full aspect-video">
  <LineChart data={data} />
</div>
```

### 3. **Error Handling**

```typescript
// ✅ Luôn validate dữ liệu trước khi render
if (!data || !data.datasets || data.datasets.length === 0) {
  return <EmptyState text="No data available" />
}
```

## Accessibility

Tất cả biểu đồ tuân thủ WCAG 2.1 AA:

- **Screen Reader**: Mô tả văn bản thay thế cho dữ liệu
- **Keyboard Navigation**: Điều hướng bằng bàn phím
- **Color Contrast**: Tỷ lệ tương phản màu sắc đạt chuẩn
- **Focus Indicators**: Chỉ báo focus rõ ràng

## Các Trang Tiếp Theo

- [Biểu đồ đường](/vi/charts/line-chart) - Hiển thị xu hướng theo thời gian
- [Biểu đồ cột](/vi/charts/bar-chart) - So sánh giá trị qua danh mục
- [Biểu đồ tròn](/vi/charts/pie-chart) - Hiển thị tỷ lệ phần trăm
- [Biểu đồ bánh rán](/vi/charts/donut-chart) - Biến thể của biểu đồ tròn
- [Biểu đồ vùng](/vi/charts/area-chart) - Trực quan hóa tích lũy
- [Biểu đồ radar](/vi/charts/radar-chart) - So sánh đa chiều
- [Biểu đồ phân tán](/vi/charts/scatter-chart) - Phân tích phân bố
- [Biểu đồ kết hợp](/vi/charts/mixed-chart) - Kết hợp nhiều loại
- [Biểu đồ đo](/vi/charts/gauge-chart) - Đồng hồ đo số liệu
