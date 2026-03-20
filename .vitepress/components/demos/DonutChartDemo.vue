<script setup lang="ts">
import { ref } from 'vue'
import { DonutChart } from '../ui/charts'

const option = ref({
  tooltip: {
    trigger: 'item',
    confine: true,
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  },
  series: [
    {
      name: 'Browser Usage',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['60%', '50%'],
      data: [
        { value: 45, name: 'Chrome', itemStyle: { color: '#3b82f6' } },
        { value: 25, name: 'Safari', itemStyle: { color: '#10b981' } },
        { value: 15, name: 'Firefox', itemStyle: { color: '#f59e0b' } },
        { value: 10, name: 'Edge', itemStyle: { color: '#ef4444' } },
        { value: 5, name: 'Other', itemStyle: { color: '#8b5cf6' } },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<template>
  <DonutChart :option="option" :height="300" />
</template>
