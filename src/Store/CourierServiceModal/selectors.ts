import { AppState } from '../RootReducer';

// eslint-disable-next-line max-len
export const getPending = (state: AppState) => state.courierServiceLabelState.pending;

export const getCourierServiceModalState = (state: AppState) => {
  if (state.courierServiceLabelState.state) {
    return state.courierServiceLabelState.state;
  }
  return null;
};
