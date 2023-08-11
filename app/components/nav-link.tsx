import Link, { LinkProps } from 'next/link';
import React from 'react';

export default function NavLink({
  children,
  ...props
}: { children: React.ReactNode } & LinkProps) {
  return (
    <Link
      className='px-4 py-2 font-semibold text-stone-500 decoration-solid decoration-2 underline-offset-2 hover:underline'
      {...props}
    >
      {children}
    </Link>
  );
}
