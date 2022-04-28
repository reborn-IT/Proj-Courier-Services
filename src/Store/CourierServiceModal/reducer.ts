/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST,
  FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS,
  FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE,
  CourierServiceModalState,
  CourierServiceModalStateActions,
} from './actionTypes';

const initialState: CourierServiceModalState = {
  pending: false,
  state: false,
  error: null,
};

export default (
  state = initialState,
  action: CourierServiceModalStateActions,
) => {
  switch (action.type) {
    case FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST:
      return produce(state, (draft: CourierServiceModalState) => {
        draft.pending = true;
      });
    case FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS:
      return produce(state, (draft: CourierServiceModalState) => {
        draft.pending = false;
        draft.state = !action.payload.state;
        draft.error = null;
      });
    case FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE:
      return produce(state, (draft: CourierServiceModalState) => {
        draft.pending = false;
        draft.state = false;
        draft.error = action.payload.error;
      });
    default: return {
      ...state,
    };
  }
};
