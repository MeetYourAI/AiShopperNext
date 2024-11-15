import React from 'react';

import SectionBlogs from '@/components/blog/SectionBlogs';
import Breadcrumbs from '@/components/Breadcrumbs';
import ButtonLink from '@/shared/Button/ButtonLink';

const page = () => {
  const breadcrumbitems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: 'Journal' },
  ];
  return (
    <main>
      <div className="container ">
        <div className="mb-1">
          <Breadcrumbs Items={breadcrumbitems} />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">Journal</h1>
        </div>
      </div>
      <SectionBlogs />
    </main>
  );
};

export default page;
