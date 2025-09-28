import { HIDE_LOADING, SHOW_LOADING } from "./constants";
import type { ActionPropsLoading, initialStateLoading } from "./type";

const initialState = {
  isLoading: false,
};

const reducer = (
  state: initialStateLoading = initialState,
  action: ActionPropsLoading
): initialStateLoading => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, isLoading: true };

    case HIDE_LOADING:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
export default reducer;
