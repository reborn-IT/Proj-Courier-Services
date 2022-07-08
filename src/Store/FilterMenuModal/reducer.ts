/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import produce from "immer";
import {
  FETCH_MODAL_STATE_FAILURE,
  FETCH_MODAL_STATE_REQUEST,
  FETCH_MODAL_STATE_SUCCESS,
  FilterMenuModalState,
  ModalStateActions,
} from "./actionsTypes";

const initialState: FilterMenuModalState = {
  pending: false,
  state: false,
  error: null,
};

export default (state = initialState, action: ModalStateActions) => {
  switch (action.type) {
    case FETCH_MODAL_STATE_REQUEST:
      return produce(state, (draft: FilterMenuModalState) => {
        draft.pending = true;
      });
    case FETCH_MODAL_STATE_SUCCESS:
      return produce(state, (draft: FilterMenuModalState) => {
        draft.pending = false;
        draft.state = !action.payload.state;
        draft.error = null;
      });
    case FETCH_MODAL_STATE_FAILURE:
      return produce(state, (draft: FilterMenuModalState) => {
        draft.pending = false;
        draft.state = false;
        draft.error = action.payload.error;
      });
    default:
      return {
        ...state,
      };
  }
};
