<script setup lang="ts">
import { ref } from 'vue'
import { RadarChart } from '../ui/charts'

const option = ref({
  tooltip: {
    trigger: 'item',
    confine: true,
  },
  legend: {
    data: ['Product A', 'Product B'],
    top: 10,
  },
  radar: {
    indicator: [
      { name: 'Speed', max: 100 },
      { name: 'Reliability', max: 100 },
      { name: 'Comfort', max: 100 },
      { name: 'Safety', max: 100 },
      { name: 'Efficiency', max: 100 },
    ],
    shape: 'polygon',
    splitNumber: 4,
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [80, 90, 70, 85, 75],
          name: 'Product A',
          areaStyle: {
            color: '#3b82f640',
          },
          lineStyle: {
            color: '#3b82f6',
            width: 2,
          },
          itemStyle: {
            color: '#3b82f6',
          },
        },
        {
          value: [70, 75, 85, 80, 90],
          name: 'Product B',
          areaStyle: {
            color: '#10b98140',
          },
          lineStyle: {
            color: '#10b981',
            width: 2,
          },
          itemStyle: {
            color: '#10b981',
          },
        },
      ],
    },
  ],
})
</script>

<template>
  <RadarChart :option="option" :height="300" />
</template>
