import Image from 'next/image';
import React from 'react';

import LoginForm from '@/components/account/LoginForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import login from '@/images/login.jpg';
import ButtonLink from '@/shared/Button/ButtonLink';

const PageLogin = () => {
  const breadcrumbItems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: 'Account' },
  ];
  return (
    <main>
      <div data-nc-id="PageLogin" className="container">
        <Breadcrumbs Items={breadcrumbItems} />
        <div className="pb-24 pt-2">
          <div className="flex flex-col md:flex-row">
            <div className="order-2 basis-1/2 md:order-1">
              <div className="relative aspect-video h-full bg-neutral-300 md:aspect-auto  lg:aspect-[8/7]">
                <Image
                  src={login}
                  alt="about us"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="order-1 flex basis-1/2 items-center bg-white px-5 py-8 dark:bg-neutral-900 md:order-2 lg:px-24">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageLogin;
