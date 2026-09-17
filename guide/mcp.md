---
outline: deep
---

# MCP Server

Galaxy UI ships an official MCP (Model Context Protocol) server that lets AI assistants — Claude Desktop, Cursor, Windsurf, and any MCP-compatible client — query real component data instead of guessing: manifests, source code, and framework coverage.

Package: [`@galaxy-stack/design-mcp`](https://www.npmjs.com/package/@galaxy-stack/design-mcp) · Listing: [smithery.ai/servers/galaxy-stack/design-mcp](https://smithery.ai/servers/galaxy-stack/design-mcp)

## Tools

| Tool | Description |
| --- | --- |
| `list_components` | List all components with per-framework availability |
| `get_component` | Detailed manifest for one component (props, files, dependencies) |
| `get_component_source` | Read the actual source code of a component file |
| `get_coverage` | Coverage matrix across React, Vue, Angular, React Native, Flutter |
| `search_components` | Search components by name or description |

All data is bundled inside the npm package — no repository checkout required.

## Install via Smithery (recommended)

```bash
npx -y @smithery/cli@latest install galaxy-stack/design-mcp --client claude
```

Other clients: replace `--client claude` with `--client cursor`, `--client windsurf`, `--client cline`, or `--client vscode`.

## Install manually (npx)

Add the server to your MCP client configuration:

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

Smithery also hosts a remote endpoint — paste it into any client that supports remote MCP connections (Claude web Custom Connectors, etc.):

```
https://design-mcp--galaxy-stack.run.tools
```

## Try it

After connecting, ask your assistant:

> List Galaxy UI components for React

> Show me the source code of the Vue Select component

> Which components are missing in Flutter?
