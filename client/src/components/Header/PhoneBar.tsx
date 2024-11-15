'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { pathOr } from 'ramda';
import React, { Fragment, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import { headerNavData } from '@/data/content';
import banner_2 from '@/images/Group_103-1.webp';
import banner_1 from '@/images/phone_2.webp';
import Button from '@/shared/Button/Button';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

export interface CartSideBarProps {}

const PhoneBar: React.FC<CartSideBarProps> = () => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const title = pathOr(
    '',
    ['bottomNavLinks', 0, 'megaMenuData', 'title'],
    headerNavData,
  );
  const phoneTitle = pathOr(
    '',
    ['bottomNavLinks', 0, 'megaMenuData', 'menu1Data', 'title'],
    headerNavData,
  );
  const watchTitle = pathOr(
    '',
    ['bottomNavLinks', 0, 'megaMenuData', 'menu2Data', 'title'],
    headerNavData,
  );
  const menu1: any[] = pathOr(
    [],
    ['bottomNavLinks', 0, 'megaMenuData', 'menu1Data', 'links'],
    headerNavData,
  );
  const menu2: any[] = pathOr(
    [],
    ['bottomNavLinks', 0, 'megaMenuData', 'menu2Data', 'links'],
    headerNavData,
  );

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 top-[189px] z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max absolute inset-y-0 right-0 w-full outline-none focus:outline-none">
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
                <div className="overflow-hidden bg-white shadow-lg ring-1 ring-black/5 dark:bg-neutral-950">
                  <div className="container relative w-full py-10 ">
                    <div className="hiddenScrollbar overflow-y-auto py-5">
                      <span className="text-xs text-neutral-500">{title}</span>
                      <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-2">
                          <h4 className="mb-2 font-semibold">{phoneTitle}</h4>
                          <div className="space-y-2 text-neutral-500 dark:text-neutral-300">
                            {menu1.map((link) => (
                              <div key={link.name} className="">
                                <Link
                                  href={link.href}
                                  className="font-medium hover:text-primary"
                                >
                                  {link.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-span-2">
                          <h4 className="mb-2 font-semibold">{watchTitle}</h4>
                          <div className="space-y-2 text-neutral-500 dark:text-neutral-300">
                            {menu2.map((link) => (
                              <div key={link.name} className="">
                                <Link
                                  href={link.href}
                                  className="font-medium hover:text-primary"
                                >
                                  {link.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-span-4">
                          <div className="relative  aspect-[8/5] overflow-hidden rounded-md p-6">
                            <div className="absolute left-0 top-0 size-full">
                              <Image
                                src={banner_2}
                                fill
                                alt="bg-graphic"
                                className="scale-105 object-cover object-center transition-transform duration-700 group-hover:scale-100 dark:opacity-50"
                              />
                            </div>
                            <div className="relative z-20 flex flex-col justify-center">
                              <h4 className="w-3/5 font-semibold ">
                                Nova N-s5 is Already Here.
                              </h4>
                              <div className="mt-8">
                                <p className="mb-3">
                                  from:{' '}
                                  <span className="text-lg font-semibold text-primary dark:text-white">
                                    $15
                                  </span>
                                </p>
                                <ButtonPrimary
                                  href="/collections/phones"
                                  showPointer
                                >
                                  Shop Now
                                </ButtonPrimary>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-4">
                          <div className="relative  aspect-[8/5] overflow-hidden rounded-md p-6">
                            <div className="absolute left-0 top-0 size-full ">
                              <Image
                                src={banner_1}
                                fill
                                alt="bg-graphic"
                                className="scale-105 object-cover object-center transition-transform duration-700 group-hover:scale-100 dark:opacity-50"
                              />
                            </div>
                            <div className="relative z-20 flex h-full flex-col justify-center">
                              <h4 className="w-3/5 font-semibold">
                                Hyperion HX-1
                              </h4>
                              <div className="mt-8">
                                <p className="mb-3">
                                  from:{' '}
                                  <span className="text-lg font-semibold text-primary dark:text-white">
                                    $15
                                  </span>
                                </p>
                                <ButtonPrimary
                                  href="/collections/phones"
                                  showPointer
                                >
                                  Shop Now
                                </ButtonPrimary>
                              </div>
                            </div>
                          </div>
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
              <Dialog.Overlay className="absolute inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <Button
        onClick={handleOpenMenu}
        sizeClass=""
        className="text-base hover:text-primary"
      >
        Phones
        <IoMdArrowDropdown />
      </Button>

      {renderContent()}
    </>
  );
};

export default PhoneBar;
