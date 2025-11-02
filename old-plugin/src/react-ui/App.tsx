/** @jsxImportSource react */
import React from 'react';

function App() {
    return (
        <div className="h-full w-full p-2 bg-fig-bg flex items-center justify-center">
            <div className="gap-3 flex flex-col items-center">
                <div className="opacity-70 text-sm">
                    React 19 + Compiler + figma-kit
                </div>
                <button
                    className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                    onClick={() => console.log('UI OK')}
                >
                    Test Button
                </button>
            </div>
        </div>
    );
}

export default App;
