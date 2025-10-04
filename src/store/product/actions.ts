import http from "@/utils/http";
import { hideLoading, showLoading } from "../ui/actions";
import { GET_LIST, SET_DETAIL, SET_ERROR, SET_LIST } from "./constants";
import type { AppDispatch, Product } from "./type";
export const getList = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: GET_LIST,
    });
    dispatch(showLoading());
    dispatch(setError(null));

    try {
      const response = await http.get("/products");
      const items = Array.isArray(response.data?.items)
        ? response.data.items
        : [];
      dispatch(setList(items));
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(hideLoading());
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const getDetail = (slug: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    dispatch(setError(null));

    try {
      const response = await http.get(`/products/${slug}`);
      dispatch(setDetail(response.data));
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(hideLoading());
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const setList = (payload: Product[]) => {
  return {
    type: SET_LIST,
    payload,
  };
};

export const setDetail = (payload: Product) => {
  return {
    type: SET_DETAIL,
    payload,
  };
};

export const setError = (payload: string | null) => {
  return {
    type: SET_ERROR,
    payload,
  };
};
