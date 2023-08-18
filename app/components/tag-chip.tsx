import Link, { LinkProps } from 'next/link';

export interface ChipProps extends LinkProps, React.PropsWithChildren {}

export default function TagChip({ children, ...props }: ChipProps) {
  return (
    <Link
      {...props}
      className="box-border flex flex-row gap-1 rounded-full border border-slate-500 px-2 py-1 text-xs text-gray-600 decoration-solid decoration-2 underline-offset-2  before:content-['#'] hover:underline"
    >
      {children}
    </Link>
  );
}
