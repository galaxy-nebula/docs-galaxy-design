<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  option?: any
  height?: number
}>(), {
  height: 300
})

const isMounted = ref(false)
const VChart = ref<any>(null)

onMounted(async () => {
  isMounted.value = true
  
  // Dynamic import - only runs on client
  const { default: VChartModule } = await import('vue-echarts')
  const echarts = await import('echarts/core')
  
  VChart.value = VChartModule
  
  // Register required components
  const { use } = echarts
  const { ScatterChart } = await import('echarts/charts')
  const {
    GridComponent,
    TooltipComponent,
    LegendComponent,
  } = await import('echarts/components')
  const { CanvasRenderer } = await import('echarts/renderers')
  
  use([
    ScatterChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    CanvasRenderer,
  ])
})
</script>

<template>
  <div v-if="isMounted && VChart.value" class="w-full" :style="`height: ${height}px`">
    <VChart :option="props.option" autoresize :style="`height: 100%; width: 100%;`" />
  </div>
  <div v-else class="w-full flex items-center justify-center bg-gray-50 rounded" :style="`height: ${height}px`">
    <span class="text-gray-400 text-sm">Loading chart...</span>
  </div>
</template>
