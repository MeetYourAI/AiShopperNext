import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

type CardProps = {
  title: string;
  imgUrl: StaticImageData | string;
  href: string;
};
const CategoryCard: FC<CardProps> = ({ title, href, imgUrl }) => {
  return (
    <Link href={href}>
      <div className="mb-3 lg:mb-0">
        <div className="relative aspect-square overflow-hidden rounded-md bg-white">
          <Image
            src={imgUrl}
            alt="category rep"
            fill
            className="object-cover"
            sizes="10%"
          />
        </div>
        <div className="lg:mt-6">
          <p className="text-center font-semibold">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
