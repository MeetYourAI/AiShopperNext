import React from 'react';

import { landingPageHeaderData } from '@/data/content';

import HeaderCard from '../HeaderCard';

const Header = () => {
  return (
    <section>
      <div className="container relative pb-8 xl:pb-24">
        <div className="grid grid-cols-4 gap-2 lg:grid-rows-2">
          {landingPageHeaderData.map((listItem, idx) => (
            <HeaderCard key={listItem.href} {...listItem} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
