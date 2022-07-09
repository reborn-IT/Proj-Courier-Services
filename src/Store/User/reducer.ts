/* eslint-disable no-param-reassign,comma-dangle */
/* eslint-disable default-param-last */

import produce from "immer";
import {
  FETCH_USER_REGISTER_FAILURE,
  FETCH_USER_REGISTER_REQUEST,
  FETCH_USER_REGISTER_SUCCESS,
  UserRegisterActions,
  UserState,
} from "./actionTypes";

const initialState: UserState = {
  pending: false,
  state: null,
  error: null,
};

export default (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: UserState = initialState,
  action: UserRegisterActions,
) => {
  switch (action.type) {
    case FETCH_USER_REGISTER_REQUEST:
      return produce(state, (draft: UserState) => {
        draft.pending = true;
      });
    case FETCH_USER_REGISTER_SUCCESS:
      return produce(state, (draft: UserState) => {
        draft.pending = false;
        draft.state = action.payload.state;
        draft.error = null;
      });
    case FETCH_USER_REGISTER_FAILURE:
      return produce(state, (draft: UserState) => {
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
