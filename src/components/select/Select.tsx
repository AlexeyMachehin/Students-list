import { SortOptions } from '@/types/sortOptions';
import { ReactNode } from 'react';

interface ISelectProps {
  children: ReactNode;
  handler: (value: SortOptions) => void;
}

export function Select({ children, handler }: ISelectProps) {
  return (
    <select
      onChange={event => {
        handler(event.target.value as SortOptions);
      }}>
      {children}
    </select>
  );
}
