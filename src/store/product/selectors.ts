import type { RootState } from "./type";

export const getProducts = (state: RootState) => state.product;
export const getProductDetail = (state: RootState) => state.product.detail;
