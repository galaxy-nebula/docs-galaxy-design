<script setup lang="ts">
import { computed, ref } from 'vue'

const frameworks = ['Vue', 'React', 'Angular', 'React Native', 'Flutter', 'Svelte', 'Solid']
const query = ref('')
const open = ref(false)
const selected = ref('')

const filtered = computed(() =>
  frameworks.filter(f => f.toLowerCase().includes(query.value.toLowerCase()))
)

function pick(f: string) {
  selected.value = f
  query.value = f
  open.value = false
}
</script>

<template>
  <div class="max-w-xs mx-auto relative">
    <input
      v-model="query"
      placeholder="Search framework…"
      class="w-full h-9 rounded-md border border-border bg-transparent px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
      @focus="open = true"
    />
    <ul
      v-if="open && filtered.length"
      class="absolute z-10 mt-1 w-full rounded-md border border-border bg-card shadow-md py-1"
    >
      <li v-for="f in filtered" :key="f">
        <button
          class="w-full px-3 py-1.5 text-left text-sm hover:bg-accent"
          @click="pick(f)"
        >{{ f }}</button>
      </li>
    </ul>
  </div>
</template>
