'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { RiUser6Line } from 'react-icons/ri';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';

const UserAccount = () => {
  return (
    <div className="pt-1 font-medium">
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="flex items-center gap-1 text-sm">
          <span className="flex items-center justify-center">
            <RiUser6Line className="" size={18} />
          </span>
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
          <Menu.Items className="divide-gray-100 absolute right-0 mt-2 w-52 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-neutral-900">
            <div className="flex flex-col p-6">
              <ButtonPrimary href="/account/login">
                <RiUser6Line className="" size={18} />
                <span>Log In</span>
              </ButtonPrimary>
              <Link href="/account/signup" className="mt-2 text-center">
                <span>Create Account</span>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAccount;
