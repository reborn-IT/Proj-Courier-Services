import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import { fetchCourierServiceModalStateSuccess } from './actions';
import {
  FetchCourierServiceModalStateRequest,
  FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST,
} from './actionTypes';

function* fetchCourierServiceModalStateSagaWorker(
  action: FetchCourierServiceModalStateRequest,
) {
  yield put(
    fetchCourierServiceModalStateSuccess({
      state: action.payload,
    }),
  );
}

function* fetchCourierServiceModalStateSaga() {
  yield all([
    takeLatest(
      FETCH_COURIER_SERVICE_MODAL_STATE_REQUEST,
      fetchCourierServiceModalStateSagaWorker,
    ),
  ]);
}

export default function* ModalsSaga() {
  yield all([
    fork(fetchCourierServiceModalStateSaga),
  ]);
}
