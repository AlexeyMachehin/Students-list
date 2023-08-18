import { useEffect, useState } from 'react';
import { IStudent } from '@/types/student';
import { fetchUsers } from '@/utils/fetchUsers';
import { searchStudents } from '@/utils/searchStudents';
import { StudentsTable } from '../studentsTable/StudentsTable';
import { Select } from '../select/Select';
import { sortStudents } from '@/utils/sortStudents';
import { SortOptions } from '@/types/sortOptions';
import { SearchInput } from '../searchInput/SearchInput';
import { updateStudents } from '@/utils/updateStudents';
import classes from './mainContent.module.css';

export function MainContent() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [foundStudents, setFoundStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    fetchUsers().then(studentsData => setStudents(studentsData));
  }, []);

  useEffect(() => {
    setFoundStudents(searchStudents(searchQuery, students));
  }, [searchQuery]);

  const selectHandler = (value: SortOptions): void => {
    setStudents(sortStudents(students, value));
  };

  const updateStudentsHandler = (
    studentsForUpdate: IStudent[],
    studentId: number,
  ): void => {
    setStudents(updateStudents(studentsForUpdate, studentId));
  };

  return (
    <div className={classes.mainContent}>
      <div className="container">
        <h1>Студенты</h1>

        <div className={classes.filters}>
          <SearchInput handler={setSearchQuery} />

          <Select handler={selectHandler}>
            <option value={SortOptions.NameAsc}>Имя А-Я</option>
            <option value={SortOptions.NameDesc}>Имя Я-А</option>
            <option value={SortOptions.AgeDesc}>Сначала старше</option>
            <option value={SortOptions.RatingDesc}>Высокий рейтинг</option>
            <option value={SortOptions.RatingAsc}>Низкий рейтинг</option>
          </Select>
        </div>

        <StudentsTable
          students={foundStudents.length ? foundStudents : students}
          updateStudentsHandler={updateStudentsHandler}
        />
      </div>
    </div>
  );
}
