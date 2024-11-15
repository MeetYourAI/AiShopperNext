'use client';

import { Dialog, Transition } from '@headlessui/react';
import { pathOr } from 'ramda';
import Slider from 'rc-slider';
import type { Dispatch, SetStateAction } from 'react';
import React, { Fragment, useState } from 'react';
import { AiOutlineControl } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import Button from '@/shared/Button/Button';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const brands = ['Stockmark'];
const productType = ['Phone', 'Laptop', 'Gamng'];
const avaiablitiy = ['In Stock', 'Out of Stock'];
const PRICE_RANGE = [1, 500];

const FilterSortBar = () => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const [rangePrices, setRangePrices] = useState([100, 500]);
  const [activeBrands, setActiveBrands] = useState(['All']);
  const [activeProductTypes, setActiveProductTypes] = useState(['']);
  const [activeStock, setActiveStock] = useState(['']);

  const handleToggleFilter = ({
    value,
    valueArray,
    setValueArray,
  }: {
    value: string;
    valueArray: string[];
    setValueArray: Dispatch<SetStateAction<string[]>>;
  }) => {
    if (valueArray.includes(value)) {
      const filteredArray = valueArray.filter(
        (arrayItem) => arrayItem !== value,
      );
      setValueArray(filteredArray);
    } else {
      setActiveBrands((prev) => [...prev, value]);
    }
  };

  // OK
  const renderTabsCategories = () => {
    const [activeTab, setActiveTab] = useState(false);
    return (
      <div className="relative flex flex-col p-5">
        <div className="flex justify-between">
          <button
            type="button"
            className=" font-medium"
            onClick={() => setActiveTab((prev) => !prev)}
          >
            Brands
          </button>
          <span>
            <Button className="text-neutral-500 underline dark:text-neutral-300">
              Reset
            </Button>
          </span>
        </div>
        <ul
          className={`space-y-2 overflow-hidden  ${activeTab ? 'h-auto pt-4' : 'h-0'}`}
        >
          {brands.map((brand) => (
            <li key={brand} className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id={brand}
                checked={activeBrands.includes(brand)}
                onClick={() =>
                  handleToggleFilter({
                    value: brand,
                    valueArray: activeBrands,
                    setValueArray: setActiveBrands,
                  })
                }
                className="size-6 appearance-none rounded-sm border-2 border-neutral-300 checked:bg-primary dark:border-neutral-600 dark:bg-neutral-800"
              />
              <label htmlFor={brand} className="capitalize">
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // OK
  const renderTabsProductType = () => {
    const [activeTab, setActiveTab] = useState(false);
    return (
      <div className="relative flex flex-col p-5">
        <div className="flex justify-between">
          <button
            type="button"
            className="font-medium uppercase"
            onClick={() => setActiveTab((prev) => !prev)}
          >
            Product Type
          </button>
          <span>
            <Button className="text-neutral-500 underline dark:text-neutral-300">
              Reset
            </Button>
          </span>
        </div>
        <ul
          className={`space-y-2 overflow-hidden  ${activeTab ? 'h-auto pt-4' : 'h-0'}`}
        >
          {productType.map((product) => (
            <li key={product} className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id={product}
                checked={activeProductTypes.includes(product)}
                onClick={() =>
                  handleToggleFilter({
                    value: product,
                    valueArray: activeProductTypes,
                    setValueArray: setActiveProductTypes,
                  })
                }
                className="size-6 appearance-none rounded-sm border-2 border-neutral-300 checked:bg-primary dark:border-neutral-600 dark:bg-neutral-800"
              />
              <label htmlFor={product} className="capitalize">
                {product}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // OK
  const renderTabsAvaiability = () => {
    const [activeTab, setActiveTab] = useState(false);
    return (
      <div className="relative flex flex-col p-5">
        <div className="flex justify-between">
          <button
            type="button"
            className=" font-medium"
            onClick={() => setActiveTab((prev) => !prev)}
          >
            Brands
          </button>
          <span>
            <Button className="text-neutral-500 underline dark:text-neutral-300">
              Reset
            </Button>
          </span>
        </div>
        <ul
          className={`space-y-2 overflow-hidden  ${activeTab ? 'h-auto pt-4' : 'h-0'}`}
        >
          {avaiablitiy.map((item) => {
            return (
              <li key={item} className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  id={item}
                  checked={activeStock.includes(item)}
                  onClick={() =>
                    handleToggleFilter({
                      value: item,
                      valueArray: activeStock,
                      setValueArray: setActiveStock,
                    })
                  }
                  className="size-6 appearance-none rounded-sm border-2 border-neutral-300 checked:bg-primary dark:border-neutral-600 dark:bg-neutral-800"
                />
                <label htmlFor={item} className="capitalize">
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // OK
  const renderTabsPriceRage = () => {
    const [activeTab, setActiveTab] = useState(false);

    return (
      <div className="relative flex flex-col space-y-5 p-5 pb-2">
        <div className="space-y-2">
          <div className="flex justify-between">
            <button
              type="button"
              className="font-medium uppercase"
              onClick={() => setActiveTab((prev) => !prev)}
            >
              Price
            </button>
            <span>
              <Button className="text-neutral-500 underline dark:text-neutral-300">
                Reset
              </Button>
            </span>
          </div>
          <div
            className={`space-y-2 overflow-hidden ${activeTab ? 'h-auto pt-4' : 'h-0'}`}
          >
            <Slider
              className=""
              range
              min={PRICE_RANGE[0]}
              max={PRICE_RANGE[1]}
              step={1}
              defaultValue={[
                pathOr(0, [0], rangePrices),
                pathOr(0, [1], rangePrices),
              ]}
              allowCross={false}
              onChange={(_input: number | number[]) =>
                setRangePrices(_input as number[])
              }
            />
            <span className="mt-2 text-sm text-neutral-500">
              Price : {rangePrices[0]} - ${rangePrices[1]}{' '}
            </span>
            <div className="flex justify-between space-x-5">
              <div>
                <div className="relative mt-1 rounded-md">
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    name="minPrice"
                    disabled
                    id="minPrice"
                    className="block w-full rounded-md border-neutral-300 bg-transparent p-3 sm:text-sm"
                    value={rangePrices[0]}
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-1 rounded-md">
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    disabled
                    name="maxPrice"
                    id="maxPrice"
                    className="block w-full rounded-md border-neutral-300 bg-transparent p-3 sm:text-sm"
                    value={rangePrices[1]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="relative z-20">
                <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                  <div className="relative h-screen bg-white dark:bg-gray">
                    <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Filter and Sort
                          </h3>
                          <span className="text-sm font-normal">
                            Showing 8 of 8 products
                          </span>
                        </div>
                        <ButtonCircle3 onClick={handleCloseMenu}>
                          <MdClose className="text-2xl" />
                        </ButtonCircle3>
                      </div>
                      <div className="divide-y divide-neutral-300">
                        {renderTabsCategories()}
                        {renderTabsPriceRage()}
                        {renderTabsProductType()}
                        {renderTabsAvaiability()}
                      </div>
                      <div className="  w-full  p-5">
                        <div className="mt-5 flex flex-col items-center gap-4">
                          <ButtonPrimary
                            onClick={handleCloseMenu}
                            className="w-full"
                          >
                            Apply
                          </ButtonPrimary>
                          <ButtonSecondary
                            onClick={handleCloseMenu}
                            className="w-full"
                          >
                            Clear
                          </ButtonSecondary>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <ButtonPrimary onClick={handleOpenMenu} className="w-full">
        <AiOutlineControl /> Filter and Sort
      </ButtonPrimary>

      {renderContent()}
    </>
  );
};

export default FilterSortBar;
