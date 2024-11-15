import React from 'react';

import Sorter from '../Sorter';

const CollectionSorter = () => {
  return (
    <section className="hidden lg:block">
      <div className="container pb-10">
        <div className="flex items-center justify-end gap-6">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Showing 8 of 8 products
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span>Sort by:</span>
            <Sorter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSorter;
