import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import React from 'react';

type GuideCardProps = {
  Icon: ReactNode | any;
  text: string;
  href: string;
};

const GuideCard: FC<GuideCardProps> = ({ Icon, text, href }) => {
  return (
    <Link
      href={href}
      className="duration group h-full transition-all hover:bg-white"
    >
      <div className="h-full rounded-md border-2 border-primary/10 p-5 dark:border-neutral-600">
        <div className="flex h-full flex-col justify-between">
          <span className="mb-4 inline-block">
            <span className="mb-12  flex size-14 items-center justify-center rounded-md bg-white text-3xl text-primary dark:bg-neutral-900 dark:text-neutral-300">
              <Icon />
            </span>
            <p className="font-bold capitalize leading-tight tracking-tight">
              {text}
            </p>
          </span>
          <div className="">
            <span className="border-b text-sm font-bold leading-none text-neutral-500 group-hover:text-primary">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
