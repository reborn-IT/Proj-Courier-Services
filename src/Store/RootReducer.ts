import { combineReducers } from 'redux';
import ModalStateReducer from './FilterMenuModal/reducer';
import SaveModalReducer from './SaveFilterModal/reducer';

const rootReducer = combineReducers({
  filterMenuState: ModalStateReducer,
  saveModalState: SaveModalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
