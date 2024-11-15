import Image from 'next/image';
import Link from 'next/link';
import { pathOr } from 'ramda';
import React from 'react';

import LanguageLarge from '@/components/LanguageLarge';
import { paymentsData, socialLinks } from '@/data/content';

import Subscribe from './Subscribe';

const FooterBottom = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="flex flex-col flex-wrap gap-y-6 lg:flex-row lg:items-center lg:justify-between xl:flex-nowrap">
        <div className="flex w-full flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between xl:w-fit">
          <div className="">
            <LanguageLarge />
          </div>
          <div className="lg:pl-9">
            <h4 className="text-sm dark:text-neutral-300">We accept:</h4>
            <ul className="flex gap-4">
              {paymentsData.map((listItem) => (
                <li key={listItem.title}>
                  <Link
                    className="relative text-lg"
                    href={pathOr('#', ['href'], listItem)}
                  >
                    <Image
                      src={listItem.Icon}
                      alt="payement logo"
                      height={12}
                      width={24}
                      className="object-contain"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 lg:mt-0 lg:pl-9">
            <h4 className="text-sm dark:text-neutral-300">Follow Us</h4>
            <ul className="flex gap-4">
              {socialLinks.map((listItem) => (
                <li key={listItem.href}>
                  <Link
                    className="text-lg"
                    href={pathOr('#', ['href'], listItem)}
                  >
                    {pathOr('', ['Icon'], listItem)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-2/5">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
