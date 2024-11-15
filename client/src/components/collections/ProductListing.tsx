import React from 'react';

import { products } from '@/data/content';

import ProductCard from '../products/ProductCard';

const ProductListing = () => {
  return (
    <div className="grid grid-cols-10 gap-3">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
          className="col-span-10 md:col-span-5 lg:col-span-2"
        />
      ))}
    </div>
  );
};

export default ProductListing;
