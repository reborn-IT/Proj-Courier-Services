import {
  FetchDeletingFilterLogListFailure,
  FetchDeletingFilterLogListFailurePayload,
  FetchDeletingFilterLogListRequest,
  FetchDeletingFilterLogListSuccess,
  FetchDeletingFilterLogListSuccessPayload,
  FETCH_DELETING_FILTER_LOG_LIST_FAILURE,
  FETCH_DELETING_FILTER_LOG_LIST_REQUEST,
  FETCH_DELETING_FILTER_LOG_LIST_SUCCESS,
  FilterLogListItemI,
} from "./actionTypes";

export const fetchDeletingFilterLogListRequest = (
  state: FilterLogListItemI[],
): FetchDeletingFilterLogListRequest => ({
  type: FETCH_DELETING_FILTER_LOG_LIST_REQUEST,
  payload: state,
});

export const fetchDeletingFilterLogListSuccess = (
  payload: FetchDeletingFilterLogListSuccessPayload,
): FetchDeletingFilterLogListSuccess => ({
  type: FETCH_DELETING_FILTER_LOG_LIST_SUCCESS,
  payload,
});

export const fetchDeletingFilterLogListFailure = (
  payload: FetchDeletingFilterLogListFailurePayload,
): FetchDeletingFilterLogListFailure => ({
  type: FETCH_DELETING_FILTER_LOG_LIST_FAILURE,
  payload,
});
