# Agent Activity

Codex-style agent progress panel with task checklist, status badges, progress bar, and timestamped tool call log.

<ComponentPreview name="AgentActivityDemo">
  <template #preview>
    <DemoContainer>
      <AgentActivityDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add agent-activity
```

:::

## Usage

```tsx
import { AgentActivity, type AgentTask } from '@/components/assistant/agent-activity';

const tasks: AgentTask[] = [
  { id: '1', label: 'Analyze repository structure', status: 'completed' },
  { id: '2', label: 'Locate failing tests', status: 'completed', detail: '3 files' },
  { id: '3', label: 'Apply fixes to parser', status: 'running' },
  { id: '4', label: 'Re-run test suite', status: 'pending' },
];

<AgentActivity
  agentName="Codex"
  status="working"
  tasks={tasks}
  elapsedLabel="2m 14s"
  toolEvents={[
    { id: 'e1', name: 'bash', summary: 'npm test -- parser', timestamp: new Date() },
  ]}
/>
```

## Features

- ✅ **Task checklist** — pending / running / completed / error states
- ✅ **Progress bar** — percentage + counts in header
- ✅ **Status badge** — Idle / Thinking / Working
- ✅ **Tool call log** — timestamped monospace events
- ✅ **Elapsed time** — display run duration

## API Reference

### AgentActivityProps

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `agentName` | `string` | `'Agent'` | Header title |
| `status` | `'idle' \| 'thinking' \| 'working'` | `'idle'` | Agent state badge |
| `tasks` | `AgentTask[]` | required | Task checklist |
| `toolEvents` | `AgentToolEvent[]?` | `[]` | Timestamped tool log |
| `elapsedLabel` | `string?` | — | Run duration text |
