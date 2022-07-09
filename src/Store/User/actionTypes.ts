/* eslint-disable max-len */
export const FETCH_USER_REGISTER_REQUEST = "FETCH_USER_REGISTER_REQUEST";
export const FETCH_USER_REGISTER_SUCCESS = "FETCH_USER_REGISTER_SUCCESS";
export const FETCH_USER_REGISTER_FAILURE = "FETCH_USER_REGISTER_FAILURE";

export interface User {
  userid: string;
}

export interface UserState {
  pending: boolean;
  state: User | null;
  error: string | null;
}

export interface FetchUserRegisterSuccessPayload {
  state: User;
}

export interface FetchUserRegisterFailurePayload {
  error: string;
}

export interface FetchUserRegisterRequest {
  type: typeof FETCH_USER_REGISTER_REQUEST;
  payload: User;
}

export interface FetchUserRegisterSuccess {
  type: typeof FETCH_USER_REGISTER_SUCCESS;
  payload: FetchUserRegisterSuccessPayload;
}

export interface FetchUserRegisterFailure {
  type: typeof FETCH_USER_REGISTER_FAILURE;
  payload: FetchUserRegisterFailurePayload;
}

export type UserRegisterActions =
  | FetchUserRegisterRequest
  | FetchUserRegisterSuccess
  | FetchUserRegisterFailure;
