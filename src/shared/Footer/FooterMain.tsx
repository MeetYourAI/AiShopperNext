import Link from 'next/link';
import React from 'react';

import { footerData } from '@/data/content';

import Logo from '../Logo/Logo';

const FooterMain = () => {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-primary/15 pb-16 dark:border-white/15 lg:gap-0">
      <div className="col-span-12 text-sm lg:col-span-3">
        <Logo className="mb-4 block" />
        <p className="text-sm">
          &copy; Copyright. <span>Stockmart Modern</span>
        </p>
        <p className="text-sm">
          {new Date().getFullYear()} <span>by Devsphere labs</span>
        </p>
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-2">
        <h4 className="mb-2 font-medium">Starter Sites</h4>
        {footerData.footerLinks[0]?.links.map((link) => (
          <div key={link.name} className="text-sm">
            <Link href={link.href} className="underline">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-2">
        <h4 className="mb-2 font-medium">Collections</h4>
        {footerData.footerLinks[0]?.links.map((link) => (
          <div key={link.name} className="text-sm">
            <Link href={link.href} className="underline">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="col-span-6 md:col-span-4 lg:col-span-2">
        <h4 className="mb-2 font-medium">Sales</h4>
        {footerData.footerLinks[0]?.links.map((link) => (
          <div key={link.name} className="text-sm">
            <Link href={link.href} className="underline">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="col-span-6 text-sm text-neutral-500 dark:text-neutral-300 lg:col-span-2">
        <p>If you have any questions please contact us 24/7:</p>
        <p className="mt-4 font-semibold dark:text-white">+84 1234 555 77</p>
      </div>
    </div>
  );
};

export default FooterMain;
