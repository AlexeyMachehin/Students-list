import classes from './searchInput.module.css';

export function SearchInput({ handler }: { handler: (value: string) => void }) {
  return (
    <div className={classes.searchInputWrapper}>
      <input
        className={classes.searchInput}
        type="search"
        placeholder="Поиск по имени"
        onChange={event => handler(event.target.value)}
      />
    </div>
  );
}
