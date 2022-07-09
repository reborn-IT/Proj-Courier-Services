/* eslint-disable max-len */
export const FETCH_DELETING_FILTER_LOG_LIST_REQUEST =
  "FETCH_DELETING_FILTER_LOG_LIST_REQUEST";
export const FETCH_DELETING_FILTER_LOG_LIST_SUCCESS =
  "FETCH_DELETING_FILTER_LOG_LIST_SUCCESS";
export const FETCH_DELETING_FILTER_LOG_LIST_FAILURE =
  "FETCH_DELETING_FILTER_LOG_LIST_FAILURE";

export interface FilterLogListItemI {
  id: number;
}

export interface DeletingFilterLogListState {
  pending: boolean;
  state: FilterLogListItemI[];
  error: string | null;
}

export interface FetchDeletingFilterLogListSuccessPayload {
  state: FilterLogListItemI[];
}

export interface FetchDeletingFilterLogListFailurePayload {
  error: string;
}

export interface FetchDeletingFilterLogListRequest {
  type: typeof FETCH_DELETING_FILTER_LOG_LIST_REQUEST;
  payload: FilterLogListItemI[];
}

export interface FetchDeletingFilterLogListSuccess {
  type: typeof FETCH_DELETING_FILTER_LOG_LIST_SUCCESS;
  payload: FetchDeletingFilterLogListSuccessPayload;
}

export interface FetchDeletingFilterLogListFailure {
  type: typeof FETCH_DELETING_FILTER_LOG_LIST_FAILURE;
  payload: FetchDeletingFilterLogListFailurePayload;
}

export type DeletingFilterLogListActions =
  | FetchDeletingFilterLogListRequest
  | FetchDeletingFilterLogListSuccess
  | FetchDeletingFilterLogListFailure;
