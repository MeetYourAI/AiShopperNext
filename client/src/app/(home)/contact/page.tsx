import Image from 'next/image';
import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import about from '@/images/about.jpg';
import founder from '@/images/founder.jpg';
import signature from '@/images/signature.webp';
import ButtonLink from '@/shared/Button/ButtonLink';

import ContactForm from './ContactForm';

const page = () => {
  const breadcrumbItems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: 'About' },
  ];
  return (
    <main>
      <div className="container">
        <Breadcrumbs Items={breadcrumbItems} />
        <div className="pb-36 pt-12 lg:pt-20">
          <h1 className="mb-9 text-4xl font-semibold">About</h1>
          <div className="flex flex-col lg:flex-row lg:gap-16">
            <div className="relative basis-1/2">
              <div className="sticky top-0 aspect-video overflow-hidden rounded-md bg-neutral-300 lg:aspect-square">
                <Image
                  src={about}
                  alt="about us"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="basis-1/2">
              <div className="mb-16">
                <span className="mb-2 text-xs uppercase">About</span>
                <h2 className="mb-6 text-xl font-semibold lg:text-3xl">
                  Hi, we are stockmart
                </h2>
                <p className="mb-4 lg:text-xl">
                  Foreseeing the trends and the desires of the human of the
                  future, we initiated our journey a few years back with the
                  sole ambition of setting new standards in quality and
                  reliability — by forging products that feel personal.
                </p>
                <p className="mb-6 lg:text-xl">
                  We’re culture-driven, and we’re obsessed with values that
                  everyday people like you find positive. Studying your needs
                  deeply, we strive to engineer products that you can feel proud
                  of — to make them your companions for everyday days and hours.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative aspect-square size-12 overflow-hidden rounded-full bg-neutral-300 lg:size-16">
                      <Image
                        src={founder}
                        alt="founder"
                        fill
                        className="object-cover"
                        sizes="100%"
                      />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-semibold">Anthony Evans</h3>
                      <span className="text-sm">Founder Stockmart</span>
                    </div>
                  </div>
                  <div>
                    <span className="relative inline-block aspect-video h-14 text-neutral-400">
                      <Image
                        src={signature}
                        alt="founder"
                        fill
                        className="object-cover"
                        sizes="100%"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
