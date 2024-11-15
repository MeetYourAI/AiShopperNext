'use client';

import type { Route } from 'next';
import Link from 'next/link';
import type { ButtonHTMLAttributes, FC } from 'react';
import React from 'react';
import { IoCaretForwardOutline } from 'react-icons/io5';
// import { IoCaretForwardOutline } from "react-icons/io5";

export interface ButtonProps {
  className?: string;
  sizeClass?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  href?: Route;
  onClick?: () => void;
  children?: React.ReactNode;
  showPointer?: boolean;
}

const Button: FC<ButtonProps> = ({
  className = 'text-neutral-200 disabled:cursor-not-allowed',
  sizeClass = 'py-3 px-4 sm:py-3 sm:px-6 text-sm',
  disabled = false,
  href,
  children,
  type,
  loading,
  showPointer,
  onClick = () => {},
}) => {
  const CLASSES = `relative font-bold h-auto inline-flex items-center justify-center gap-1 rounded transition-colors group  ${sizeClass} ${className}`;

  const renderLoading = () => {
    return (
      <svg
        className="-ml-1 mr-3 size-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  };

  if (href) {
    // const LINK_CLASSES = `relative h-auto inline-flex items-center justify-center transition-colors border-b leading-none hover:text-primary`;
    return (
      <Link href={href} className={CLASSES} onClick={onClick}>
        {showPointer ? (
          <>
            <span className="transition-all duration-200 group-hover:-translate-x-2">
              {children || `This is Button`}
            </span>
            <IoCaretForwardOutline
              size={12}
              className="absolute right-7 opacity-0 transition-all duration-200 group-hover:right-4 group-hover:opacity-100"
            />
          </>
        ) : (
          <span className="inline-flex items-center justify-center gap-2">
            {children || `This is a Link`}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${CLASSES} whitespace-nowrap`}
      onClick={onClick}
      /* eslint-disable-next-line react/button-has-type */
      type={type}
    >
      {loading && renderLoading()}
      {showPointer ? (
        <>
          <span className="transition-all duration-200 group-hover:-translate-x-2  ">
            {children || `This is Button`}
          </span>
          <IoCaretForwardOutline
            size={12}
            className="absolute right-7 opacity-0 transition-all duration-200 group-hover:right-4 group-hover:opacity-100"
          />
        </>
      ) : (
        <span className="inline-flex items-center justify-center gap-2">
          {children || `This is Button`}
        </span>
      )}
    </button>
  );
};

export default Button;
