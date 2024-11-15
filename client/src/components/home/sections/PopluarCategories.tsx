import React from 'react';

import CategoryCard from '@/components/CategoryCard';
import { categoriesData } from '@/data/content';

const PopluarCategoriesSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <h2 className="mb-6 text-lg font-semibold lg:mb-8">
          Popular Categories
        </h2>
        <div>
          <ul className="grid grid-cols-12 gap-2">
            {categoriesData.map((listItem) => (
              <li
                key={listItem.title}
                className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
              >
                <CategoryCard {...listItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopluarCategoriesSection;
