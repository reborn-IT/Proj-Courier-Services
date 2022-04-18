import {
  FetchModalStateFailure,
  FetchModalStateFailurePayload,
  FetchModalStateRequest,
  FetchModalStateSuccess,
  FetchModalStateSuccessPayload,
  FETCH_MODAL_STATE_FAILURE,
  FETCH_MODAL_STATE_REQUEST,
  FETCH_MODAL_STATE_SUCCESS,
} from './actionsTypes';

export const fetchModalStateRequest = (
  state: boolean,
): FetchModalStateRequest => ({
  type: FETCH_MODAL_STATE_REQUEST,
  payload: state,
});

export const fetchModalStateSuccess = (
  payload: FetchModalStateSuccessPayload,
): FetchModalStateSuccess => ({
  type: FETCH_MODAL_STATE_SUCCESS,
  payload,
});

export const fetchModalStateFailure = (
  payload: FetchModalStateFailurePayload,
): FetchModalStateFailure => ({
  type: FETCH_MODAL_STATE_FAILURE,
  payload,
});
