import {
  FetchCourierServiceModalStateRequest,
  FetchCourierServiceModalStateSuccess,
  FetchCourierServiceModalStateFailure,
  FetchCourierServiceModalStateSuccessPayload,
  FetchCourierServiceModalStateFailurePayload,
  FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS,
  FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST,
  FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE,
} from './actionTypes';

export const fetchCourierServiceModalStateRequest = (
  state: boolean,
): FetchCourierServiceModalStateRequest => ({
  type: FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST,
  payload: state,
});

export const fetchCourierServiceModalStateSuccess = (
  payload: FetchCourierServiceModalStateSuccessPayload,
): FetchCourierServiceModalStateSuccess => ({
  type: FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS,
  payload,
});

export const fetchCourierServicedalStateFailurePayload = (
  payload: FetchCourierServiceModalStateFailurePayload,
): FetchCourierServiceModalStateFailure => ({
  type: FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE,
  payload,
});
