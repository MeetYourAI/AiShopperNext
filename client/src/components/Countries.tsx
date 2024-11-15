'use client';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

import countriesData from '@/data/countriesData';

const Countries = () => {
  const [activeCountryCode, setActiveCountryCode] = useState('CA');

  const activeCountry = countriesData.find(
    (country) => country.code === activeCountryCode,
  );
  return (
    <div className="px-3 font-medium">
      <Menu as="div" className="relative inline-block md:pt-2">
        <Menu.Button className="inline-flex items-center gap-2 text-sm">
          {activeCountry && (
            <span className="relative inline-block size-4 overflow-hidden rounded-full">
              <Image
                src={activeCountry.flagUrl}
                fill
                alt="country flag"
                className="object-cover"
              />
            </span>
          )}
          <span className="inline-block">{activeCountry?.code}</span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="divide-gray-100 absolute right-0 mt-2 h-80 w-52 origin-top-right divide-y overflow-scroll rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-neutral-900">
            <div className="flex flex-col">
              {countriesData.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setActiveCountryCode(item.code)}
                  className="w-full px-3 py-2 text-left text-sm focus:outline-none"
                >
                  <div className="flex justify-between">
                    <span className="inline-flex items-center gap-2">
                      <span className="relative inline-block size-6 overflow-hidden rounded-full">
                        <Image
                          src={item.flagUrl}
                          fill
                          alt="country flag"
                          className="object-cover"
                        />
                      </span>
                      <span className="line-clamp-1 text-ellipsis">
                        {item.name}
                      </span>
                    </span>
                    <span>{`(${item.currency})`}</span>
                  </div>
                </button>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Countries;
