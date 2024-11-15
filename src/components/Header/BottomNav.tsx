import Link from 'next/link';
import { pathOr } from 'ramda';
import React from 'react';

import { headerNavData } from '@/data/content';

import type { NavItemType } from '../NavItem';
import NavigationItem from '../NavItem';
import PhoneBar from './PhoneBar';

const BottomNav = () => {
  const navLinks: NavItemType[] = pathOr([], ['bottomNavLinks'], headerNavData);
  const dropDownMenuOptions: { href: string; label: string }[] = pathOr(
    [],
    ['bottomNavLinks', 1, 'dropDownMenuData'],
    headerNavData,
  );
  return (
    <div className="container">
      <div className="hidden  border-t border-neutral-300 py-6 dark:border-neutral-600 xl:block">
        <div className="flex items-center justify-between text-sm ">
          <div className="flex items-center text-base font-semibold">
            <PhoneBar />

            {navLinks[1] && (
              <NavigationItem menuItem={navLinks[1]}>
                <ul className="h-full bg-white py-2 dark:bg-neutral-800">
                  {dropDownMenuOptions.map((linkItem) => (
                    <li key={linkItem.label}>
                      <Link
                        href={linkItem.href}
                        className="inline-block w-full px-3 py-2 font-medium hover:text-primary"
                      >
                        {linkItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationItem>
            )}

            {navLinks.slice(2).map((item) => (
              <NavigationItem menuItem={item} key={item.id} />
            ))}
          </div>

          <div>
            <p className="text-neutral-500 dark:text-neutral-200">
              Need help? Call Us:{' '}
              <span className="font-semibold text-black dark:text-white">
                +84 1234 555 77
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
