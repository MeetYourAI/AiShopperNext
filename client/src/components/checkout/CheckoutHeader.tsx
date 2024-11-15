import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

import Logo from '@/shared/Logo/Logo';

const CheckoutHeader = () => {
  return (
    <nav className="border-b border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-900">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <div>
            <Logo />
          </div>
          <div>
            <CiShoppingCart size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CheckoutHeader;
