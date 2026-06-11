const ProcessMonitor = ({ taskStatus, mcpStatus }) => {
    return (
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-700 h-full">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Process Monitor</h2>
            
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-400 uppercase mb-2">Agent Status</h3>
                {taskStatus ? (
                    <div className="bg-slate-900 rounded p-3 text-sm">
                        <p><span className="text-slate-500">Status:</span> <span className="text-emerald-400 font-bold">{taskStatus.status}</span></p>
                        <p><span className="text-slate-500">Phase:</span> {taskStatus.currentPhase}</p>
                        <p><span className="text-slate-500">Active Agent:</span> {taskStatus.activeAgent || 'SystemsPlanner'}</p>
                    </div>
                ) : (
                    <p className="text-slate-500 italic text-sm">Fetching status...</p>
                )}
            </div>

            <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase mb-2">MCP Integration</h3>
                {mcpStatus ? (
                    <div className="bg-slate-900 rounded p-3 text-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <span className="font-bold">{mcpStatus.server} Connected</span>
                        </div>
                        <p className="text-slate-500 mb-1">Available Tools:</p>
                        <div className="flex flex-wrap gap-2">
                            {mcpStatus.availableTools.map((tool, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-slate-500 italic text-sm">Checking MCP server...</p>
                )}
            </div>
        </div>
    );
};

export default ProcessMonitor;
