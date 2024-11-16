import React from 'react';

import BlogPostCard from '@/components/blog/BlogPostCard';
import { blogs } from '@/data/content';

const LatestBlogPostsSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <h2 className="mb-6 text-lg font-semibold lg:mb-8">
          Latest News and Blog
        </h2>
        <div>
          <ul className="grid grid-cols-12 gap-4 lg:gap-2 xl:grid-rows-2">
            {blogs.slice(0, 3).map((listItem) => (
              <li
                key={listItem.title}
                className="group col-span-12 lg:col-span-6 lg:first:col-span-12 xl:col-span-4 xl:first:col-span-8 xl:first:row-span-2"
              >
                <BlogPostCard {...listItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPostsSection;
