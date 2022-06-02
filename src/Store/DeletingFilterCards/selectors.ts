import { AppState } from '../RootReducer';

// eslint-disable-next-line max-len
export const getPending = (state: AppState) => state.deletingFilterLogListStatus.pending;

export const getDeletingFilterLogList = (state: AppState) => {
  if (state.deletingFilterLogListStatus.state) {
    return state.deletingFilterLogListStatus.state;
  }
  return null;
};
