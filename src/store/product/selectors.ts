import type { RootState } from "./type";

export const selectList = (state: RootState) => state.product;
export const selectDetail = (state: RootState) => state.product.detail;
export const selectProductError = (state: RootState) => state.product?.error;
