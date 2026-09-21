# Diff Review

AI code review panel with file-level accept/reject, per-file unified diff view, and summary stats for additions and deletions.

<ComponentPreview name="DiffReviewDemo">
  <template #preview>
    <DemoContainer>
      <DiffReviewDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add diff-review
```

:::

## Usage

```tsx
import { DiffReview, type DiffFile } from '@/components/assistant/diff-review';

const files: DiffFile[] = [
  {
    path: 'src/auth/service.ts',
    additions: 12,
    deletions: 4,
    status: 'pending',
    lines: [
      '  async login(email: string) {',
      '-   return this.http.post("/login", { email });',
      '+   const res = await this.http.post("/login", { email });',
      '+   return this.withSession(res);',
      '  }',
    ],
  },
];

<DiffReview
  files={files}
  onAccept={(path) => accept(path)}
  onReject={(path) => reject(path)}
  onAcceptAll={() => acceptAll()}
  onRejectAll={() => rejectAll()}
/>
```

## Features

- ✅ **File-level review** — accept/reject per file with visual state
- ✅ **Unified diff view** — syntax-colored add/delete lines
- ✅ **Summary stats** — file count, additions, deletions, pending
- ✅ **Bulk actions** — Accept all / Reject all
- ✅ **Expandable** — click file header to toggle diff body

## API Reference

### DiffReviewProps

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `files` | `DiffFile[]` | Changed files with unified diff lines |
| `onAccept` | `(path: string) => void` | Accept one file |
| `onReject` | `(path: string) => void` | Reject one file |
| `onAcceptAll` | `() => void` | Accept all pending |
| `onRejectAll` | `() => void` | Reject all pending |

### DiffFile

| Field | Type | Description |
| ----- | ---- | ----------- |
| `path` | `string` | File path |
| `additions` / `deletions` | `number` | Line stats |
| `lines` | `string[]` | Unified diff lines (`+`/`-`/space prefix) |
| `status` | `'pending' \| 'accepted' \| 'rejected'` | Review state |
