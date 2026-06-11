import { CheckCircle, AlertCircle } from 'lucide-react';

const OutputView = ({ result }) => {
    return (
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-700 h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Task Output View</h2>
            <div className="flex-1 bg-slate-900 rounded border border-slate-700 p-4 overflow-y-auto">
                {result ? (
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400">
                            {result.status === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} className="text-red-400" />}
                            <span className="font-semibold capitalize">{result.status}</span>
                        </div>
                        <p className="text-slate-300 whitespace-pre-wrap">{result.result}</p>
                        {result.sub_agent && (
                            <p className="text-sm text-slate-500 mt-4 border-t border-slate-800 pt-2">
                                Executed by: <span className="text-emerald-500">{result.sub_agent}</span>
                            </p>
                        )}
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-slate-600 italic">
                        No tasks executed yet. Submit a command to view output.
                    </div>
                )}
            </div>
        </div>
    );
};

export default OutputView;
