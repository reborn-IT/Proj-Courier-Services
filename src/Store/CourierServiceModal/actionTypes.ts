/* eslint-disable max-len */
export const FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST = 'FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST';
export const FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS = 'FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS';
export const FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE = 'FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE';

export interface CourierServiceModalState {
    pending: boolean;
    state: boolean;
    error: string | null;
}

export interface FetchCourierServiceModalStateSuccessPayload {
    state: boolean;
}

export interface FetchCourierServiceModalStateFailurePayload {
    error: string;
}

export interface FetchCourierServiceModalStateRequest {
    type: typeof FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST;
    payload: boolean;
}

export interface FetchCourierServiceModalStateSuccess {
    type: typeof FETCH_COURIER_SERVICE_MODAL_STATE_SUCCESS;
    payload: FetchCourierServiceModalStateSuccessPayload;
}

export interface FetchCourierServiceModalStateFailure {
    type: typeof FETCH_COURIER_SERVICE_MODAL_STATE_FAILURE;
    payload: FetchCourierServiceModalStateFailurePayload;
}

export type CourierServiceModalStateActions =
  | FetchCourierServiceModalStateRequest
  | FetchCourierServiceModalStateSuccess
  | FetchCourierServiceModalStateFailure;
