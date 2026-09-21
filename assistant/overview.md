# Assistant UI

AI-native interface blocks for building assistant experiences — Copilot panels, agent activity feeds, diff reviews, and prompt composers.

Phase 1 targets **React** (VSCode webview-ready). Vue, Angular, React Native, and Flutter are planned after the React surface stabilizes.

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add chat-panel
npx @galaxy-stack/nebula-cli@latest add agent-activity
npx @galaxy-stack/nebula-cli@latest add diff-review
npx @galaxy-stack/nebula-cli@latest add prompt-box
```

:::

## Why a separate category?

Assistant UIs differ from classic app blocks:

- **Streaming-first** — partial content, blinking cursors, and live status are first-class states.
- **Tool-call aware** — assistant messages carry tool invocations with running/completed/error states.
- **Human-in-the-loop** — diff review blocks are built around accept/reject flows, not passive display.
- **Editor-hosted** — designed to run inside VSCode webviews, sidebars, and panels.

## Components

| Component | Purpose |
| --------- | ------- |
| [Chat Panel](/assistant/chat-panel) | Copilot-style side panel with tool calls |
| [Agent Activity](/assistant/agent-activity) | Task checklist + tool log progress |
| [Diff Review](/assistant/diff-review) | Accept/reject file changes with unified diffs |
| [Prompt Box](/assistant/prompt-box) | Composer with attachments and slash commands |
