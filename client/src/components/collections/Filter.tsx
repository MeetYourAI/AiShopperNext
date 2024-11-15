'use client';

import 'rc-slider/assets/index.css';

import { pathOr } from 'ramda';
import Slider from 'rc-slider';
import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';

import Button from '@/shared/Button/Button';

// DEMO DATA
const brands = ['Stockmark'];
const productType = ['Phone', 'Laptop', 'Gamng'];
const avaiablitiy = ['In Stock', 'Out of Stock'];

const PRICE_RANGE = [1, 500];
//
const SidebarFilters = () => {
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
    const [activeTab, setActiveTab] = useState(true);
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
    const [activeTab, setActiveTab] = useState(true);
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
    const [activeTab, setActiveTab] = useState(true);
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
    const [activeTab, setActiveTab] = useState(true);

    return (
      <div className="relative flex flex-col space-y-5 p-5">
        <div className="space-y-5">
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

  return (
    <div className="rounded-md bg-white dark:bg-neutral-900">
      <div className="divide-y divide-neutral-300 dark:divide-neutral-600">
        {renderTabsCategories()}
        {renderTabsPriceRage()}
        {renderTabsProductType()}
        {renderTabsAvaiability()}
      </div>
    </div>
  );
};

export default SidebarFilters;
