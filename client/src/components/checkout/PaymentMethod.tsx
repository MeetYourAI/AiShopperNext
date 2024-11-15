import type { FC } from 'react';
import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa6';

import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';

interface Props {
  isActive: boolean;
  onCloseActive: () => void;
  onOpenActive: () => void;
}

const PaymentMethod: FC<Props> = () => {
  const renderDebitCredit = () => {
    return (
      <div className="flex items-start space-x-4 sm:space-x-6">
        <div className="flex-1">
          <div className="flex items-center justify-between px-4 py-2">
            <p className="text-sm font-medium">Debit / Credit Card</p>
            <div className={`p-2.5 `}>
              <FaRegCreditCard size={24} />
            </div>
          </div>

          <div className="space-y-3 bg-neutral-200 p-4 dark:bg-neutral-800">
            <div className="max-w-lg">
              <FormItem>
                <Input
                  autoComplete="off"
                  rounded="rounded-lg"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="Card number"
                  className="border-neutral-100 bg-white placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                  type="text"
                />
              </FormItem>
            </div>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <div className="sm:w-2/3">
                <FormItem>
                  <Input
                    autoComplete="off"
                    rounded="rounded-lg"
                    sizeClass="h-12 px-4 py-3"
                    className="border-neutral-300 bg-white placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                    placeholder="Expiration date (MM/YY)"
                  />
                </FormItem>
              </div>
              <div className="flex-1">
                <FormItem>
                  <Input
                    autoComplete="off"
                    rounded="rounded-lg"
                    sizeClass="h-12 px-4 py-3"
                    className="border-neutral-300 bg-white placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                    placeholder="CVC"
                  />
                </FormItem>
              </div>
            </div>

            <div className="max-w-lg">
              <FormItem>
                <Input
                  autoComplete="off"
                  rounded="rounded-lg"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="Card Holder name"
                  className="border-neutral-300 bg-white placeholder:text-neutral-500 focus:border-primary dark:border-neutral-600"
                  type="text"
                />
              </FormItem>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Payment</h3>
        <p className="text-sm">All transactions are secure and encrypted</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-600">
        <div>
          {/* ==================== */}
          {renderDebitCredit()}
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
