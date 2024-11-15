import React, { Suspense } from 'react';

import Loading from '@/app/loading';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CheckoutHeader />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
