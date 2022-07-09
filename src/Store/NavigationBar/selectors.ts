import { AppState } from "../RootReducer";

// eslint-disable-next-line max-len
export const getPending = (state: AppState) =>
  state.navigationBarStatus.pending;

export const getNavigationBarStatus = (state: AppState) => {
  if (state.navigationBarStatus.state) {
    return state.navigationBarStatus.state;
  }
  return null;
};
