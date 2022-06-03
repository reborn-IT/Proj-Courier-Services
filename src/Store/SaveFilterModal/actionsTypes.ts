export const FETCH_SAVE_MODAL_STATE_REQUEST = 'FETCH_SAVE_MODAL_STATE_REQUEST';
export const FETCH_SAVE_MODAL_STATE_SUCCESS = 'FETCH_SAVE_MODAL_STATE_SUCCESS';
export const FETCH_SAVE_MODAL_STATE_FAILURE = 'FETCH_SAVE_MODAL_STATE_FAILURE';

export interface SaveMenuModalState {
    pending: boolean;
    state: boolean | null;
    error: string | null;
}

export interface FetchSaveModalStateSuccessPayload {
    state: boolean;
}

export interface FetchSaveModalStateFailurePayload {
    error: string;
}

export interface FetchSaveModalStateRequest {
    type: typeof FETCH_SAVE_MODAL_STATE_REQUEST;
    payload: boolean;
}

export interface FetchSaveModalStateSuccess {
    type: typeof FETCH_SAVE_MODAL_STATE_SUCCESS;
    payload: FetchSaveModalStateSuccessPayload;
}

export interface FetchSaveModalStateFailure {
    type: typeof FETCH_SAVE_MODAL_STATE_FAILURE;
    payload: FetchSaveModalStateFailurePayload;
}

export type SaveModalStateActions =
  | FetchSaveModalStateRequest
  | FetchSaveModalStateSuccess
  | FetchSaveModalStateFailure;
