/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import produce from 'immer';
import {
  FETCH_REVIEW_CARD_STATE_FAILURE,
  FETCH_REVIEW_CARD_STATE_REQUEST,
  FETCH_REVIEW_CARD_STATE_SUCCESS,
  ReviewCardState,
  ReviewCardStateActions,
} from './actionTypes';

const initialState: ReviewCardState = {
  pending: false,
  state: false,
  error: null,
};

export default (
  state = initialState,
  action: ReviewCardStateActions,
) => {
  switch (action.type) {
    case FETCH_REVIEW_CARD_STATE_REQUEST:
      return produce(state, (draft: ReviewCardState) => {
        draft.pending = true;
      });
    case FETCH_REVIEW_CARD_STATE_SUCCESS:
      return produce(state, (draft: ReviewCardState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_REVIEW_CARD_STATE_FAILURE:
      return produce(state, (draft: ReviewCardState) => {
        draft.pending = false;
        draft.state = null;
        draft.error = action.payload.error;
      });
    default: return {
      ...state,
    };
  }
};
