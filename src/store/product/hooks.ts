import { actions as productActions } from "@/store/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectors as productSelectors } from "./index";
import type { AppDispatch, Product, RootState } from "./type";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useProducts = () => {
  const products = useSelector(productSelectors.selectList);
  const error = useSelector(productSelectors.selectProductError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!products || products.list.length === 0) {
      dispatch(productActions.getList());
    }
  }, [dispatch]);

  return { products, error };
};

export const useProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const product = useSelector<RootState, Product | null>(
    productSelectors.selectDetail
  );

  useEffect(() => {
    if (slug) {
      dispatch(productActions.getDetail(slug));
    }
  }, [dispatch, slug]);
  return product;
};
