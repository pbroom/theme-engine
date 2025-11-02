import React from 'react';

function App() {
	return (
		<div className="flex h-full w-full items-center justify-center p-2 bg-fig-bg">
			<div className="flex flex-col items-center gap-3">
				<div className="opacity-70 text-sm">React 19 + Compiler + figma-kit</div>
                <button
                    className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => console.log('UI OK')}
                >
                    Test Button
                </button>
			</div>
		</div>
	);
}

export default App;


