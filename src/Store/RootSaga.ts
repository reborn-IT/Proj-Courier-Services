import { all, fork } from 'redux-saga/effects';
import ModalsSaga from './FilterMenuModal/saga';
import SaveModalsSaga from './SaveFilterModal/saga';
import CourierServiceModalSaga from './CourierServiceModal/saga';
import NavigationBarSaga from './NavigationBar/saga';

export function* rootSaga() {
  yield all(
    [
      fork(ModalsSaga),
      fork(SaveModalsSaga),
      fork(CourierServiceModalSaga),
      fork(NavigationBarSaga),
    ],
  );
}
