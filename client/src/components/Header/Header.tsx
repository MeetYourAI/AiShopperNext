'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import useScrollListener from '@/hooks/useScrollListener';

import BottomNav from './BottomNav';
import MainNav from './MainNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const scroll = useScrollListener();
  const [hidnNav, setHideNav] = useState(false);

  useEffect(() => {
    if (scroll.y > 200 && scroll.y - scroll.lastY > 0) setHideNav(true);
    else {
      setHideNav(false);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <div
      className={`nc-Header sticky inset-x-0 z-50 w-full bg-neutral-100 transition-transform duration-200 dark:bg-gray ${hidnNav && '-translate-y-full'} ${scroll.y > 200 ? 'top-0 shadow' : 'top-[-190px]'}`}
    >
      <MainNav />
      <BottomNav />
    </div>
  );
};

export default Header;
