import '!./dist/tailwind.css';
import { ReactNode } from 'react';
import ThemeColor from './theme-color';
import { createContext, h } from 'preact';
import { useState, useContext } from 'preact/hooks';

interface CollectionsContextValue {
	collections: VariableCollection[];
	setCollections: React.Dispatch<React.SetStateAction<VariableCollection[]>>;
}

const CollectionsContext = createContext<CollectionsContextValue>({
	collections: [],
	setCollections: () => {},
});

export const useCollections = () => useContext(CollectionsContext);

export const CollectionsProvider = ({ children }: { children: ReactNode }) => {
	const [collections, setCollections] = useState<VariableCollection[]>([]);

	return (
		<CollectionsContext.Provider value={{ collections, setCollections }}>
			{children}
		</CollectionsContext.Provider>
	);
};
