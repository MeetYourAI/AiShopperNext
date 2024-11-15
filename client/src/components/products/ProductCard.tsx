import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { ProductType } from '@/data/types';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

import ColorPicker from '../ColorPicker';

interface ProductCardProps extends ProductType {
  className?: string;
}
const ProductCard: FC<ProductCardProps> = ({
  className,
  coverImage,
  name,
  onSale,
  slug,
  previousPrice,
  currentPrice,
}) => {
  return (
    <Link
      href={`/products/${slug}`}
      className={`group inline-block h-full overflow-hidden rounded-md bg-white dark:bg-neutral-900 ${className}`}
    >
      <div className="">
        <div className="relative overflow-hidden">
          {onSale && (
            <span className="absolute left-2 top-2 z-10 rounded-sm bg-green-700 px-2 text-sm font-bold text-white">
              Sale
            </span>
          )}
          <div className="relative aspect-square bg-white">
            <Image
              src={coverImage}
              alt="product graphic"
              fill
              className="object-contain"
              sizes="100%"
            />
          </div>
          <div className="absolute bottom-2 w-full px-4 text-center transition-all duration-300 group-hover:bottom-2 lg:-bottom-full">
            <ButtonPrimary className="w-full text-sm">Quick View</ButtonPrimary>
          </div>
        </div>
        <div className="px-5 py-4">
          {onSale && <ColorPicker />}
          <span className="text-xs">STOCKMART</span>
          <h3 className="line-clamp-2 text-ellipsis font-bold">{name}</h3>
          {onSale ? (
            <p>
              <span className="font-bold text-green-700">
                ${currentPrice}.00
              </span>{' '}
              <span className="text-sm font-semibold text-neutral-500 line-through">
                ${previousPrice}.00
              </span>
            </p>
          ) : (
            <p className="font-bold">${currentPrice}.00</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
