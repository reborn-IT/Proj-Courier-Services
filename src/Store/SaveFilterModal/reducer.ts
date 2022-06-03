/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  FETCH_SAVE_MODAL_STATE_REQUEST,
  FETCH_SAVE_MODAL_STATE_SUCCESS,
  FETCH_SAVE_MODAL_STATE_FAILURE,
  SaveMenuModalState,
  SaveModalStateActions,
} from './actionsTypes';

const initialState: SaveMenuModalState = {
  pending: false,
  state: false,
  error: null,
};

export default (
  state = initialState,
  action: SaveModalStateActions,
) => {
  switch (action.type) {
    case FETCH_SAVE_MODAL_STATE_REQUEST:
      return produce(state, (draft: SaveMenuModalState) => {
        draft.pending = true;
      });
    case FETCH_SAVE_MODAL_STATE_SUCCESS:
      return produce(state, (draft: SaveMenuModalState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_SAVE_MODAL_STATE_FAILURE:
      return produce(state, (draft: SaveMenuModalState) => {
        draft.pending = false;
        draft.state = null;
        draft.error = action.payload.error;
      });
    default: return {
      ...state,
    };
  }
};
