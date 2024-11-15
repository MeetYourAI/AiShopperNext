import React from 'react';
import { IoCaretForwardOutline } from 'react-icons/io5';

import ButtonPrimary from './ButtonPrimary';

const ShopNowButton = () => {
  return (
    <ButtonPrimary className="group w-[125px] !px-[14px] ">
      <span className="text-sm transition-all duration-300 group-hover:-translate-x-2">
        Shop Now
      </span>
      <IoCaretForwardOutline className="absolute right-7 opacity-0 transition-all duration-200 group-hover:right-4 group-hover:opacity-100" />
    </ButtonPrimary>
  );
};

export default ShopNowButton;
