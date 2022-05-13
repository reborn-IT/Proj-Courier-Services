import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import { fetchNavigationBarStatusSuccess } from './actions';
import {
  FetchNavigationBarStatusRequest,
  FETCH_NAVIGATION_BAR_STATE_REQUEST,
} from './actionTypes';

function* fetchNavigationBarStatusSagaWorker(
  action: FetchNavigationBarStatusRequest,
) {
  yield put(
    fetchNavigationBarStatusSuccess({
      state: action.payload,
    }),
  );
}

function* fetchNavigationBarStatusSaga() {
  yield all([
    takeLatest(
      FETCH_NAVIGATION_BAR_STATE_REQUEST,
      fetchNavigationBarStatusSagaWorker,
    ),
  ]);
}

export default function* NavigationBarSaga() {
  yield all([
    fork(fetchNavigationBarStatusSaga),
  ]);
}
