// import Link from 'next/link';
import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
}

const ButtonLink: React.FC<ButtonPrimaryProps> = ({
  className = '',
  ...args
}) => {
  return (
    <Button
      sizeClass="px-1"
      className={`font-normal text-neutral-500 underline dark:text-neutral-300 ${className}`}
      {...args}
    />
  );
};

export default ButtonLink;
