import { AppState } from "../RootReducer";

// eslint-disable-next-line max-len
export const getPending = (state: AppState) => state.filterMenuState.pending;

export const getModalState = (state: AppState) => {
  if (state.filterMenuState.state) {
    return state.filterMenuState.state;
  }
  return null;
};
