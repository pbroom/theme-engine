import '!./dist/tailwind.css';
import ThemeColor from './theme-color';
import { h } from 'preact';
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



export const CollectionsProvider: <{ children: ReactNode }> = ({ children }) => {
    const [collections, setCollections] = useState<VariableCollection[]>([]);

    return (
        <CollectionsContext.Provider value={{ collections, setCollections }}>
            {children}
        </CollectionsContext.Provider>
    );
};
