import { all, fork, put, takeLatest } from "redux-saga/effects";
import { fetchSaveModalStateSuccess } from "./actions";
import {
  FetchSaveModalStateRequest,
  FETCH_SAVE_MODAL_STATE_REQUEST,
} from "./actionsTypes";

function* fetchSaveModalStateSagaWorker(action: FetchSaveModalStateRequest) {
  yield put(
    fetchSaveModalStateSuccess({
      state: action.payload,
    }),
  );
}

function* fetchSaveModalStateSaga() {
  yield all([
    takeLatest(FETCH_SAVE_MODAL_STATE_REQUEST, fetchSaveModalStateSagaWorker),
  ]);
}

export default function* SaveModalsSaga() {
  yield all([fork(fetchSaveModalStateSaga)]);
}
