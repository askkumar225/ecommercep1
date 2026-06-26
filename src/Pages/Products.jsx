

import { Suspense } from "react";
import { ProductsList } from "../Features/ProductList/ProductsList";

export const Products = () => {
  return (
    <div className="container py-5 ">

      <h1 className="text-center mb-4">
        Our Products
      </h1>

      <Suspense fallback={
          <div className="text-center mt-5">
            <div
              className="spinner-border text-warning"
              role="status"
            >
            </div>

            <h4 className="mt-3">
              Loading Products...
            </h4>
          </div>
        }
      >
        <ProductsList />
      </Suspense>

    </div>
  );
};