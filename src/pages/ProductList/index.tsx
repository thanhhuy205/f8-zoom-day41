import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/store/product";
import type { Product } from "@/store/product/type";
const ProductList = () => {
  const { products, error } = useProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {error ||
          products?.list.map((item: Product) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
