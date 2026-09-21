# Prompt Box

Standalone assistant composer with auto-resizing textarea, attachments row, model pill, slash-command hints, and send/stop states.

<ComponentPreview name="PromptBoxDemo">
  <template #preview>
    <DemoContainer>
      <PromptBoxDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add prompt-box
```

:::

## Usage

```tsx
import { PromptBox } from '@/components/assistant/prompt-box';

<PromptBox
  model="gpt-4.1"
  commands={[
    { name: 'fix', description: 'Fix the selected problem' },
    { name: 'explain', description: 'Explain the selected code' },
  ]}
  onSubmit={(content) => send(content)}
/>
```

## Features

- ✅ **Auto-resize** — textarea grows with content (max 160px)
- ✅ **Slash commands** — type `/` for live command hints
- ✅ **Attachments** — file chips with size labels
- ✅ **Model pill** — active model display
- ✅ **Send/Stop states** — destructive Stop while streaming

## API Reference

### PromptBoxProps

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `placeholder` | `string` | `'Type a message…'` | Input placeholder |
| `model` | `string?` | — | Model pill label |
| `attachments` | `PromptAttachment[]` | `[]` | Attachment chips |
| `commands` | `SlashCommand[]?` | `[]` | Slash command hints |
| `busy` | `boolean` | `false` | Show Stop state |
| `onSubmit` | `(content: string) => void` | — | Submit handler |
| `onStop` | `() => void` | — | Stop handler |
