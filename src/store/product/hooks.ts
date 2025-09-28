import { actions as productActions } from "@/store/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail, getProducts } from "./selectors";
import type { AppDispatch, Product, RootState } from "./type";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useProducts = () => {
  const state = useSelector(getProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productActions.getList());
  }, [dispatch]);

  return { products: state.list, dispatch };
};

export const useProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const product = useSelector<RootState, Product | null>(getProductDetail);

  useEffect(() => {
    if (slug) {
      dispatch(productActions.getDetail(slug));
    }
  }, [dispatch, slug]);
  return product;
};
