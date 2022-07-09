import { AppState } from "../RootReducer";

// eslint-disable-next-line max-len
export const getPending = (state: AppState) => state.saveModalState.pending;

export const getSaveModalState = (state: AppState) => {
  if (state.saveModalState.state) {
    return state.saveModalState.state;
  }
  return null;
};
