import React from 'react';

import BenefitCard from '@/components/BenefitsCard';
import { benefitsData } from '@/data/content';

const BenefitsSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <ul className="grid grid-cols-12  gap-4 divide-y divide-neutral-300 dark:divide-neutral-600 md:divide-y-0 lg:gap-12 lg:divide-x">
          {benefitsData.map((listItem) => (
            <li
              key={listItem.text}
              className="group col-span-12 pt-2 md:col-span-6 md:pt-0 xl:col-span-3"
            >
              <BenefitCard {...listItem} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
