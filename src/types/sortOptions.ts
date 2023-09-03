/* eslint-disable @typescript-eslint/no-namespace */
export enum SortOptions {
  NameAsc = 'name-asc',
  NameDesc = 'name-desc',
  AgeAsc = 'age-asc',
  AgeDesc = 'age-desc',
  RatingDesc = 'rating-desc',
  RatingAsc = 'rating-asc',
}

export namespace SortOptions {
  const MAP_NAME: Record<SortOptions, string> = {
    [SortOptions.NameAsc]: 'Имя А-Я',
    [SortOptions.NameDesc]: 'Имя Я-А',
    [SortOptions.AgeAsc]: 'Сначала моложе',
    [SortOptions.AgeDesc]: 'Сначала старше',
    [SortOptions.RatingDesc]: 'Высокий рейтинг',
    [SortOptions.RatingAsc]: 'Низкий рейтинг',
  };

  export function toArray(): SortOptions[] {
    return Object.keys(MAP_NAME) as SortOptions[];
  }

  export function toReadonly(option: SortOptions): string {
    return MAP_NAME[option];
  }
}
