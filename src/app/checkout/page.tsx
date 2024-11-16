'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { products } from '@/data/content';
import type { ProductType } from '@/data/types';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

import ContactInfo from '../../components/checkout/ContactInfo';
import PaymentMethod from '../../components/checkout/PaymentMethod';
import ShippingAddress from '../../components/checkout/ShippingAddress';

const CheckoutPage = () => {
  const [tabActive, setTabActive] = useState<
    'ContactInfo' | 'ShippingAddress' | 'PaymentMethod'
  >('ShippingAddress');

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const renderProduct = (item: ProductType) => {
    const { name, coverImage, currentPrice, slug, category } = item;

    return (
      <div key={name} className="flex gap-2">
        <div className="relative size-16 overflow-hidden rounded-xl">
          <Image
            fill
            src={coverImage}
            alt={name}
            className="size-full object-contain object-center"
          />
          <Link className="absolute inset-0" href={`/products/${slug}`} />
        </div>

        <div className="flex grow items-center justify-between">
          <div>
            <h3 className="text-sm font-medium leading-tight">
              <Link href={`/products/${slug}`}>{name}</Link>
            </h3>
            <span className="text-xs text-neutral-500">{category}</span>
          </div>
          <div>
            <span className="text-sm">${currentPrice}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => {
    return (
      <div className="space-y-9">
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress
            isActive={tabActive === 'ShippingAddress'}
            onOpenActive={() => {
              setTabActive('ShippingAddress');
              handleScrollToEl('ShippingAddress');
            }}
            onCloseActive={() => {
              setTabActive('PaymentMethod');
              handleScrollToEl('PaymentMethod');
            }}
          />
        </div>

        <div id="PaymentMethod" className="scroll-mt-24">
          <PaymentMethod
            isActive={tabActive === 'PaymentMethod'}
            onOpenActive={() => {
              setTabActive('PaymentMethod');
              handleScrollToEl('PaymentMethod');
            }}
            onCloseActive={() => setTabActive('PaymentMethod')}
          />
        </div>

        <div className="hidden pt-6 lg:block">
          <ButtonPrimary className="w-full">Pay Now</ButtonPrimary>
        </div>

        <div className="hidden border-t border-neutral-300  pt-4 dark:border-neutral-600 lg:block">
          <p className="text-sm text-neutral-500">
            All rights reserved Stock Mordern
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-CheckoutPage relative">
      <div className="absolute left-0 top-0 -z-10 size-full border-neutral-200 bg-white p-4 dark:border-neutral-600 dark:bg-neutral-900 lg:w-1/2 lg:border-r" />
      <main className="container pb-8 lg:pb-28 ">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full pt-4 lg:basis-1/2 lg:p-9">{renderLeft()}</div>

          <div className="relative w-full lg:basis-1/2">
            <div className="sticky top-0 pt-4 lg:p-9">
              <div className="space-y-2">
                {products.slice(0, 3).map((item) => renderProduct(item))}
              </div>

              <div className="mt-10 border-t border-neutral-300 pt-6 text-sm dark:border-neutral-600">
                <div className="mt-4 flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">$249.00</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">$24.90</span>
                </div>
                <div className="mt-2 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$276.00</span>
                </div>
              </div>
              <ButtonPrimary className="mt-8 w-full lg:hidden">
                Pay Now
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-neutral-300 pt-4  dark:border-neutral-600 lg:hidden">
          <p className="text-sm text-neutral-500">
            All rights reserved Stock Mordern
          </p>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
