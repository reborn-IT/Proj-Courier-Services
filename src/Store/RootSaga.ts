import { all, fork } from 'redux-saga/effects';
import ModalsSaga from './FilterMenuModal/saga';
import SaveModalsSaga from './SaveFilterModal/saga';
import ServiceLabelSaga from './CourierServiceModal/saga';
import NavigationBarSaga from './NavigationBar/saga';
import ReviewSaga from './ReviewCard/saga';

export function* rootSaga() {
  yield all(
    [
      fork(ModalsSaga),
      fork(SaveModalsSaga),
      fork(ServiceLabelSaga),
      fork(NavigationBarSaga),
      fork(ReviewSaga),
    ],
  );
}
