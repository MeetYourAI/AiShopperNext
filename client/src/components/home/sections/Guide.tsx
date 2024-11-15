import React from 'react';

import GuideCard from '@/components/GuideCard';
import { guideData } from '@/data/content';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const GuideSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <div className="mb-6 flex items-center justify-between xl:mb-12">
          <div>
            <span className="mb-3 text-xs">HOW TO</span>
            <h2 className="text-2xl font-bold leading-tight tracking-tight">
              Guides for Everything You Need
            </h2>
          </div>
          <div className="hidden md:inline-block">
            <ButtonSecondary>View All Guides</ButtonSecondary>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-12 gap-2">
            {guideData.map((listItem) => (
              <li
                key={listItem.text}
                className="col-span-12 aspect-square md:col-span-4 xl:col-span-2 xl:aspect-auto"
              >
                <GuideCard {...listItem} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 block md:hidden">
          <ButtonSecondary className="w-full">View All Guides</ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
