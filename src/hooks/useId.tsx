import { StateCreator, create, createStore, useStore } from 'zustand';
import { useThemeList } from './useThemeList';
import { subscribeWithSelector } from 'zustand/middleware';
import { ComponentChildren, createContext, h, PreactConsumer } from 'preact';
import { useContext, useRef } from 'preact/hooks';

export interface IdProps {
    themeId: string;
    themeColorId: string;
}

export interface IdState extends IdProps {
    setThemeId: (themeId: string) => void;
    setThemeColorId: (themeColorId: string) => void;
}

export type IdStore = ReturnType<typeof createIdStore>;

export const createIdStore = (initProps?: Partial<IdProps>) => {
    const DEFAULT_PROPS: IdProps = {
        themeId: '',
        themeColorId: '',
    };
    return createStore<IdState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setThemeId: (themeId: string) => set({ themeId: themeId }),
        setThemeColorId: (themeColorId: string) =>
            set({ themeColorId: themeColorId }),
    }));
};

export const IdContext = createContext<IdStore | null>(null);

type IdProviderProps = React.PropsWithChildren<IdProps>;

export const IdProvider = ({ children, ...props }: IdProviderProps) => {
    const storeRef = useRef<IdStore>();
    if (!storeRef.current) {
        storeRef.current = createIdStore(props);
    }
    return (
        <IdContext.Provider value={storeRef.current}>
            {children}
        </IdContext.Provider>
    );
};

export function useIdContext<T>(selector: (state: IdState) => T): T {
    const store = useContext(IdContext);
    if (!store) {
        throw new Error('Missing IdContext.Provider in the tree');
    }
    return useStore(store, selector);
}
