# Chat Panel

Copilot-style assistant side panel with message list, tool call cards, model badge, and composer with send/stop states.

<ComponentPreview name="ChatPanelDemo">
  <template #preview>
    <DemoContainer>
      <ChatPanelDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add chat-panel
```

:::

## Usage

```tsx
import { ChatPanel, type AssistantChatMessage } from '@/components/assistant/chat-panel';

const messages: AssistantChatMessage[] = [
  { id: '1', role: 'user', content: 'Refactor the auth module' },
  {
    id: '2',
    role: 'assistant',
    content: 'I found 3 files to update. Starting with auth.service.ts…',
    toolCalls: [
      {
        id: 't1',
        name: 'read_file',
        args: 'src/auth/auth.service.ts',
        result: '142 lines',
        status: 'completed',
      },
      { id: 't2', name: 'edit_file', args: 'src/auth/auth.service.ts', status: 'running' },
    ],
  },
];

<ChatPanel
  title="Copilot"
  model="gpt-4.1"
  messages={messages}
  onSendMessage={(content) => sendMessage(content)}
  onStop={cancel}
/>
```

## Features

- ✅ **Streaming state** — blinking cursor + pulse status while generating
- ✅ **Tool call cards** — collapsible args/result with running/completed/error states
- ✅ **Model badge** — display active model in the header
- ✅ **Send/Stop toggle** — composer switches to destructive Stop while busy
- ✅ **Auto-scroll** — follows new messages
- ✅ **Keyboard friendly** — Enter sends, Shift+Enter for newline

## API Reference

### ChatPanelProps

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `title` | `string` | `'Assistant'` | Panel header title |
| `model` | `string` | — | Model name badge |
| `messages` | `AssistantChatMessage[]` | required | Message list |
| `placeholder` | `string` | `'Ask anything…'` | Composer placeholder |
| `disabled` | `boolean` | `false` | Disable composer |
| `onSendMessage` | `(content: string) => void` | — | Send handler |
| `onStop` | `() => void` | — | Stop handler (busy state) |

### AssistantChatMessage

| Field | Type | Description |
| ----- | ---- | ----------- |
| `id` | `string` | Unique id |
| `role` | `'user' \| 'assistant' \| 'system'` | Message role |
| `content` | `string` | Text content |
| `streaming` | `boolean?` | Show streaming indicator |
| `toolCalls` | `ChatToolCall[]?` | Tool invocations attached to this message |
