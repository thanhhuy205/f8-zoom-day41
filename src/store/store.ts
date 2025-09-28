import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import { reducer as productReducer } from "@/store/product";
import { reducer as uiReducer } from "@/store/ui";

export const rootReducer = combineReducers({
  product: productReducer,
  ui: uiReducer,
});

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk, logger)
);

export default store;
