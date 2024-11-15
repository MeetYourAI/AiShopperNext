import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import ShopNowButton from '@/shared/Button/ShopNowButton';

type CardProps = {
  title: string;
  image: StaticImageData | string;
  tag: string;
  href: string;
  index?: number;
};
const HeaderCard: FC<CardProps> = ({ href, image, title, tag, index }) => {
  const isFirst = index === 0;

  return (
    <Link
      href={href}
      key={href}
      className="lx:first:py-16 group relative col-span-4 overflow-hidden rounded-md p-8 lg:col-span-1 lg:first:col-span-2 lg:first:row-span-2 lg:first:p-8 xl:first:px-14 lg:[&:nth-child(2)]:row-span-2"
    >
      <div className="absolute left-0 top-0 -z-10 size-full">
        <Image
          src={image}
          fill
          alt="bg-graphic"
          className="scale-105 object-cover object-center transition-transform duration-700 group-hover:scale-100 dark:opacity-60"
        />
      </div>
      {isFirst ? (
        <div>
          <span className="text-xs text-primary dark:text-white">
            <span className="inline-block size-1 rounded-full bg-green-600 dark:bg-white" />{' '}
            IN STOCK NOW
          </span>
          <h2 className="mb-2 text-4xl font-bold leading-tight md:mt-16 md:w-[70%] lg:mt-10">
            {title}
          </h2>

          <p className="mb-4 w-4/5 text-neutral-500 dark:text-white md:w-1/2">
            Find your perfect phone - sleek and stylish or budget-friendly.
          </p>

          <div className="md:mt-16 lg:mt-10">
            <ShopNowButton />
          </div>
        </div>
      ) : (
        <div className="flex  h-full flex-col">
          <span className="mb-auto inline-block text-xs">
            <span className="inline-block rounded bg-white px-3 py-1 font-semibold uppercase dark:bg-neutral-950">
              {tag}
            </span>
          </span>
          <h3 className="w-2/3 font-bold leading-tight tracking-tight">
            {title}
          </h3>
        </div>
      )}
    </Link>
  );
};

export default HeaderCard;
