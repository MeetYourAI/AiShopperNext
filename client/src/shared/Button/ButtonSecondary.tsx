import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonSecondaryProps extends ButtonProps {
  href?: any;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  ...args
}) => {
  const CLASSES = `text-primary border-2 border-primary/15 dark:border-neutral-500 dark:text-white hover:border-primary transition-all duration-200 text-sm ${className}`;

  return <Button className={CLASSES} {...args} />;
};

export default ButtonSecondary;
