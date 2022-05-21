/* eslint-disable max-len */
export const FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST = 'FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST';
export const FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS = 'FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS';
export const FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE = 'FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE';

export interface CourierServiceLabelState {
    pending: boolean;
    state: boolean | null;
    error: string | null;
}

export interface FetchCourierServiceLabelStateSuccessPayload {
    state: boolean;
}

export interface FetchCourierServiceLabelStateFailurePayload {
    error: string;
}

export interface FetchCourierServiceLabelStateRequest {
    type: typeof FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST;
    payload: boolean;
}

export interface FetchCourierServiceLabelStateSuccess {
    type: typeof FETCH_COURIER_SERVICE_LABEL_STATE_SUCCESS;
    payload: FetchCourierServiceLabelStateSuccessPayload;
}

export interface FetchCourierServiceLabelStateFailure {
    type: typeof FETCH_COURIER_SERVICE_LABEL_STATE_FAILURE;
    payload: FetchCourierServiceLabelStateFailurePayload;
}

export type CourierServiceLabelStateActions =
  | FetchCourierServiceLabelStateRequest
  | FetchCourierServiceLabelStateSuccess
  | FetchCourierServiceLabelStateFailure;
