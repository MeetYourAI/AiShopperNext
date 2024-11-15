import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';
import { HiMiniArrowUturnLeft } from 'react-icons/hi2';
import { LuInfo, LuTruck } from 'react-icons/lu';

import ColorPicker from '@/components/ColorPicker';
import ImageShowCase from '@/components/ImageShowCase';
// import ProductCard from "@/components/products/ProductCard";
import Banner from '@/components/products/Banner';
import ProductSlider from '@/components/products/ProductSlider';
import ProductTabs from '@/components/products/ProductTabs';
import { products } from '@/data/content';
import Button from '@/shared/Button/Button';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import InputNumber from '@/shared/InputNumber/InputNumber';

interface SectionProductHeaderProps {
  shots: StaticImageData[];
  name: string;
  prevPrice: number;
  currentPrice: number;
}

const SectionProduct: FC<SectionProductHeaderProps> = ({
  shots,
  name,
  prevPrice,
  currentPrice,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-8">
        <ImageShowCase shots={shots} />
        <div className="hidden md:block">
          <ProductTabs />
          <ProductSlider
            products={products.slice(0, 7)}
            title="Similar Items You Might Like"
            subText="Based on what customers bought"
          />
          <ProductSlider
            products={products.slice(0, 7)}
            title="Shop For More Compatible Items"
            subText="Items that pair well together"
          />
          <Banner />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <span className="mb-2 text-xs">STOCKMART</span>
        <h1 className="mb-0 text-3xl font-bold">{name}</h1>

        <div className="mb-5 space-y-1">
          <h1 className="text-2xl font-semibold">
            <span className="text-green-700">${currentPrice}</span>{' '}
            <span className=" text-neutral-500 line-through">${prevPrice}</span>
          </h1>
          <p className="text-sm">Tax included.</p>
        </div>

        <div className="mb-6">
          <p className="text-neutral-500 dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nemo cumque odit illo expedita ut magnam quisquam id, nam ea modi
            veritatis repellat ex excepturi ipsum, aperiam aliquam eaque ab?
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm">Color:</h4>
          <ColorPicker />
        </div>

        <div className="">
          <h4 className="text-sm">Quantity:</h4>
          <div className="flex gap-2">
            <InputNumber />
            <ButtonSecondary className="w-full">Add to cart</ButtonSecondary>
          </div>
        </div>

        <div className="mb-5 mt-2 flex items-center gap-5">
          <ButtonPrimary className="w-full">Buy Now</ButtonPrimary>
        </div>

        <div className="mb-6 flex">
          <div className="p-1 text-green-700">
            <FaCheck />
          </div>
          <div>
            <p>Pickup available at shop location</p>
            <p className="mb-1">Usually read in 24 hours</p>
            <p className="text-sm">View store information</p>
          </div>
        </div>

        <div className="divide-y divide-neutral-300  dark:divide-neutral-400">
          <div className="flex gap-4 py-4">
            <div>
              <BsLightningCharge />
            </div>
            <div>
              <h3 className="text-sm text-red-600">2 in Stock Now</h3>
              <p className="mt-1 text-neutral-500  dark:text-neutral-300">
                Upgrade your tech collection with the latest must-have item,
                available now in limited quantities.
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <div>
              <LuTruck />
            </div>
            <div>
              <h3 className="flex items-start gap-2 text-sm font-semibold">
                <span className="inline-block">Next Day Delivery</span>{' '}
                <LuInfo className="inline-block" size={12} />
              </h3>
              <p className="text-neutral-500  dark:text-neutral-300">
                Lightning-fast shipping, guaranteed.
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <div className="text-primary  dark:text-white">
              <HiMiniArrowUturnLeft />
            </div>
            <div>
              <h3 className="text-sm  font-semibold text-primary dark:text-white">
                Free 90-day returns
              </h3>
              <p className="text-neutral-500  dark:text-neutral-300">
                Shop risk-free with easy returns.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4 rounded-md  border-2 border-blue-600 px-9 py-4 dark:border-neutral-400">
          <div>
            <h3 className="text-sm font-semibold">Packaging Note:</h3>
            <p className="text-neutral-500  dark:text-neutral-300">
              Research and development value proposition graphical user
              interface investor. Startup business plan user experience
            </p>
          </div>
          <div className="text-primary">
            <LuInfo />
          </div>
        </div>
        <div className="mb-8 rounded-md bg-primary px-10 py-4 text-white">
          <div>
            <span className="mb-5 inline-block">StockMart</span>
            <h3 className="font-semibold">
              Discount & Free shipping on Your first purchase.
            </h3>
            <Button href="/" className="text-yellow-500">
              {` First-Timer's Deal`}
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div>
            <h3>RELATED PRODUCT</h3>
            <div>{/* <ProductCard className="" /> */}</div>
          </div>
        </div>

        <div className="sticky top-0 hidden bg-white p-8 pb-4 dark:bg-neutral-900 lg:block">
          <div className="mb-3">
            <h4 className="text-3xl font-semibold">{name}</h4>
            <p className="text-xl font-medium">${currentPrice}.00</p>
            <p className="text-sm text-neutral-500  dark:text-neutral-300">
              Tax included.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-sm">Color:</h4>
            <ColorPicker />
          </div>
          <div className="">
            <h4 className="text-sm">Quantity:</h4>
            <div className="flex gap-2">
              <InputNumber />
              <ButtonSecondary className="w-full">Add to cart</ButtonSecondary>
            </div>
          </div>
          <div className="mb-5 mt-2 flex items-center gap-5">
            <ButtonPrimary className="w-full">Buy Now</ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:hidden">
        <ProductTabs />
        <ProductSlider
          products={products.slice(0, 7)}
          title="Similar Items You Might Like"
          subText="Based on what customers bought"
        />
        <ProductSlider
          products={products.slice(0, 7)}
          title="Shop For More Compatible Items"
          subText="Items that pair well together"
        />
        <Banner />
      </div>
    </div>
  );
};

export default SectionProduct;
