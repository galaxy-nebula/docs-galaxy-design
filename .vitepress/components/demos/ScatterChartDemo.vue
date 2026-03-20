<script setup lang="ts">
import { ref } from 'vue'
import { ScatterChart } from '../ui/charts'

const option = ref({
  tooltip: {
    trigger: 'item',
    confine: true,
    formatter: (params: any) => {
      return `${params.seriesName}<br/>X: ${params.value[0]}<br/>Y: ${params.value[1]}`
    },
  },
  legend: {
    data: ['Group A', 'Group B'],
    top: 10,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    name: 'X Axis',
  },
  yAxis: {
    type: 'value',
    name: 'Y Axis',
  },
  series: [
    {
      name: 'Group A',
      type: 'scatter',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      symbolSize: 8,
      itemStyle: {
        color: '#3b82f6',
        opacity: 0.8,
      },
    },
    {
      name: 'Group B',
      type: 'scatter',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      symbolSize: 8,
      itemStyle: {
        color: '#10b981',
        opacity: 0.8,
      },
    },
  ],
})
</script>

<template>
  <ScatterChart :option="option" :height="300" />
</template>
