'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { pathOr } from 'ramda';
import type { FC } from 'react';
import React, { useState } from 'react';

// import LikeButton from "./LikeButton";

interface ImageShowCaseProps {
  shots: StaticImageData[];
}

const ImageShowCase: FC<ImageShowCaseProps> = ({ shots }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="grid grid-cols-6 gap-3 border-neutral-300 p-2 xl:gap-8">
      <div className="order-2 col-span-6 w-full items-center lg:order-1 lg:col-span-1 lg:flex">
        <div className="grid grid-cols-6 gap-3">
          {shots.slice(0, 4).map((shot, index) => (
            <div
              key={shot.src}
              className={`${
                activeImageIndex === index ? 'border-2 border-primary' : ''
              } relative col-span-2 aspect-square overflow-hidden rounded-lg md:col-span-2 lg:col-span-6 lg:h-[100px] xl:h-auto xl:w-full`}
            >
              <button
                className="size-full"
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={shot}
                  alt="shoe image"
                  className="size-full object-contain object-center"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 col-span-6 lg:order-2 lg:col-span-5">
        <div className="relative overflow-hidden rounded-2xl lg:h-[520px] xl:h-auto xl:w-full">
          <Image
            src={pathOr('', [activeImageIndex], shots)}
            alt="shoe image"
            className="size-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageShowCase;
