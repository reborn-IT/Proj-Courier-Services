import { AppState } from '../RootReducer';

export const getPending = (state: AppState) => state.reviewCardStats.pending;

export const getReviewCardStatus = (state: AppState) => {
  if (state.reviewCardStats.state) {
    return state.reviewCardStats.state;
  }
  return null;
};
