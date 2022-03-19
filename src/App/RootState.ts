import { store } from './store';

export type RootStateInterface = ReturnType<typeof store.getState>;
