# Data Table

Powerful table with sorting, filtering, and column visibility — TanStack Table (web) with platform equivalents.

<ComponentPreview name="DataTableDemo">
  <template #preview>
    <DemoContainer>
      <DataTableDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add data-table
```

:::

## Features

- ✅ **TanStack Table core** — headless, framework-agnostic logic
- ✅ **Column sorting** — click headers to toggle direction
- ✅ **Filtering & pagination** — built-in helpers
- ✅ **Status badges** — pair with Badge component

## Usage

::: code-group

```vue [Vue]
<script setup>
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
</script>

<template>
  <DataTable :columns="columns" :data="data" />
</template>
```

```tsx [React]
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"

<DataTable columns={columns} data={data} />
```

:::

## Platform Availability

| Framework | Status |
| --------- | ------ |
| React | ✅ Complete (@tanstack/react-table) |
| Vue | ✅ Complete (@tanstack/vue-table) |
| Angular | ✅ Complete |
| React Native | ❌ Web only |
| Flutter | ❌ Web only |
