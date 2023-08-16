import Link, { LinkProps } from 'next/link';

export interface ChipProps extends LinkProps, React.PropsWithChildren {}

export default function TagChip({ children, ...props }: ChipProps) {
  return (
    <Link
      {...props}
      className="rounded-full bg-slate-300 px-2 decoration-solid decoration-2 underline-offset-2 before:content-['#'] hover:underline"
    >
      {children}
    </Link>
  );
}
