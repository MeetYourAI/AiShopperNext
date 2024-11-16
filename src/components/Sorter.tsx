'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const languages = [
  { key: 1, value: 'Best Selling', label: 'Best Selling' },
  { key: 2, value: 'Featured', label: 'Featured' },
  { key: 3, value: 'Date', label: 'Date' },
  { key: 3, value: 'Price', label: 'Price' },
  { key: 3, value: 'Alphabetically A-Z', label: 'Alphabetically A-Z' },
  { key: 3, value: 'Alphabetically Z-A', label: 'Alphabetically Z-A' },
];

const Sorter = () => {
  const [activeLanguageKey, setActiveLanguageKey] = useState(1);

  return (
    <div className=" font-medium ">
      <Popover as="div" className="relative inline-block w-full">
        <Popover.Button className="flex w-full items-center justify-between gap-2 rounded border border-primary/15 px-5 py-4 dark:border-white/15 lg:min-w-60">
          <span className="inline-flex flex-col leading-tight">
            <span>
              {
                languages.find((language) => language.key === activeLanguageKey)
                  ?.value
              }
            </span>
          </span>
          <span className="flex size-4 items-center justify-center">
            <MdKeyboardArrowDown className="" />
          </span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel className="divide-gray-100 absolute bottom-9 left-0 mt-2 w-40 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-neutral-900">
            <div className="flex flex-col">
              {languages.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveLanguageKey(item.key)}
                  className="w-full px-3 py-1 text-left text-sm focus:outline-none"
                >
                  {item.value}
                </button>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Sorter;
