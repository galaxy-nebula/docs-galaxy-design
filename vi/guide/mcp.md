---
outline: deep
---

# MCP Server

Galaxy UI có sẵn MCP (Model Context Protocol) server chính thức, cho phép AI assistant — Claude Desktop, Cursor, Windsurf và mọi client MCP — truy vấn dữ liệu component thật thay vì phỏng đoán: manifests, mã nguồn và độ phủ framework.

Package: [`@galaxy-stack/design-mcp`](https://www.npmjs.com/package/@galaxy-stack/design-mcp) · Trang listing: [smithery.ai/servers/galaxy-stack/design-mcp](https://smithery.ai/servers/galaxy-stack/design-mcp)

## Các tools

| Tool | Mô tả |
| --- | --- |
| `list_components` | Liệt kê tất cả component kèm khả dụng theo từng framework |
| `get_component` | Manifest chi tiết của một component (props, files, dependencies) |
| `get_component_source` | Đọc mã nguồn thực tế của một file component |
| `get_coverage` | Ma trận độ phủ trên React, Vue, Angular, React Native, Flutter |
| `search_components` | Tìm component theo tên hoặc mô tả |

Toàn bộ dữ liệu được bundle sẵn trong npm package — không cần clone repository.

## Cài qua Smithery (khuyên dùng)

```bash
npx -y @smithery/cli@latest install galaxy-stack/design-mcp --client claude
```

Client khác: thay `--client claude` bằng `--client cursor`, `--client windsurf`, `--client cline` hoặc `--client vscode`.

## Cài thủ công (npx)

Thêm server vào cấu hình MCP client:

```json
{
  "mcpServers": {
    "galaxy-ui": {
      "command": "npx",
      "args": ["-y", "@galaxy-stack/design-mcp"]
    }
  }
}
```

- **Claude Desktop**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Cursor**: `~/.cursor/mcp.json`

## Remote URL

Smithery đồng thời host một remote MCP endpoint — paste vào client hỗ trợ remote MCP (Claude web Custom Connectors...):

```
https://design-mcp--galaxy-stack.run.tools
```

## Thử ngay

Sau khi kết nối, hỏi assistant:

> Liệt kê các component Galaxy UI cho React

> Cho tôi xem mã nguồn của component Button bản Vue

> Component nào còn thiếu trên Flutter?
