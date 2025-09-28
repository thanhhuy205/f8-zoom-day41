// showLoading(): Action để show loading
// hideLoading(): Action để hide loading
import { HIDE_LOADING, SHOW_LOADING } from "./constants";

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
};
