import {
  FetchCourierServiceLabelStateRequest,
  FetchCourierServiceLabelStateSuccess,
  FetchCourierServiceLabelStateFailure,
  FetchCourierServiceLabelStateSuccessPayload,
  FetchCourierServiceLabelStateFailurePayload,
  FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST,
  FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS,
  FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE,
} from './actionTypes';

export const fetchCourierServiceLabelStateRequest = (
  state: boolean,
): FetchCourierServiceLabelStateRequest => ({
  type: FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST,
  payload: state,
});

export const fetchCourierServiceLabelStateSuccess = (
  payload: FetchCourierServiceLabelStateSuccessPayload,
): FetchCourierServiceLabelStateSuccess => ({
  type: FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS,
  payload,
});

export const fetchCourierServiceLabelStateFailurePayload = (
  payload: FetchCourierServiceLabelStateFailurePayload,
): FetchCourierServiceLabelStateFailure => ({
  type: FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE,
  payload,
});
