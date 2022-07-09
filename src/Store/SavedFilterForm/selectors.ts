import { AppState } from "../RootReducer";

// eslint-disable-next-line max-len
export const getPending = (state: AppState) =>
  state.savedFilterFormStatus.pending;

export const getSavedFilterFormState = (state: AppState) => {
  if (state.savedFilterFormStatus.state) {
    return state.savedFilterFormStatus.state;
  }
  return null;
};
