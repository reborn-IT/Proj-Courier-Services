/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import produce from "immer";
import {
  DeletingFilterLogListState,
  DeletingFilterLogListActions,
  FETCH_DELETING_FILTER_LOG_LIST_REQUEST,
  FETCH_DELETING_FILTER_LOG_LIST_SUCCESS,
  FETCH_DELETING_FILTER_LOG_LIST_FAILURE,
} from "./actionTypes";

const initialState: DeletingFilterLogListState = {
  pending: false,
  state: [],
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state = initialState, action: DeletingFilterLogListActions) => {
  switch (action.type) {
    case FETCH_DELETING_FILTER_LOG_LIST_REQUEST:
      return produce(state, (draft: DeletingFilterLogListState) => {
        draft.pending = true;
      });
    case FETCH_DELETING_FILTER_LOG_LIST_SUCCESS:
      return produce(state, (draft: DeletingFilterLogListState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_DELETING_FILTER_LOG_LIST_FAILURE:
      return produce(state, (draft: DeletingFilterLogListState) => {
        draft.pending = false;
        draft.state = [];
        draft.error = action.payload.error;
      });
    default:
      return {
        ...state,
      };
  }
};
