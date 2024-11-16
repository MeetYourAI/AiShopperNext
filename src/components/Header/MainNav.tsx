import Link from 'next/link';
import { pathOr } from 'ramda';
import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import { headerNavData } from '@/data/content';
import ToggleSwitch from '@/shared/Button/ToggleSwitch';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';

import CartSideBar from '../CartSideBar';
import Countries from '../Countries';
import Language from '../Language';
import type { NavItemType } from '../NavItem';
import UserAccount from '../UserAccount';
import CatalogBar from './CatalogBar';
import MenuBar from './MenuBar';

const MainNav = () => {
  const navLinks: NavItemType[] = pathOr([], ['mainNavLinks'], headerNavData);
  return (
    <div className="container  ">
      <div className="flex items-center justify-between gap-6 py-3 lg:py-4">
        <div className=" xl:hidden">
          <MenuBar />
        </div>
        <div className="relative flex items-center gap-5 xl:grow">
          <Logo />
          <CatalogBar className="hidden xl:inline-block" />
          <div className="hidden w-full items-center gap-5 rounded border-2 border-primary/15 bg-white pr-3 transition-all duration-300 hover:border-primary dark:border-white/15 dark:bg-neutral-950 xl:flex">
            <Input
              type="text"
              className="border-transparent placeholder:text-neutral-500 focus:border-transparent"
              placeholder="What are you looking for ..."
            />
            <RiSearch2Line className="text-2xl text-neutral-500" />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="hidden  xl:block">
            <ul className="flex">
              {navLinks.map((navItem) => (
                <li
                  key={navItem.id}
                  className="p-3 text-sm text-neutral-500 hover:font-semibold hover:text-neutral-800 dark:text-neutral-300  dark:hover:text-neutral-100"
                >
                  <Link href={navItem.href}>{navItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <div className="hidden xl:inline-block">
              <ToggleSwitch />
            </div>
            <div className="hidden lg:inline-block">
              <Countries />
            </div>
            <div className="hidden lg:inline-block">
              <Language />
            </div>
            <div className="hidden lg:inline-block">
              <UserAccount />
            </div>
            <CartSideBar />
          </div>
        </div>
      </div>
      <div className="pb-2 xl:hidden">
        <div className="flex w-full items-center gap-5 border border-neutral-300 bg-white pr-3 dark:bg-neutral-950">
          <Input
            type="text"
            className="border-transparent placeholder:text-neutral-500 focus:border-transparent"
            placeholder="What are you looking for ..."
          />
          <RiSearch2Line className="text-2xl text-neutral-500" />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
