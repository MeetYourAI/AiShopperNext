'use client';

import '@glidejs/glide/dist/css/glide.core.min.css';

import Glide, {
  Autoplay,
  Controls,
} from '@glidejs/glide/dist/glide.modular.esm';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { newArrivalsData } from '@/data/content';
import ShopNowButton from '@/shared/Button/ShopNowButton';

const NewArrivals = () => {
  const glideRef = useRef<HTMLDivElement | null>(null);

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
                  className="glide__slide relative aspect-[3/4] w-full overflow-hidden rounded-md md:aspect-[16/7]"
                >
                  <div className="absolute left-0 top-0 -z-10 size-full">
                    <Image
                      src={newArrival.image}
                      fill
                      alt="bg-graphic"
                      className="object-cover"
                    />
                    <div className="absolute left-0 top-0 size-full bg-black/50" />
                  </div>
                  <div className="absolute p-6 text-white lg:bottom-0 lg:w-1/2 lg:p-14">
                    <span className="mb-2 text-xs uppercase">New Arrival</span>
                    <h4 className="mb-4 text-2xl font-semibold">
                      {newArrival.title}
                    </h4>
                    <p className="mb-12 w-4/5 text-neutral-300">
                      {newArrival.content}
                    </p>
                    <ShopNowButton />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-4 right-1/2 z-10 flex translate-x-1/2 items-center gap-4 text-sm lg:bottom-14 lg:right-14">
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

export default NewArrivals;
