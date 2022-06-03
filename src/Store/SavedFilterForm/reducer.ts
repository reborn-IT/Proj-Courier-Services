/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import produce from 'immer';
import {
  SavedFilterFormState,
  SavedFilterFormActions,
  FETCH_SAVED_FILTER_FORM_REQUEST,
  FETCH_SAVED_FILTER_FORM_SUCCESS,
  FETCH_SAVED_FILTER_FORM_FAILURE,
}
  from './actionTypes';

const initialState: SavedFilterFormState = {
  pending: false,
  state: false,
  error: null,
};

export default (
  state = initialState,
  action: SavedFilterFormActions,
) => {
  switch (action.type) {
    case FETCH_SAVED_FILTER_FORM_REQUEST:
      return produce(state, (draft: SavedFilterFormState) => {
        draft.pending = true;
      });
    case FETCH_SAVED_FILTER_FORM_SUCCESS:
      return produce(state, (draft: SavedFilterFormState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_SAVED_FILTER_FORM_FAILURE:
      return produce(state, (draft: SavedFilterFormState) => {
        draft.pending = false;
        draft.state = null;
        draft.error = action.payload.error;
      });
    default:
      return {
        ...state,
      };
  }
};
