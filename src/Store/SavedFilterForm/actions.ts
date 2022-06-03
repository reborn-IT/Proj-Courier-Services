import {
  FetchSavedFilterFormFailure,
  FetchSavedFilterFormFailurePayload,
  FetchSavedFilterFormRequest,
  FetchSavedFilterFormSuccess,
  FetchSavedFilterFormSuccessPayload,
  FETCH_SAVED_FILTER_FORM_FAILURE,
  FETCH_SAVED_FILTER_FORM_REQUEST,
  FETCH_SAVED_FILTER_FORM_SUCCESS,
} from './actionTypes';

export const fetchSavedFilterFormRequest = (
  state: boolean,
): FetchSavedFilterFormRequest => ({
  type: FETCH_SAVED_FILTER_FORM_REQUEST,
  payload: state,
});

export const fetchSavedFilterFormSuccess = (
  payload: FetchSavedFilterFormSuccessPayload,
): FetchSavedFilterFormSuccess => ({
  type: FETCH_SAVED_FILTER_FORM_SUCCESS,
  payload,
});

export const fetchSavedFilterFormFailure = (
  payload: FetchSavedFilterFormFailurePayload,
): FetchSavedFilterFormFailure => ({
  type: FETCH_SAVED_FILTER_FORM_FAILURE,
  payload,
});
