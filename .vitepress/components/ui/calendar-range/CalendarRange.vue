<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import {
  RangeCalendarRoot,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarPrev,
  RangeCalendarNext,
  RangeCalendarGrid,
  RangeCalendarGridHead,
  RangeCalendarGridBody,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  type RangeCalendarRootEmits,
  type RangeCalendarRootProps,
} from 'radix-vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<RangeCalendarRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<RangeCalendarRootEmits>()
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    v-bind="props"
    :class="cn('p-3', props.class)"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <RangeCalendarHeader class="relative flex items-center justify-center pt-1">
      <RangeCalendarPrev
        class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent p-0 opacity-50 hover:opacity-100"
      >
        <ChevronLeft class="h-4 w-4" />
      </RangeCalendarPrev>
      <RangeCalendarHeading class="text-sm font-medium" />
      <RangeCalendarNext
        class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
      >
        <ChevronRight class="h-4 w-4" />
      </RangeCalendarNext>
    </RangeCalendarHeader>
    <div class="pt-4">
      <RangeCalendarGrid>
        <RangeCalendarGridHead>
          <RangeCalendarGridRow>
            <RangeCalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
            >
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>
        <RangeCalendarGridBody class="mt-2">
          <template v-for="week in grid" :key="`week-${week[0]}`">
            <RangeCalendarGridRow class="mt-2 w-full">
              <RangeCalendarCell v-for="day in week" :key="day" :day="day" class="relative h-9 w-9 p-0 text-center text-sm">
                <RangeCalendarCellTrigger
                  :day="day"
                  :month="grid.month"
                  class="inline-flex h-9 w-9 items-center justify-center rounded-md p-0 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selection-start]:rounded-l-md data-[selection-end]:rounded-r-md data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[today]:bg-accent data-[today]:text-accent-foreground data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50"
                />
              </RangeCalendarCell>
            </RangeCalendarGridRow>
          </template>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
