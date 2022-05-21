import {
  FetchReviewCardFailurePayload,
  FetchReviewCardStateFailure,
  FetchReviewCardStateRequest,
  FetchReviewCardStateSuccess,
  FetchReviewCardSuccessPayload,
  FETCH_REVIEW_CARD_STATE_FAILURE,
  FETCH_REVIEW_CARD_STATE_REQUEST,
  FETCH_REVIEW_CARD_STATE_SUCCESS,
} from './actionTypes';

export const fetchReviewCardStateRequest = (
  state: boolean,
): FetchReviewCardStateRequest => ({
  type: FETCH_REVIEW_CARD_STATE_REQUEST,
  payload: state,
});

export const fetchReviewCardStateSuccess = (
  payload: FetchReviewCardSuccessPayload,
): FetchReviewCardStateSuccess => ({
  type: FETCH_REVIEW_CARD_STATE_SUCCESS,
  payload,
});

export const fetchReviewCardStateFailure = (
  payload: FetchReviewCardFailurePayload,
): FetchReviewCardStateFailure => ({
  type: FETCH_REVIEW_CARD_STATE_FAILURE,
  payload,
});
