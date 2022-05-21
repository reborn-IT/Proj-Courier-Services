import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import {
  FetchReviewCardStateRequest,
  FETCH_REVIEW_CARD_STATE_REQUEST,
} from './actionTypes';
import {
  fetchReviewCardStateSuccess,
} from './actions';

function* fetchReviewStateSagaWorker(action: FetchReviewCardStateRequest) {
  yield put(
    fetchReviewCardStateSuccess({
      state: action.payload,
    }),
  );
}

function* fetchReviewStateSaga() {
  yield all([
    takeLatest(FETCH_REVIEW_CARD_STATE_REQUEST, fetchReviewStateSagaWorker),
  ]);
}

export default function* ReviewSaga() {
  yield all([
    fork(fetchReviewStateSaga),
  ]);
}
