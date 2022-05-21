/* eslint-disable max-len */
export const FETCH_REVIEW_CARD_STATE_REQUEST = 'FETCH_REVIEW_CARD_STATE_REQUEST';
export const FETCH_REVIEW_CARD_STATE_SUCCESS = 'FETCH_REVIEW_CARD_STATE_SUCCESS';
export const FETCH_REVIEW_CARD_STATE_FAILURE = 'FETCH_REVIEW_CARD_STATE_FAILURE';

export interface ReviewCardState {
    pending: boolean;
    state: boolean | null;
    error: string | null;
}

export interface FetchReviewCardSuccessPayload {
    state: boolean;
}

export interface FetchReviewCardFailurePayload {
    error: string;
}

export interface FetchReviewCardStateRequest {
    type: typeof FETCH_REVIEW_CARD_STATE_REQUEST;
    payload: boolean;
}

export interface FetchReviewCardStateSuccess {
    type: typeof FETCH_REVIEW_CARD_STATE_SUCCESS;
    payload: FetchReviewCardSuccessPayload;
}

export interface FetchReviewCardStateFailure {
    type: typeof FETCH_REVIEW_CARD_STATE_FAILURE;
    payload: FetchReviewCardFailurePayload;
}

export type ReviewCardStateActions =
| FetchReviewCardStateRequest
| FetchReviewCardStateSuccess
| FetchReviewCardStateFailure;
