import React from 'react';

import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

const BestSellersSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <div>
          <ul className="grid  grid-cols-6 gap-2 lg:grid-rows-2">
            <li className="col-span-6 md:col-span-4 xl:col-span-2">
              <div className="h-full rounded-md bg-white p-6 dark:bg-neutral-800 lg:p-12">
                <span className="mb-2 text-xs">FEATURED ITEMS</span>
                <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight lg:text-[28px]">
                  Top 10 Bestsellers of This Week
                </h2>
                <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                  Looking for the latest and greatest in electronics? Look no
                  further than our Top 10 Bestsellers of the week! Our expertly
                  curated selection features the hottest gadgets and devices
                  flying off the shelves.
                </p>
                <ButtonPrimary showPointer href="/collections">
                  Shop More
                </ButtonPrimary>
              </div>
            </li>
            {products.slice(0, 10).map((product) => (
              <li
                key={product.slug}
                className="col-span-6 md:col-span-2 xl:col-span-1"
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

export default BestSellersSection;
