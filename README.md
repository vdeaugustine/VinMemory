# VinMemory

[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/vdeaugustine/VinMemory)](https://gitmcp.io/vdeaugustine/VinMemory)

VinMemory is a public, AI-friendly reference library for curated prompts, guides, and cheatsheets.
It’s designed to work seamlessly with [GitMCP](https://gitmcp.io) so AI tools can connect directly and query this knowledge base.

---

## 📡 Use with GitMCP

**MCP SSE URL:**
[https://gitmcp.io/vdeaugustine/VinMemory](https://gitmcp.io/vdeaugustine/VinMemory)

### Example configs

**Cursor** (`~/.cursor/mcp.json`):

```json
{"mcpServers":{"gitmcp":{"url":"https://gitmcp.io/vdeaugustine/VinMemory"}}}
```

**Claude Desktop** (via `mcp-remote`):

```json
{"mcpServers":{"gitmcp":{"command":"npx","args":["mcp-remote","https://gitmcp.io/vdeaugustine/VinMemory"]}}}
```

**VS Code MCP extensions** (`.vscode/mcp.json`):

```json
{"servers":{"gitmcp":{"type":"sse","url":"https://gitmcp.io/vdeaugustine/VinMemory"}}}
```

---

## 📁 Repository Structure

* **[llms.txt](llms.txt)** — Primary AI-facing index (used by GitMCP first)
* **[llms-full.txt](llms-full.txt)** — Extended index for deep navigation
* **prompts/** — Prompt templates and patterns
* **guides/** — How-to guides and workflow instructions
* **cheatsheets/** — Quick-reference materials
* **assets/** — Images and supplementary files

---

## 🛠 Testing Your MCP Connection

You can verify that VinMemory is live with GitMCP by running:

```bash
npx @modelcontextprotocol/inspector
# Transport: SSE
# URL: https://gitmcp.io/vdeaugustine/VinMemory
```

You should see available MCP tools like `fetch_vinmemory_documentation` and `search_vinmemory_documentation`.

---

*Last updated: 2025-08-10*
