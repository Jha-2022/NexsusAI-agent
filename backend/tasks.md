# Tasks Tracking Document

## Phase 1: Environment Setup & MCP Server Verification
- [x] Initialize backend environment and package.json.
- [x] Configure `agent.yaml` for MainOrchestrator and sub-agents.
- [ ] Connect and authenticate with the GitLab MCP server.
- [ ] Verify local terminal and code editor permissions for AgentDeveloper.

## Phase 2: Core Logic Implementation & Gemini API Integration
- [x] Create entry point (`index.js`).
- [ ] Load and parse `agent.yaml`.
- [ ] Initialize Antigravity 2.0 SDK for `gemini-3-pro` and `gemini-3.5-flash`.
- [ ] Establish sub-agent routing logic.

## Phase 3: Tool-Calling & Reasoning Loop Execution
- [ ] Implement reasoning loop for MainOrchestrator.
- [ ] Bind tools (`browser`, `code_editor`, `terminal`) to corresponding sub-agents.
- [ ] Add exception handling and logging for tool execution failures.

## Phase 4: API Endpoint Development
- [x] Scaffold `/api/ask-agent` endpoint.
- [x] Scaffold `/api/task-status` endpoint.
- [x] Scaffold `/api/mcptools/status` endpoint.
- [ ] Connect endpoints to live orchestrator logic.
