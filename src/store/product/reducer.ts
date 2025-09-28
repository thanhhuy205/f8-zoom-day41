// Initial state: { list: [], detail: null }
// Handle các action types tương ứng
// Important: Immutable updates, không mutate state trực tiếp
import { GET_DETAIL, GET_LIST, SET_DETAIL, SET_LIST } from "./constants";
import type { ActionProps, initialStateProduct } from "./type";

const initialState: initialStateProduct = { list: [], detail: null };

const reducer = (
  state: initialStateProduct = initialState,
  action: ActionProps
): initialStateProduct => {
  switch (action.type) {
    case GET_DETAIL:
      return { ...state, detail: null };

    case GET_LIST:
      return { ...state, detail: null };

    case SET_LIST:
      return { ...state, list: action.payload, detail: null };

    case SET_DETAIL:
      return { ...state, detail: action.payload };

    default:
      return state;
  }
};


export default reducer;
