/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  FETCH_NAVIGATION_BAR_STATE_FAILURE,
  FETCH_NAVIGATION_BAR_STATE_REQUEST,
  FETCH_NAVIGATION_BAR_STATE_SUCCESS,
  NavigationBarState,
  NavigationBarStatusActions,
} from './actionTypes';

const initialState: NavigationBarState = {
  pending: false,
  state: 'normal',
  error: null,
};

export default (
  state = initialState,
  action: NavigationBarStatusActions,
) => {
  switch (action.type) {
    case FETCH_NAVIGATION_BAR_STATE_REQUEST:
      return produce(state, (draft: NavigationBarState) => {
        draft.pending = true;
      });
    case FETCH_NAVIGATION_BAR_STATE_SUCCESS:
      return produce(state, (draft: NavigationBarState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_NAVIGATION_BAR_STATE_FAILURE:
      return produce(state, (draft: NavigationBarState) => {
        draft.pending = false;
        draft.state = 'normal';
        draft.error = action.payload.error;
      });
    default: return {
      ...state,
    };
  }
};
