'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';

import { footerData } from '@/data/content';
import banner_1 from '@/images/banner-1_3.webp';
import banner_2 from '@/images/banner-1_4.webp';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary2 from '@/shared/Button/ButtonSecondary2';

export interface CatalogBarProps {
  className?: string;
}

const CatalogBar: React.FC<CatalogBarProps> = ({ className }) => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 top-[117px] z-50 overflow-y-auto"
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
                      <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-2">
                          <h4 className="mb-2 font-medium">Starter Sites</h4>
                          <div className="space-y-2 text-neutral-500 dark:text-neutral-300">
                            {footerData.footerLinks[0]?.links.map((link) => (
                              <div key={link.name} className="text-sm">
                                <Link href="/#" className="">
                                  {link.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-span-2">
                          <h4 className="mb-2 font-medium">Collections</h4>
                          <div className="space-y-2 text-neutral-500 dark:text-neutral-300">
                            {footerData.footerLinks[0]?.links.map((link) => (
                              <div key={link.name} className="text-sm">
                                <Link href={link.href} className="">
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
                                Stay Ahead with Our New Tech
                              </h4>
                              <div className="mt-8">
                                <p className="mb-3">
                                  from:{' '}
                                  <span className="text-lg font-semibold text-primary dark:text-white">
                                    $15
                                  </span>
                                </p>
                                <ButtonPrimary>Shop Now</ButtonPrimary>
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
                                Check Out for new Speakers
                              </h4>
                              <div className="mt-8">
                                <p className="mb-3">
                                  from:{' '}
                                  <span className="text-lg font-semibold text-primary dark:text-white">
                                    $15
                                  </span>
                                </p>
                                <ButtonPrimary>Shop Now</ButtonPrimary>
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
    <div className={className}>
      <ButtonSecondary2 sizeClass="py-[11px] px-4" onClick={handleOpenMenu}>
        <RiMenu2Line /> Shop Now
      </ButtonSecondary2>

      {renderContent()}
    </div>
  );
};

export default CatalogBar;
