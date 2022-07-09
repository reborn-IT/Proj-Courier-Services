/* eslint-disable max-len */
import { NORMAL, SCROLLING } from "../../Utils/constants";

export const FETCH_NAVIGATION_BAR_STATE_REQUEST =
  "FETCH_NAVIGATION_BAR_STATE_REQUEST";
export const FETCH_NAVIGATION_BAR_STATE_SUCCESS =
  "FETCH_NAVIGATION_BAR_STATE_SUCCESS";
export const FETCH_NAVIGATION_BAR_STATE_FAILURE =
  "FETCH_NAVIGATION_BAR_STATE_FAILURE";

export interface NavigationBarState {
  pending: boolean;
  state: NORMAL | SCROLLING;
  error: string | null;
}

export interface FetchNavigationBarStatusSuccessPayload {
  state: NORMAL | SCROLLING;
}

export interface FetchNavigationBarStatusFailurePayload {
  error: string;
}

export interface FetchNavigationBarStatusRequest {
  type: typeof FETCH_NAVIGATION_BAR_STATE_REQUEST;
  payload: NORMAL | SCROLLING;
}

export interface FetchNavigationBarStatusSuccess {
  type: typeof FETCH_NAVIGATION_BAR_STATE_SUCCESS;
  payload: FetchNavigationBarStatusSuccessPayload;
}

export interface FetchNavigationBarStatusFailure {
  type: typeof FETCH_NAVIGATION_BAR_STATE_FAILURE;
  payload: FetchNavigationBarStatusFailurePayload;
}

export type NavigationBarStatusActions =
  | FetchNavigationBarStatusRequest
  | FetchNavigationBarStatusSuccess
  | FetchNavigationBarStatusFailure;
