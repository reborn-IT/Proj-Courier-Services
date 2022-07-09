import {
  FetchSaveModalStateFailurePayload,
  FetchSaveModalStateSuccessPayload,
  FetchSaveModalStateRequest,
  FetchSaveModalStateSuccess,
  FetchSaveModalStateFailure,
  FETCH_SAVE_MODAL_STATE_FAILURE,
  FETCH_SAVE_MODAL_STATE_REQUEST,
  FETCH_SAVE_MODAL_STATE_SUCCESS,
} from "./actionsTypes";

export const fetchSaveModalStateRequest = (
  state: boolean,
): FetchSaveModalStateRequest => ({
  type: FETCH_SAVE_MODAL_STATE_REQUEST,
  payload: state,
});

export const fetchSaveModalStateSuccess = (
  payload: FetchSaveModalStateSuccessPayload,
): FetchSaveModalStateSuccess => ({
  type: FETCH_SAVE_MODAL_STATE_SUCCESS,
  payload,
});

export const fetchSaveModalStateFailure = (
  payload: FetchSaveModalStateFailurePayload,
): FetchSaveModalStateFailure => ({
  type: FETCH_SAVE_MODAL_STATE_FAILURE,
  payload,
});
