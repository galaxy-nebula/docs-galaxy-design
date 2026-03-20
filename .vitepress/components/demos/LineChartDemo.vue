<script setup lang="ts">
import { ref } from 'vue'
import { LineChart } from '../ui/charts'

const option = ref({
  tooltip: {
    trigger: 'axis',
    confine: true,
  },
  legend: {
    data: ['Sales', 'Revenue'],
    top: 10,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Sales',
      type: 'line',
      data: [30, 45, 35, 50, 45, 60],
      smooth: true,
      lineStyle: {
        color: '#3b82f6',
        width: 2,
      },
      itemStyle: {
        color: '#3b82f6',
      },
      areaStyle: {
        opacity: 0,
      },
    },
    {
      name: 'Revenue',
      type: 'line',
      data: [20, 35, 30, 45, 55, 50],
      smooth: true,
      lineStyle: {
        color: '#10b981',
        width: 2,
      },
      itemStyle: {
        color: '#10b981',
      },
      areaStyle: {
        opacity: 0,
      },
    },
  ],
})
</script>

<template>
  <LineChart :option="option" :height="300" />
</template>
