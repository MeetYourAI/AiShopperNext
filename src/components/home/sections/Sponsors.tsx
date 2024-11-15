import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { sponsorsData } from '@/data/content';

const SponsorsSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <div className="border-y border-neutral-300 py-8 dark:border-neutral-600 xl:py-16">
          <ul className="hiddenScrollbar flex h-9 flex-nowrap gap-4 overflow-x-scroll lg:gap-16">
            {sponsorsData.map((listItem) => (
              <li
                key={listItem.id}
                className="relative h-full min-w-[100px] shrink-0 xl:basis-auto"
              >
                <Link href="/collections/">
                  <div className="dark:hidden">
                    <Image
                      src={listItem.svg_white}
                      fill
                      alt="sponsor image"
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden dark:inline-block">
                    <Image
                      src={listItem.svg_dark}
                      fill
                      alt="sponsor image"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
