import { combineReducers } from 'redux';
import ModalStateReducer from './FilterMenuModal/reducer';
import SaveModalReducer from './SaveFilterModal/reducer';
import CourierServiceModalService from './CourierServiceModal/reducer';
import NavigationBarStatusReducer from './NavigationBar/reducer';

const rootReducer = combineReducers({
  filterMenuState: ModalStateReducer,
  saveModalState: SaveModalReducer,
  courierServiceModalState: CourierServiceModalService,
  navigationBarStatus: NavigationBarStatusReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
