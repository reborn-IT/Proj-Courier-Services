import { combineReducers } from 'redux';
import ModalStateReducer from './FilterMenuModal/reducer';
import SaveModalReducer from './SaveFilterModal/reducer';
import CourierServiceLabelService from './CourierServiceModal/reducer';
import NavigationBarStatusReducer from './NavigationBar/reducer';
import ReviewCardStatusReducer from './ReviewCard/reducer';

const rootReducer = combineReducers({
  filterMenuState: ModalStateReducer,
  saveModalState: SaveModalReducer,
  courierServiceLabelState: CourierServiceLabelService,
  navigationBarStatus: NavigationBarStatusReducer,
  reviewCardStats: ReviewCardStatusReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
