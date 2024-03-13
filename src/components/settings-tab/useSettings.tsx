import { create, StateCreator } from 'zustand';

export type SettingsData = {
    overwriteVariables: boolean;
    bindVariables: boolean;
    collectionName: string;
};

export type SettingsActions = {
    setBindVariables: (bindVariables: boolean) => void;
    setOverwriteVariables: (overwriteVariables: boolean) => void;
    setCollectionName: (collectionName: string) => void;
};

const settingsStore: StateCreator<SettingsData & SettingsActions> = (set) => ({
    overwriteVariables: true,
    bindVariables: false,
    collectionName: 'Theme Engine',
    setOverwriteVariables: (overwriteVariables) => set({ overwriteVariables }),
    setBindVariables: (bindVariables) => set({ bindVariables }),
    setCollectionName: (collectionName) => set({ collectionName }),
});

export const useSettings = create<SettingsData & SettingsActions>((set, ...a) =>
    settingsStore(set, ...a),
);
