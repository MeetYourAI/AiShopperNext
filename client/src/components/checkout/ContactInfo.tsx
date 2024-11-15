import Link from 'next/link';
import React from 'react';

import Checkbox from '@/shared/Checkbox/Checkbox';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';

const ContactInfo = () => {
  return (
    <div className="z-0 ">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Contact</h3>
          <span>
            <Link
              href="/account/login"
              className="text-sm text-primary underline"
            >
              Log In
            </Link>
          </span>
        </div>
        <div className="">
          <FormItem>
            <Input
              rounded="rounded"
              sizeClass="h-12 px-4 py-3"
              placeholder="Email Address"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              type="email"
            />
          </FormItem>
        </div>
        <div className="">
          <Checkbox
            className="!text-sm"
            name="uudai"
            label="Email me news and offers"
            defaultChecked
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
