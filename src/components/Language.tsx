'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const languages = [
  { key: 1, value: 'English', label: 'EN' },
  { key: 2, value: 'Francias', label: 'FR' },
  { key: 3, value: 'Espanol', label: 'ES' },
];

const Language = () => {
  const [activeLanguageKey, setActiveLanguageKey] = useState(1);

  return (
    <div className="pxl-3 pr-5 font-medium">
      <Popover as="div" className="relative inline-block">
        <Popover.Button className="flex items-center gap-2 text-sm">
          <span>
            {
              languages.find((language) => language.key === activeLanguageKey)
                ?.label
            }
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
          <Popover.Panel className="divide-gray-100 absolute right-0 mt-2 w-40 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-neutral-900">
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

export default Language;
