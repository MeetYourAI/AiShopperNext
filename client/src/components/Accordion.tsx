import type { FC } from 'react';
import React from 'react';

type AccordionProps = {
  question: string;
  answer: string;
  idx: number;
};
const Accordion: FC<AccordionProps> = ({ question, answer, idx }) => {
  return (
    <div className="">
      <details className="group">
        <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-5">
          <div className="inline-flex items-center gap-4">
            <span className=" inline-flex size-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 lg:size-12">
              {idx + 1}
            </span>
            <span className="inline-block">{question}</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="block size-5 group-open:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hidden size-5 group-open:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>
        <div className="pb-8 pl-16 text-sm text-neutral-500 dark:text-neutral-300">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
};

export default Accordion;
