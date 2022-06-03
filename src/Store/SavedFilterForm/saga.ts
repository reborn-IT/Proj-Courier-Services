import {
  all, fork, put, takeLatest,
} from 'redux-saga/effects';
import {
  fetchSavedFilterFormSuccess,
} from './actions';
import {
  FetchSavedFilterFormRequest,
  FETCH_SAVED_FILTER_FORM_REQUEST,
} from './actionTypes';

function* fetchSavedFilterFormSagaWorker(action: FetchSavedFilterFormRequest) {
  yield put(
    fetchSavedFilterFormSuccess({
      state: action.payload,
    }),
  );
}

function* fetchSavedFilterFormSaga() {
  yield all([
    takeLatest(FETCH_SAVED_FILTER_FORM_REQUEST, fetchSavedFilterFormSagaWorker),
  ]);
}

export default function* SavedFilterFormSaga() {
  yield all([
    fork(fetchSavedFilterFormSaga),
  ]);
}
