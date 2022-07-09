import { NORMAL, SCROLLING } from "../../Utils/constants";
import {
  FetchNavigationBarStatusFailure,
  FetchNavigationBarStatusFailurePayload,
  FetchNavigationBarStatusRequest,
  FetchNavigationBarStatusSuccess,
  FetchNavigationBarStatusSuccessPayload,
  FETCH_NAVIGATION_BAR_STATE_FAILURE,
  FETCH_NAVIGATION_BAR_STATE_REQUEST,
  FETCH_NAVIGATION_BAR_STATE_SUCCESS,
} from "./actionTypes";

export const fetchNavigationBarStatusRequest = (
  state: NORMAL | SCROLLING,
): FetchNavigationBarStatusRequest => ({
  type: FETCH_NAVIGATION_BAR_STATE_REQUEST,
  payload: state,
});

export const fetchNavigationBarStatusSuccess = (
  payload: FetchNavigationBarStatusSuccessPayload,
): FetchNavigationBarStatusSuccess => ({
  type: FETCH_NAVIGATION_BAR_STATE_SUCCESS,
  payload,
});

export const fetchNavigationBarStatusFailure = (
  payload: FetchNavigationBarStatusFailurePayload,
): FetchNavigationBarStatusFailure => ({
  type: FETCH_NAVIGATION_BAR_STATE_FAILURE,
  payload,
});
