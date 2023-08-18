import { SortOptions } from '@/types/sortOptions';
import { IStudent } from '@/types/student';
import { calculateAge } from './calculateAge';

export function sortStudents(
  students: IStudent[],
  sortBy: SortOptions,
): IStudent[] {
  switch (sortBy) {
    case SortOptions.NameAsc:
      return students.slice().sort((a, b) => a.name.localeCompare(b.name));

    case SortOptions.NameDesc:
      return students.slice().sort((a, b) => b.name.localeCompare(a.name));

    case SortOptions.AgeAsc:
      return students
        .slice()
        .sort((a, b) => calculateAge(a.birthday) - calculateAge(b.birthday));

    case SortOptions.AgeDesc:
      return students
        .slice()
        .sort((a, b) => calculateAge(b.birthday) - calculateAge(a.birthday));

    case SortOptions.RatingAsc:
      return students.slice().sort((a, b) => a.rating - b.rating);

    case SortOptions.RatingDesc:
      return students.slice().sort((a, b) => b.rating - a.rating);

    default:
      return students;
  }
}
