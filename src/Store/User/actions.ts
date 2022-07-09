/* eslint-disable comma-dangle */
import {
  FETCH_USER_REGISTER_REQUEST,
  FETCH_USER_REGISTER_SUCCESS,
  FETCH_USER_REGISTER_FAILURE,
  FetchUserRegisterRequest,
  FetchUserRegisterSuccess,
  FetchUserRegisterSuccessPayload,
  FetchUserRegisterFailurePayload,
  User,
} from "./actionTypes";

export const fetchUserRegisterRequest = (
  state: User,
): FetchUserRegisterRequest => ({
  type: FETCH_USER_REGISTER_REQUEST,
  payload: state,
});

export const fetchUserRegisterSuccess = (
  payload: FetchUserRegisterSuccessPayload,
): FetchUserRegisterSuccess => ({
  type: FETCH_USER_REGISTER_SUCCESS,
  payload,
});

export const fetchUserRegisterFailure = (
  payload: FetchUserRegisterFailurePayload,
) => ({
  type: FETCH_USER_REGISTER_FAILURE,
  payload,
});
