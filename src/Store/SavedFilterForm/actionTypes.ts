/* eslint-disable max-len */
export const FETCH_SAVED_FILTER_FORM_REQUEST = 'FETCH_SAVED_FILTER_FORM_REQUEST';
export const FETCH_SAVED_FILTER_FORM_SUCCESS = 'FETCH_SAVED_FILTER_FORM_SUCCESS';
export const FETCH_SAVED_FILTER_FORM_FAILURE = 'FETCH_SAVED_FILTER_FORM_FAILURE';

export interface SavedFilterFormState {
    pending: boolean;
    state: boolean | null;
    error: string | null;
}

export interface FetchSavedFilterFormSuccessPayload {
    state: boolean;
}

export interface FetchSavedFilterFormFailurePayload {
    error: string;
}

export interface FetchSavedFilterFormRequest {
    type: typeof FETCH_SAVED_FILTER_FORM_REQUEST;
    payload: boolean;
}

export interface FetchSavedFilterFormSuccess {
    type: typeof FETCH_SAVED_FILTER_FORM_SUCCESS;
    payload: FetchSavedFilterFormSuccessPayload;
}

export interface FetchSavedFilterFormFailure {
    type: typeof FETCH_SAVED_FILTER_FORM_FAILURE;
    payload: FetchSavedFilterFormFailurePayload;
}

export type SavedFilterFormActions =
| FetchSavedFilterFormRequest
| FetchSavedFilterFormSuccess
| FetchSavedFilterFormFailure;
