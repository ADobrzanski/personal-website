import Link, { LinkProps } from 'next/link';
import React from 'react';

export default function NavLink({
  children,
  ...props
}: { children: React.ReactNode } & LinkProps) {
  return (
    <Link
      className='decoration-solid decoration-2 underline-offset-2 hover:underline'
      {...props}
    >
      {children}
    </Link>
  );
}
