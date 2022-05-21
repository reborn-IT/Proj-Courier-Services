import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import { fetchCourierServiceLabelStateSuccess } from './actions';
import {
  FetchCourierServiceLabelStateRequest,
  FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST,
} from './actionTypes';

function* fetchCourierServiceLabelStateSagaWorker(
  action: FetchCourierServiceLabelStateRequest,
) {
  yield put(
    fetchCourierServiceLabelStateSuccess({
      state: action.payload,
    }),
  );
}

function* fetchCourierServiceLabelStateSaga() {
  yield all([
    takeLatest(
      FETCH_COURIER_SERVICE_LABEL_STATE_REQUEST,
      fetchCourierServiceLabelStateSagaWorker,
    ),
  ]);
}

export default function* ServiceLabelSaga() {
  yield all([
    fork(fetchCourierServiceLabelStateSaga),
  ]);
}
