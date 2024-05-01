import { set } from 'lodash';
import { createContext, h } from 'preact';
import { useContext, useRef } from 'preact/hooks';
import { StateCreator, create, createStore, useStore } from 'zustand';

export type MessageProps = { type: string; data: any };
export type MessageActions = {
    setMessage: (message: MessageProps) => void;
};
export type MessageState = MessageProps & MessageActions;

const message: StateCreator<MessageProps & MessageActions> = (set) => ({
    type: '',
    data: null,
    setMessage: (message) => set(message),
});

type MessageStore = ReturnType<typeof createMassageStore>;

type MessageProviderProps = React.PropsWithChildren<MessageProps>;

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

export function useMessageContext<T>(selector: (state: MessageState) => T): T {
    const store = useContext(MessageContext);
    if (!store) {
        throw new Error('Missing MessageContext.Provider in the tree');
    }
    return useStore(store, selector);
}

export const MessageContext = createContext<MessageStore | null>(null);

export const createMassageStore = (initProps?: Partial<MessageProps>) => {
    const DEFAULT_PROPS = { type: '', data: null } as MessageProps;
    return createStore<MessageState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setMessage: (message) => set((state) => ({ ...state, ...message })),
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

export const useMessageStore = create<MessageState>((set) => ({
    type: '',
    data: null,
    setMessage: (message) => set(message),
}));
