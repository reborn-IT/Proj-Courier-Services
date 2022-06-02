import { all, fork } from 'redux-saga/effects';
import ModalsSaga from './FilterMenuModal/saga';
import SaveModalSaga from './SaveFilterModal/saga';
import ServiceLabelSaga from './CourierServiceModal/saga';
import NavigationBarSaga from './NavigationBar/saga';
import ReviewSaga from './ReviewCard/saga';
import DeletingFilterLogListSaga from './DeletingFilterCards/saga';

export function* rootSaga() {
  yield all(
    [
      fork(ModalsSaga),
      fork(SaveModalSaga),
      fork(ServiceLabelSaga),
      fork(NavigationBarSaga),
      fork(ReviewSaga),
      fork(DeletingFilterLogListSaga),
    ],
  );
}
