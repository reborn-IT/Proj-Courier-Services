import { AppState } from '../RootReducer';

// eslint-disable-next-line max-len
export const getPending = (state: AppState) => state.courierServiceModalState.pending;

export const getCourierServiceModalState = (state: AppState) => {
  if (state.courierServiceModalState.state) {
    return state.courierServiceModalState.state;
  }
  return null;
};
