import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import { fetchModalStateSuccess } from './actions';
import {
  FetchModalStateRequest,
  FETCH_MODAL_STATE_REQUEST,
} from './actionsTypes';

function* fetchModalStateSagaWorker(action: FetchModalStateRequest) {
  yield put(
    fetchModalStateSuccess({
      state: action.payload,
    }),
  );
}

function* fetchModalStateSaga() {
  yield all([
    takeLatest(FETCH_MODAL_STATE_REQUEST, fetchModalStateSagaWorker),
  ]);
}

export default function* ModalsSaga() {
  yield all([
    fork(fetchModalStateSaga),
  ]);
}
