'use client';

import '@glidejs/glide/dist/css/glide.core.min.css';

import Glide, {
  Autoplay,
  Controls,
} from '@glidejs/glide/dist/glide.modular.esm';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import ProductCardSmall from '@/components/products/ProductCardSmall';
import { newArrivalsData, products } from '@/data/content';

const NewArrivals2 = () => {
  const glideRef = useRef<HTMLDivElement | null>(null);
  const product = products[0];
  useEffect(() => {
    if (!glideRef.current) return;
    new Glide(glideRef.current, {
      type: 'carousel',
      startAt: 0,
      autoplay: 1000 * 60,
      gap: 2,
      perView: 1,
    }).mount({ Controls, Autoplay });
  }, []);
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <div ref={glideRef} className="glide relative">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {newArrivalsData.map((newArrival) => (
                <li
                  key={newArrival.title}
                  className="glide__slide relative  w-full overflow-hidden rounded-md xl:flex xl:aspect-[16/7] "
                >
                  <div className="relative aspect-video w-full overflow-hidden xl:aspect-auto xl:w-1/2">
                    <Image
                      src={newArrival.image}
                      fill
                      alt="bg-graphic"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white p-6 text-center dark:bg-neutral-900 lg:p-14 xl:w-1/2">
                    <span className="mb-2 text-xs uppercase">In stock Now</span>
                    <h4 className="mb-4 text-2xl font-semibold">
                      {newArrival.title}
                    </h4>
                    <p className="mb-12 w-4/5 text-base text-neutral-500 dark:text-neutral-300 lg:text-xl">
                      {newArrival.content}
                    </p>
                    <div className="w-full border border-neutral-200 text-left dark:border-white/15">
                      {product && <ProductCardSmall {...product} />}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-0 right-1/2 z-10 flex translate-x-1/2 items-center gap-4 text-sm lg:right-14 xl:bottom-14">
            <div
              className=" glide__arrows flex items-center gap-2"
              data-glide-el="controls"
            >
              <button
                type="button"
                className="glide__arrow glide__arrow--left flex size-9 min-w-fit items-center justify-center rounded-full bg-white px-0 text-primary focus:ring-transparent disabled:bg-zinc-200/70"
                data-glide-dir="<"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="glide__arrow glide__arrow--right flex size-9 min-w-fit items-center justify-center rounded-full bg-white px-0 text-primary focus:ring-transparent disabled:bg-zinc-200/70"
                data-glide-dir=">"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals2;
