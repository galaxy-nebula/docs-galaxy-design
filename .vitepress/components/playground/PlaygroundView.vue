<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Playground - interactive component explorer with live preview
-->
<script setup lang="ts">
import { ref, computed, watch, onMounted, defineAsyncComponent } from 'vue'
import { useRouter } from 'vitepress'

// Auto-import all demos
const demos = import.meta.glob('../../components/demos/*.vue', { eager: true })

const demoNames = Object.keys(demos)
  .map((path) => path.split('/').pop()?.replace('.vue', '').replace('Demo', '') || '')
  .filter(Boolean)
  .sort()

const selected = ref(demoNames[0] || 'Button')
const search = ref('')

const filteredNames = computed(() =>
  demoNames.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()))
)

const DemoComponent = computed(() => {
  const key = Object.keys(demos).find(
    (p) => p.split('/').pop()?.replace('.vue', '') === `${selected.value}Demo`
  )
  if (!key || !demos[key]) return null
  const mod = demos[key] as { default: any }
  return mod.default
})
</script>

<template>
  <div class="playground">
    <!-- Sidebar: component list -->
    <aside class="pg-sidebar">
      <input
        v-model="search"
        type="text"
        placeholder="Search components..."
        class="pg-search"
      />
      <nav class="pg-list">
        <button
          v-for="name in filteredNames"
          :key="name"
          :class="['pg-item', name === selected && 'pg-item-active']"
          @click="selected = name"
        >
          {{ name }}
        </button>
      </nav>
    </aside>

    <!-- Main: preview -->
    <main class="pg-main">
      <header class="pg-header">
        <h2 class="pg-title">{{ selected }}</h2>
        <a
          :href="`/components/${selected.toLowerCase()}`"
          class="pg-docs-link"
        >
          Full docs →
        </a>
      </header>

      <div class="pg-preview">
        <component :is="DemoComponent" v-if="DemoComponent" />
        <p v-else class="pg-empty">Select a component to preview</p>
      </div>
    </main>
  </div>
</template>

<style>
.playground {
  display: flex;
  min-height: calc(100vh - var(--vp-nav-height));
}
.pg-sidebar {
  width: 220px;
  min-width: 220px;
  border-right: 1px solid var(--vp-c-divider);
  padding: 16px 8px;
  overflow-y: auto;
  max-height: calc(100vh - var(--vp-nav-height));
  position: sticky;
  top: var(--vp-nav-height);
}
.pg-search {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 13px;
  margin-bottom: 12px;
}
.pg-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pg-item {
  text-align: left;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}
.pg-item:hover {
  background: var(--vp-c-bg-soft);
}
.pg-item-active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
.pg-main {
  flex: 1;
  padding: 24px 32px;
  max-width: 900px;
}
.pg-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.pg-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}
.pg-docs-link {
  font-size: 13px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.pg-empty {
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .playground { flex-direction: column; }
  .pg-sidebar {
    width: 100%;
    min-width: unset;
    position: static;
    max-height: 200px;
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
  }
}
</style>
EOF
echo playground-view-done