import { SortOptions } from '@/types/sortOptions';
import classes from './trigger.module.css';

export function Trigger({
  sortOption,
  isDropdownOpen,
}: {
  sortOption: SortOptions;
  isDropdownOpen: boolean;
}) {
  return (
    <button className={classes.trigger}>
      <div>{SortOptions.toReadonly(sortOption)}</div>
      <img
        className={isDropdownOpen ? classes.sortIconInverted : classes.sortIcon}
        src="/sortIcon.svg"
        alt="sortIcon"
      />
    </button>
  );
}
