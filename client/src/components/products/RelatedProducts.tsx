import React from 'react';

import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/content';

const relatedProductsSection = () => {
  return (
    <section>
      <div className="pb-24">
        <div className=" mb-6">
          <h2 className="text-2xl font-semibold">
            Check out These Related Products
          </h2>
        </div>
        <div>
          <ul className="grid grid-cols-12 gap-3">
            {products.slice(0, 6).map((product) => (
              <li
                key={product.name}
                className="col-span-12 md:col-span-4 lg:col-span-2"
              >
                <ProductCard className="w-full" {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default relatedProductsSection;
