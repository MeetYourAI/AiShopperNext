import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedProducts from '@/components/products/RelatedProducts';
import { products } from '@/data/content';
import type { ProductType } from '@/data/types';
import ButtonLink from '@/shared/Button/ButtonLink';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import InputNumber from '@/shared/InputNumber/InputNumber';

const renderProduct = (item: ProductType) => {
  const { name, coverImage, currentPrice, slug, category } = item;

  return (
    <tr
      key={name}
      className="border-b border-neutral-300 dark:border-neutral-500"
    >
      <td className="py-4 md:flex md:justify-between">
        <div className="flex items-center gap-3 pl-6">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-sm">
            <Image
              fill
              src={coverImage}
              alt={name}
              className="size-full object-contain object-center"
            />
            <Link className="absolute inset-0" href={`/products/${slug}`} />
          </div>
          <div className="leading-tight">
            <p className="font-medium">
              <Link href={`/products/${slug}`}>{name}</Link>
            </p>
            <span className="my-1 text-sm text-neutral-500 dark:text-neutral-300">
              {category}
            </span>
          </div>
        </div>
        <div className="block items-center gap-4 px-6 pt-3 md:flex lg:hidden">
          <div className="flex items-center justify-end gap-6">
            <div className="space-x-4">
              <span className="font-medium">${currentPrice}.00</span>
              <span className="font-medium">${currentPrice}.00</span>
            </div>
            <InputNumber />
          </div>
          <div>
            <ButtonLink>Remove</ButtonLink>
          </div>
        </div>
      </td>

      <td className="hidden lg:table-cell">
        <span className="font-medium">${currentPrice}.00</span>
      </td>

      <td className="hidden lg:table-cell">
        <span className=" inline-block">
          <InputNumber />
        </span>
      </td>

      <td className="hidden lg:table-cell">
        <span className="font-medium">${currentPrice}.00</span>
      </td>

      <td className="hidden lg:table-cell">
        <ButtonLink>Remove</ButtonLink>
      </td>
    </tr>
  );
};

const CartPage = () => {
  const breadcrumbitems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: 'Your Shopping Cart' },
  ];
  return (
    <main className="nc-CartPage">
      <div className="container pb-8 lg:pb-24">
        <Breadcrumbs Items={breadcrumbitems} />

        <div className=" py-16 lg:pb-28 lg:pt-20 ">
          <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Shopping Cart
            </h2>
            <div>
              <ButtonLink href="/collections" className="text-sm">
                Continue Shopping
              </ButtonLink>
            </div>
          </div>

          <div className="mb-8 w-full divide-y divide-neutral-300 bg-white dark:bg-neutral-900">
            <table className="table w-full">
              <thead className="mb-2 border-b border-neutral-200">
                <tr className="text-left text-sm text-neutral-500">
                  <th scope="col" className="w-4/12 p-4">
                    Product
                  </th>
                  <th scope="col" className="hidden w-2/12 p-4 lg:table-cell">
                    Price
                  </th>
                  <th scope="col" className="hidden w-2/12 p-4 lg:table-cell">
                    Quantity
                  </th>
                  <th scope="col" className="hidden w-2/12 p-4 lg:table-cell">
                    Total
                  </th>
                  <th scope="col" className="hidden w-1/12 p-4 lg:table-cell">
                    action
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {products.slice(0, 3).map((item) => renderProduct(item))}
              </tbody>
            </table>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="lg:w-1/4">
              <div className="sticky top-28">
                <div>
                  <div className="flex gap-2">
                    <span>Subtotal:</span>
                    <span className="font-semibold">$249.00</span>
                  </div>
                  <div className="flex flex-col pb-4 pt-1 text-sm text-neutral-500 dark:text-neutral-300">
                    <span>Tax included and shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <ButtonPrimary href="/checkout" className="w-full">
                  Checkout
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </main>
  );
};

export default CartPage;
