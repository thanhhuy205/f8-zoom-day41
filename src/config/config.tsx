import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
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
  {
    path: "/",
    element: <Home />,
  },
];
