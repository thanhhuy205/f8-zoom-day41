import type { HIDE_LOADING, SHOW_LOADING } from "./constants";

export type initialStateLoading = {
  isLoading: boolean;
};
export type ActionPropsLoading =
  | { type: typeof SHOW_LOADING }
  | { type: typeof HIDE_LOADING };
