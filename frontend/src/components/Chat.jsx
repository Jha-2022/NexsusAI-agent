import { useState } from 'react';
import { Send } from 'lucide-react';

const Chat = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSubmit(input);
            setInput('');
        }
    };

    return (
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-700">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Agent Command Interface</h2>
            <div className="flex-1 overflow-y-auto mb-4 h-32 flex flex-col justify-end">
                {/* Chat history could be rendered here */}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter task or command for Antigravity Orchestrator..."
                    className="flex-1 bg-slate-900 border border-slate-600 rounded px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
                <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-colors"
                >
                    <Send size={18} /> Send
                </button>
            </form>
        </div>
    );
};

export default Chat;
