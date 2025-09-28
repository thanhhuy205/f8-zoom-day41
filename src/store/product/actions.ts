import http from "@/utils/http";
import { hideLoading } from "../ui/actions";
import { GET_LIST, SET_DETAIL, SET_LIST } from "./constants";
import type { AppDispatch, Product } from "./type";
export const getList = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: GET_LIST,
    });

    try {
      const response = await http.get("/products");
      dispatch(setList(response.data.items));
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
};

export const getDetail = (slug: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(`/products/${slug}`);
      dispatch(setDetail(response.data));
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    } finally {
      dispatch(hideLoading());
    }
  };
};

const setList = (payload: Product[]) => {
  return {
    type: SET_LIST,
    payload,
  };
};

const setDetail = (payload: Product) => {
  return {
    type: SET_DETAIL,
    payload,
  };
};
