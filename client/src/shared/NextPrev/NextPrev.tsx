'use client';

import type { FC } from 'react';
import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

export interface NextPrevProps {
  className?: string;
  btnClassName?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  disableNext?: boolean;
  disablePrev?: boolean;
}

const NextPrev: FC<NextPrevProps> = ({
  className = '',
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = 'w-12 h-12',
  disableNext,
  disablePrev,
}) => {
  const [focus, setFocus] = React.useState<'left' | 'right'>('right');

  return (
    <div className={`nc-NextPrev relative flex items-center ${className}`}>
      <button
        type="button"
        className={`${btnClassName} mr-2 flex items-center justify-center rounded-full border ${
          focus === 'left'
            ? 'border-primary bg-primary text-white'
            : 'border-slate-700'
        }`}
        onClick={(e) => {
          e.preventDefault();
          onClickPrev();
        }}
        title="Prev"
        disabled={disablePrev}
        onMouseEnter={() => setFocus('left')}
      >
        <FaLongArrowAltLeft className="size-5" />
      </button>
      <button
        type="button"
        className={`${btnClassName} flex items-center justify-center rounded-full border ${
          focus === 'right'
            ? 'border-primary bg-primary text-white'
            : 'border-slate-700'
        }`}
        onClick={(e) => {
          e.preventDefault();
          onClickNext();
        }}
        title="Next"
        disabled={disableNext}
        onMouseEnter={() => setFocus('right')}
      >
        <FaLongArrowAltRight className="size-5" />
      </button>
    </div>
  );
};

export default NextPrev;
