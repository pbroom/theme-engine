import React from 'react';
import { Button } from 'figma-kit';

function App() {
	return (
		<div className="flex h-full w-full items-center justify-center p-2 bg-fig-bg">
			<div className="flex flex-col items-center gap-3">
				<div className="opacity-70 text-sm">React 19 + Compiler + figma-kit</div>
				<Button variant="primary" onClick={() => console.log('figma-kit OK')}>
					Test Button
				</Button>
			</div>
		</div>
	);
}

export default App;


