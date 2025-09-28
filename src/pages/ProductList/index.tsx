import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/store/product";
import type { Product } from "@/store/product/type";
import { hideLoading, showLoading } from "@/store/ui/actions";
import { useLoading } from "@/store/ui/hook";
import { useEffect } from "react";
const ProductList = () => {
  const { products } = useProducts();
  const dispatch = useLoading();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(showLoading());
    } else {
      dispatch(hideLoading());
    }
  }, [products, dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((item: Product) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
