<script setup lang="ts">
import { ref } from 'vue'
import { MixedChart } from '../ui/charts'

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
    confine: true,
  },
  legend: {
    data: ['Revenue', 'Sales', 'Profit'],
    top: '5%',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    boundaryGap: true,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Revenue',
      type: 'line',
      data: [30, 45, 35, 50, 45, 60],
      smooth: true,
      showSymbol: true,
      symbolSize: 6,
      itemStyle: {
        color: '#3b82f6',
      },
    },
    {
      name: 'Sales',
      type: 'bar',
      data: [20, 35, 30, 45, 55, 50],
      barMaxWidth: 50,
      itemStyle: {
        color: '#10b981',
      },
    },
    {
      name: 'Profit',
      type: 'line',
      data: [15, 25, 22, 30, 35, 40],
      smooth: true,
      areaStyle: {
        opacity: 0.3,
      },
      itemStyle: {
        color: '#f59e0b',
      },
    },
  ],
})
</script>

<template>
  <MixedChart :option="option" :height="350" />
</template>
