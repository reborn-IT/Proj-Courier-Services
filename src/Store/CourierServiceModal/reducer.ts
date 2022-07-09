/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import produce from "immer";
import {
  FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST,
  FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS,
  FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE,
  CourierServiceLabelState,
  CourierServiceLabelStateActions,
} from "./actionTypes";

const initialState: CourierServiceLabelState = {
  pending: false,
  state: null,
  error: null,
};

export default (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: CourierServiceLabelStateActions,
) => {
  switch (action.type) {
    case FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST:
      return produce(state, (draft: CourierServiceLabelState) => {
        draft.pending = true;
      });
    case FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS:
      return produce(state, (draft: CourierServiceLabelState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE:
      return produce(state, (draft: CourierServiceLabelState) => {
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
