import { useState, useEffect } from 'react';
import Chat from './components/Chat';
import ProcessMonitor from './components/ProcessMonitor';
import OutputView from './components/OutputView';
import { askAgent, getTaskStatus, getMcpStatus } from './services/apiService';

function App() {
    const [taskStatus, setTaskStatus] = useState(null);
    const [mcpStatus, setMcpStatus] = useState(null);
    const [latestResult, setLatestResult] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const ts = await getTaskStatus();
                setTaskStatus(ts);
                const ms = await getMcpStatus();
                setMcpStatus(ms);
            } catch (err) {
                console.error("Error fetching status from backend:", err);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 5000); // poll every 5s
        return () => clearInterval(interval);
    }, []);

    const handleTaskSubmit = async (task) => {
        setLatestResult(null); // clear previous
        try {
            const res = await askAgent(task);
            setLatestResult(res);
        } catch (err) {
            setLatestResult({ status: 'error', result: err.message });
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                    NexusAI Control Center
                </h1>
                <p className="text-slate-400 text-sm mt-1">Powered by Antigravity 2.0 & Gemini 3 Pro</p>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <Chat onSubmit={handleTaskSubmit} />
                    <div className="flex-1">
                        <OutputView result={latestResult} />
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <ProcessMonitor taskStatus={taskStatus} mcpStatus={mcpStatus} />
                </div>
            </main>
        </div>
    );
}

export default App;
