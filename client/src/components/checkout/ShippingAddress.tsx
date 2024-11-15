'use client';

import type { FC } from 'react';
import React, { useState } from 'react';
import { FiTruck } from 'react-icons/fi';
import { MdOutlineTakeoutDining } from 'react-icons/md';

import Checkbox from '@/shared/Checkbox/Checkbox';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import Radio from '@/shared/Radio/Radio';
import Select from '@/shared/Select/Select';

interface Props {
  isActive: boolean;
  onCloseActive: () => void;
  onOpenActive: () => void;
}

const ShippingAddress: FC<Props> = () => {
  const [methodActive, setMethodActive] = useState<'Ship' | 'Pickup'>('Ship');

  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <h3 className="mb-2 text-xl font-semibold">Delivery</h3>
      </div>
      <div className="mb-4 divide-y divide-neutral-300 rounded-md border  border-neutral-300 dark:divide-neutral-600  dark:border-neutral-600">
        <div
          className={`flex items-center justify-between p-4 ${methodActive === 'Ship' && 'bg-blue-50 dark:bg-neutral-800'} `}
        >
          <Radio
            name="shipment-method"
            id="Ship"
            label="Ship"
            defaultChecked={methodActive === 'Pickup'}
            onChange={(e) => setMethodActive(e as any)}
          />
          <div className="">
            <FiTruck />
          </div>
        </div>
        <div
          className={`flex items-center justify-between p-4 ${methodActive === 'Pickup' && 'bg-blue-50 dark:bg-neutral-800'}`}
        >
          <Radio
            name="shipment-method"
            id="Pickup"
            label="Pickup"
            defaultChecked={methodActive === 'Pickup'}
            onChange={(e) => setMethodActive(e as any)}
          />
          <div className="">
            <MdOutlineTakeoutDining />
          </div>
        </div>
      </div>

      <div className={`space-y-2 `}>
        {/* ============ */}
        <div className="grid grid-cols-1">
          <div>
            <FormItem>
              <Select
                sizeClass="h-12 px-4 py-3"
                className="rounded border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="United States "
              >
                <option value="United States">United States</option>
                <option value="United States">Canada</option>
                <option value="United States">Mexico</option>
                <option value="United States">Israel</option>
                <option value="United States">France</option>
                <option value="United States">England</option>
                <option value="United States">Laos</option>
                <option value="United States">China</option>
              </Select>
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                placeholder="First Name"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="John"
              />
            </FormItem>
          </div>
          <div>
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                placeholder="Last Name"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="Doe"
              />
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="space-y-4 sm:flex sm:space-x-3 sm:space-y-0">
          <div className="flex-1">
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                placeholder=""
                defaultValue="1234 Main Street"
                type="text"
              />
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="grid grid-cols-1">
          <div>
            <FormItem>
              <Input
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300  bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="Arizona"
              />
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
          <div>
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="Cityville"
              />
            </FormItem>
          </div>
          <div>
            <FormItem>
              <Select
                sizeClass="h-12 px-4 py-3"
                className="rounded border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="United States "
              >
                <option value="United States">United States</option>
                <option value="United States">Canada</option>
                <option value="United States">Mexico</option>
                <option value="United States">Israel</option>
                <option value="United States">France</option>
                <option value="United States">England</option>
                <option value="United States">Laos</option>
                <option value="United States">China</option>
              </Select>
            </FormItem>
          </div>

          <div>
            <FormItem>
              <Input
                rounded="rounded"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                defaultValue="12345"
              />
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="">
          <Checkbox
            className="!text-sm"
            name="uudai"
            label="Email me news and offers"
            defaultChecked
          />
        </div>

        <div className="pt-6">
          <h4 className="font-medium">Shipping Method</h4>
          <p className="mt-2 rounded bg-neutral-100 p-4 text-sm text-neutral-500 dark:bg-neutral-800 dark:text-neutral-300">
            Enter you shipping details to view available shipping methods
          </p>
        </div>

        {/* ============ */}
      </div>
    </div>
  );
};

export default ShippingAddress;
