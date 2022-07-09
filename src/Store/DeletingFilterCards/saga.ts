/* eslint-disable max-len */
import { all, fork, put, takeLatest } from "redux-saga/effects";
import {
  FetchDeletingFilterLogListRequest,
  FETCH_DELETING_FILTER_LOG_LIST_REQUEST,
} from "./actionTypes";
import { fetchDeletingFilterLogListSuccess } from "./actions";

function* fetchDeltingFilterLogListSagaWorkrer(
  action: FetchDeletingFilterLogListRequest,
) {
  yield put(
    fetchDeletingFilterLogListSuccess({
      state: action.payload,
    }),
  );
}

function* fetchDeletingFilterLogListSaga() {
  yield all([
    takeLatest(
      FETCH_DELETING_FILTER_LOG_LIST_REQUEST,
      fetchDeltingFilterLogListSagaWorkrer,
    ),
  ]);
}

export default function* DeletingFilterLogListSaga() {
  yield all([fork(fetchDeletingFilterLogListSaga)]);
}
