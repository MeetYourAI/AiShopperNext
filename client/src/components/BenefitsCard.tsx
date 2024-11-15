// import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import type { FC, ReactNode } from 'react';
import React from 'react';

type BenefitsCardProps = {
  Icon: ReactNode | any;
  text: string;
  title: string;
};

const BenefitCard: FC<BenefitsCardProps> = ({ Icon, text, title }) => {
  return (
    <div className="h-full rounded-md group-first:pl-0 lg:pl-8">
      <div className="flex h-full justify-between gap-4 lg:gap-8">
        <div>
          <span className="mb-14 inline-block rounded-md bg-white p-2 text-xl text-blue-500 dark:bg-neutral-900 dark:text-neutral-200">
            <Icon />
          </span>
        </div>
        <div className="text-sm xl:text-base">
          <h2 className="mb-2 font-bold">{title}</h2>
          <p className="">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
