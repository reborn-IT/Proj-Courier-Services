export const FETCH_MODAL_STATE_REQUEST = "FETCH_MODAL_STATE_REQUEST";
export const FETCH_MODAL_STATE_SUCCESS = "FETCH_MODAL_STATE_SUCCESS";
export const FETCH_MODAL_STATE_FAILURE = "FETCH_MODAL_STATE_FAILURE";

export interface FilterMenuModalState {
  pending: boolean;
  state: boolean;
  error: string | null;
}

export interface FetchModalStateSuccessPayload {
  state: boolean;
}

export interface FetchModalStateFailurePayload {
  error: string;
}

export interface FetchModalStateRequest {
  type: typeof FETCH_MODAL_STATE_REQUEST;
  payload: boolean;
}

export interface FetchModalStateSuccess {
  type: typeof FETCH_MODAL_STATE_SUCCESS;
  payload: FetchModalStateSuccessPayload;
}

export interface FetchModalStateFailure {
  type: typeof FETCH_MODAL_STATE_FAILURE;
  payload: FetchModalStateFailurePayload;
}

export type ModalStateActions =
  | FetchModalStateRequest
  | FetchModalStateSuccess
  | FetchModalStateFailure;
