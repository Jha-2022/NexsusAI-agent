/**
 * License: MIT
 * Copyright (c) 2026 Google Antigravity
 */

import express from 'express';
import cors from 'cors';
import fs from 'fs';
import yaml from 'js-yaml';

const app = express();
app.use(cors());
app.use(express.json());

let orchestratorConfig = null;
try {
  const fileContents = fs.readFileSync('./agent.yaml', 'utf8');
  orchestratorConfig = yaml.load(fileContents);
  console.log("Initializing MainOrchestrator framework...");
  console.log(`Loaded Orchestrator: ${orchestratorConfig.orchestrator.name} (${orchestratorConfig.orchestrator.model})`);
} catch (e) {
  console.log("Warning: Could not load agent.yaml. Continuing with default config.");
}

// ----------------------------------------------------
// API ENDPOINTS FOR FRONTEND CONSUMPTION
// ----------------------------------------------------

app.post('/api/ask-agent', async (req, res) => {
    try {
        const { task } = req.body;
        
        // Mocking the Reasoning Loop Execution
        // Here we would interface with Antigravity 2.0 SDK and MCP server
        
        console.log(`[MainOrchestrator] Received task: ${task}`);
        console.log(`[MainOrchestrator] Delegating to SystemsPlanner...`);
        
        res.json({
            status: 'success',
            result: `Agent successfully processed task: ${task}`,
            sub_agent: 'SystemsPlanner'
        });
    } catch (error) {
        console.error("Tool execution exception:", error);
        res.status(500).json({ status: 'error', error: error.message });
    }
});

app.get('/api/task-status', (req, res) => {
    res.json({ 
        status: 'running', 
        currentPhase: 'Phase 4: API Endpoint Development',
        activeAgent: 'AgentDeveloper' 
    });
});

app.get('/api/mcptools/status', (req, res) => {
    res.json({ 
        status: 'connected', 
        server: 'GitLab', 
        availableTools: ['read_repository', 'create_issue', 'list_commits'] 
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend API Server running on port ${PORT}`);
});
