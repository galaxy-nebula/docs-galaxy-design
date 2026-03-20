<script setup lang="ts">
import { ref } from 'vue'
import { BarChart } from '../ui/charts'

const option = ref({
  tooltip: {
    trigger: 'axis',
    confine: true,
    axisPointer: {
      type: 'shadow',
    },
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Sales',
      type: 'bar',
      data: [120, 200, 150, 80, 170, 110, 130],
      itemStyle: {
        color: '#3b82f6',
      },
    },
    {
      name: 'Revenue',
      type: 'bar',
      data: [100, 180, 130, 90, 150, 120, 140],
      itemStyle: {
        color: '#10b981',
      },
    },
  ],
})
</script>

<template>
  <BarChart :option="option" :height="300" />
</template>
