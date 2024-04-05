import { set } from 'lodash';
import { createContext, h } from 'preact';
import { useContext, useRef, useState } from 'preact/hooks';
import { StateCreator, create, createStore, useStore } from 'zustand';

type MessageType = { type: string; data: any };
type MessageActions = {
    setMessage: (message: MessageType) => void;
};

const message: StateCreator<MessageType & MessageActions> = (set) => ({
    type: '',
    data: null,
    setMessage: (message) => set(message),
});

type MessageStore = ReturnType<typeof createMassageStore>;

type MessageProviderProps = React.PropsWithChildren<MessageType>;

export const MessageProvider = ({
    children,
    ...props
}: MessageProviderProps) => {
    const storeRef = useRef<MessageStore>();
    if (!storeRef.current) {
        storeRef.current = createMassageStore(props);
    }
    return (
        <MessageContext.Provider value={storeRef.current}>
            {children}
        </MessageContext.Provider>
    );
};

export function useMessageContext<T>(selector: (state: MessageType) => T): T {
    const store = useContext(MessageContext);
    if (!store) {
        throw new Error('Missing MessageContext.Provider in the tree');
    }
    return useStore(store, selector);
}

export const MessageContext = createContext<MessageStore | null>(null);

export const createMassageStore = (initProps?: Partial<MessageType>) => {
    const DEFAULT_PROPS = { type: '', data: null } as MessageType;
    return createStore<MessageType & MessageActions>()((set, ...a) => ({
        ...message(set, ...a),
        ...DEFAULT_PROPS,
        ...initProps,
        setMessage: (message) => set(message),
    }));
};

type InitializationType = {
    isInitialized: boolean;
    setIsInitialized: (isInitialized: boolean) => void;
};

export const initialization = create<InitializationType>((set) => ({
    isInitialized: false,
    setIsInitialized: (isInitialized) => set({ isInitialized }),
}));
