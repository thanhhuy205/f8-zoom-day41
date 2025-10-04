import type store from "../store";
import type { rootReducer } from "../store";
import type {
  GET_DETAIL,
  GET_LIST,
  SET_DETAIL,
  SET_ERROR,
  SET_LIST,
} from "./constants";

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string;
  brand: string;
  sku: string;
  weight: number;
  minimumOrderQuantity: number;
  thumbnail: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductDetailReturn = Product | null;
export type ActionProps =
  | { type: typeof GET_LIST }
  | { type: typeof SET_LIST; payload: Product[] }
  | { type: typeof GET_DETAIL }
  | { type: typeof SET_DETAIL; payload: Product }
  | { type: typeof SET_ERROR; payload: string };

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type initialStateProduct = {
  list: Product[];
  detail: Product | null;
  error?: string;
};
