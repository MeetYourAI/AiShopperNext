import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import GuideCard from '@/components/GuideCard';
import { guideData } from '@/data/content';
import ButtonLink from '@/shared/Button/ButtonLink';

const GuidePage = () => {
  const breadcrumbitems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: 'Guides' },
  ];
  return (
    <main>
      <div className="container pb-24">
        <Breadcrumbs Items={breadcrumbitems} />
        <h1 className="mb-3 text-3xl font-semibold">Guides</h1>
        <div>
          <ul className="grid grid-cols-12 gap-2">
            {guideData.map((listItem) => (
              <li
                key={listItem.text}
                className="col-span-12 md:col-span-4 xl:col-span-2"
              >
                <GuideCard {...listItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default GuidePage;
