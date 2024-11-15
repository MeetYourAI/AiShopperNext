import Link from 'next/link';
import React from 'react';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import Textarea from '@/shared/TextArea/TextArea';

const ContactForm = () => {
  return (
    <div className="w-full space-y-5">
      <h4 className="text-lg font-semibold">Feel Free to Contact Us</h4>
      <div className="grid gap-2 md:grid-cols-2">
        <FormItem>
          <Input
            placeholder="Full name"
            sizeClass="h-14 px-4 py-5"
            type="text"
            rounded="rounded-sm"
            className="border-neutral-300 bg-white placeholder:text-neutral-500 focus:border-primary"
          />
        </FormItem>
        <FormItem>
          <Input
            placeholder="example@email.com"
            sizeClass="h-14 px-4 py-5"
            type="email"
            rounded="rounded-sm"
            className="border-neutral-300 bg-white placeholder:text-neutral-500 focus:border-primary"
          />
        </FormItem>
      </div>
      <div className="">
        <FormItem>
          <Input
            placeholder="(123) 456-7890"
            sizeClass="h-14 px-4 py-5"
            type="text"
            rounded="rounded-sm"
            className="border-neutral-300 bg-white placeholder:text-neutral-500 focus:border-primary"
          />
        </FormItem>
      </div>
      <FormItem>
        <Textarea
          placeholder="Enter your message here!"
          className="border border-neutral-300 bg-white p-4 placeholder:text-neutral-500 focus:border-primary dark:bg-neutral-950"
          rows={6}
        />
      </FormItem>
      <ButtonPrimary className="w-1/2 self-center" sizeClass="py-4 px-6">
        Send Request
      </ButtonPrimary>

      <div>
        <p className="w-4/5 text-sm text-neutral-500 dark:text-neutral-300">
          {`By pressing the button "Send Request", you confirm that you have read
          and are agreeing to our`}
          <span>
            <Link href="/" className="text-black underline dark:text-white">
              Terms of Use
            </Link>
          </span>{' '}
          regarding the storage of the data submitted through this form.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
