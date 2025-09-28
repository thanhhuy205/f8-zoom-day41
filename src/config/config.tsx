import DefaultLayout from "@/layouts/DefaultLayout";
import ProductDetail from "@/pages/ProductDetail";
import ProductList from "@/pages/ProductList";
import type { RouteObject } from "react-router";

export const configs: RouteObject[] = [
  {
    path: "/products",
    element: <DefaultLayout />,
    children: [
      {
        path: ":slug",
        element: <ProductDetail />,
      },
      {
        index: true,
        element: <ProductList />,
      },
    ],
  },
];
