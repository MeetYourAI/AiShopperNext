import Link from 'next/link';
import { pathOr } from 'ramda';
import React from 'react';
import { MdClose } from 'react-icons/md';

import { catalogNavLinks, socialLinks } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ToggleSwitch from '@/shared/Button/ToggleSwitch';
import Logo from '@/shared/Logo/Logo';

import CountriesMobile from '../CountriesMobile';
import LanguageMobile from '../LanguageMobile';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  return (
    <div className="h-screen w-full overflow-y-auto bg-white px-5 py-2 shadow-lg ring-1 transition dark:bg-gray">
      <div className=" border-b border-neutral-300 py-2 dark:border-neutral-600">
        <Logo className="block" />
        {/* eslint-disable */}
        <span className="absolute right-2 top-2 p-1" onClick={onClickClose}>
          {/* eslint-disable */}
          <MdClose />
        </span>
      </div>
      <ul className="flex flex-col space-y-5 py-6 divide-y divide-neutral-300 dark:divide-neutral-600 border-b border-neutral-300 dark:border-neutral-600">
        {catalogNavLinks.map((item) => (
          <Link
            href={item.href}
            onClick={onClickClose}
            key={item.id}
            className="capitalize pt-4"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="mt-5">
        <ToggleSwitch />
      </div>

      <div className="mt-5 flex lg:hidden">
        <CountriesMobile />
        <LanguageMobile />
      </div>

      <div className="py-10">
        <ButtonPrimary className="w-full">Log in</ButtonPrimary>
        <p className="mt-4 text-center">
          No account yet?{" "}
          <Link href="/account/signup" className="underline">
            Create Account
          </Link>
        </p>
        <ul className="flex mt-10 justify-center gap-8 text-lg">
        {socialLinks.map((listItem) => (
            <li>
              <Link className="text-lg" href={pathOr("#", ["href"], listItem)}>
                {pathOr(<></>, ["Icon"], listItem)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
