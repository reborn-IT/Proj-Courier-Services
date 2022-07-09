import { combineReducers } from "redux";
import ModalStateReducer from "./FilterMenuModal/reducer";
import SaveModalReducer from "./SaveFilterModal/reducer";
import CourierServiceLabelService from "./CourierServiceModal/reducer";
import NavigationBarStatusReducer from "./NavigationBar/reducer";
import ReviewCardStatusReducer from "./ReviewCard/reducer";
import DeletingFilterLogListReducer from "./DeletingFilterCards/reducer";
import SavedFilterFormReducer from "./SavedFilterForm/reducer";

const rootReducer = combineReducers({
  filterMenuState: ModalStateReducer,
  saveModalState: SaveModalReducer,
  courierServiceLabelState: CourierServiceLabelService,
  navigationBarStatus: NavigationBarStatusReducer,
  reviewCardStats: ReviewCardStatusReducer,
  deletingFilterLogListStatus: DeletingFilterLogListReducer,
  savedFilterFormStatus: SavedFilterFormReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
