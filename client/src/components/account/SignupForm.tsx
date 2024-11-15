'use client';

import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import React from 'react';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';

const SignupForm = () => {
  const router = useRouter();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold">Create Account</h2>
      <form className=" " onSubmit={handleFormSubmit}>
        <div className="space-y-4">
          <div className="">
            <p>
              We have got a vision to uphold the culture of responsible
              manufacturing, and creating infinite products that inspire
              everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <FormItem>
              <Input
                type="email"
                rounded="rounded-sm"
                sizeClass="h-12 px-4 py-3"
                placeholder="first name"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:placeholder:text-neutral-300 dark:focus:border-neutral-500"
              />
            </FormItem>
            <FormItem>
              <Input
                type="password"
                rounded="rounded-sm"
                placeholder="last name"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:placeholder:text-neutral-300 dark:focus:border-neutral-500"
              />
            </FormItem>
          </div>

          <FormItem>
            <Input
              type="email"
              rounded="rounded-sm"
              sizeClass="h-12 px-4 py-3"
              placeholder="example@example.com"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:placeholder:text-neutral-300 dark:focus:border-neutral-500"
            />
          </FormItem>
          <FormItem>
            <Input
              type="password"
              rounded="rounded-sm"
              sizeClass="h-12 px-4 py-3"
              placeholder="password"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:placeholder:text-neutral-300 dark:focus:border-neutral-500"
            />
          </FormItem>
        </div>
        <div className="mt-8 gap-2 space-y-2 lg:flex lg:space-y-0">
          <ButtonPrimary showPointer type="submit" className="w-full lg:w-1/2">
            Create Account
          </ButtonPrimary>
          <ButtonSecondary
            showPointer
            onClick={() => router.push('/account/login')}
            className="w-full lg:w-1/2"
          >
            Login
          </ButtonSecondary>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
