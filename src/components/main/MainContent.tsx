import { useEffect, useState } from 'react';
import { IStudent } from '@/types/student';
import { fetchUsers } from '@/utils/fetchUsers';
import { searchStudents } from '@/utils/searchStudents';
import { StudentsTable } from '../studentsTable/StudentsTable';
import { sortStudents } from '@/utils/sortStudents';
import { SortOptions } from '@/types/sortOptions';
import { SearchInput } from '../searchInput/SearchInput';
import { updateStudents } from '@/utils/updateStudents';
import { DropdownMenu } from '../dropdownMenu/DropdownMenu';
import { Trigger } from '../trigger/Trigger';
import { DEFAULT_SORT_VALUE } from '@/const/const';
import classes from './mainContent.module.css';

export function MainContent() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [foundStudents, setFoundStudents] = useState<IStudent[]>([]);
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_VALUE);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchUsers().then(studentsData =>
      setStudents(sortStudents(studentsData, DEFAULT_SORT_VALUE)),
    );
  }, []);

  useEffect(() => {
    setFoundStudents(searchStudents(searchQuery, students));
  }, [searchQuery]);

  const handleClickOnItem = (value: SortOptions): void => {
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

          <DropdownMenu
            setIsDropdownOpen={setIsDropdownOpen}
            trigger={
              <Trigger
                isDropdownOpen={isDropdownOpen}
                sortOption={sortOption}
              />
            }>
            {SortOptions.toArray().map((option, index) => (
              <div
                key={index}
                className={classes.option}
                onClick={() => {
                  setSortOption(option);
                  handleClickOnItem(option);
                }}>
                <div>{SortOptions.toReadonly(option)}</div>
                {sortOption === option && (
                  <img src="/checkMark.svg" alt="checkMark" />
                )}
              </div>
            ))}
          </DropdownMenu>
        </div>

        <StudentsTable
          students={
            foundStudents.length || searchQuery ? foundStudents : students
          }
          updateStudentsHandler={updateStudentsHandler}
        />
      </div>
    </div>
  );
}
