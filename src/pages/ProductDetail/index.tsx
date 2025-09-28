import { useProductDetail } from "@/store/product";
import type { ProductDetailReturn } from "@/store/product/type";
import { showLoading } from "@/store/ui/actions";
import { useLoading } from "@/store/ui/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const ProductDetail = () => {
  const navigate = useNavigate();
  const product: ProductDetailReturn = useProductDetail();
  const dispatch = useLoading();

  useEffect(() => {
    if (!product) {
      dispatch(showLoading());
    }
  }, [product, dispatch]);

  if (!product)
    return (
      <div className="p-6 text-center text-gray-500">No product selected</div>
    );
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-6">
      <button
        onClick={() => navigate("/products")}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
      >
        &larr; Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        />

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-2">
              <span className="text-green-600 font-bold text-xl">
                ${product.price}
              </span>
              <span className="text-slate-500 font-semibold">
                {product.rating}
              </span>
            </div>

            <p className="text-gray-500 text-sm">
              Stock: {product.stock} | SKU: {product.sku} | {product.weight} kg
            </p>
          </div>

          <button className="mt-4 w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
