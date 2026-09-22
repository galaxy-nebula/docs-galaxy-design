<script setup lang="ts">
import { computed, ref } from 'vue'
import { Badge } from '@/components/ui/badge'

const rows = ref([
  { id: 'INV-001', customer: 'Sarah Chen', amount: 250, status: 'paid' },
  { id: 'INV-002', customer: 'Alex Kim', amount: 120, status: 'pending' },
  { id: 'INV-003', customer: 'Mai Tran', amount: 480, status: 'paid' },
  { id: 'INV-004', customer: 'John Doe', amount: 95, status: 'failed' },
])

const sortKey = ref<'amount'>('amount')
const sortDir = ref(1)

const sorted = computed(() =>
  [...rows.value].sort((a, b) => (a[sortKey.value] - b[sortKey.value]) * sortDir.value)
)

function toggleSort() {
  sortDir.value = sortDir.value * -1
}
</script>

<template>
  <div class="max-w-lg mx-auto rounded-lg border border-border overflow-hidden bg-background">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-muted/40 text-left text-xs text-muted-foreground">
          <th class="px-4 py-2.5 font-medium">Invoice</th>
          <th class="px-4 py-2.5 font-medium">Customer</th>
          <th class="px-4 py-2.5 font-medium cursor-pointer select-none" @click="toggleSort">
            Amount {{ sortDir === 1 ? '↑' : '↓' }}
          </th>
          <th class="px-4 py-2.5 font-medium">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr v-for="row in sorted" :key="row.id" class="hover:bg-muted/30">
          <td class="px-4 py-2.5 font-mono text-xs">{{ row.id }}</td>
          <td class="px-4 py-2.5">{{ row.customer }}</td>
          <td class="px-4 py-2.5">${{ row.amount }}</td>
          <td class="px-4 py-2.5">
            <Badge :variant="row.status === 'paid' ? 'default' : row.status === 'pending' ? 'secondary' : 'destructive'">
              {{ row.status }}
            </Badge>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
