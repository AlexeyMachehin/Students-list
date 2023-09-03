import { useEffect, useState } from 'react';
import { IStudent } from '@/types/student';
import { fetchUsers } from '@/utils/fetchUsers';
import { searchStudents } from '@/utils/searchStudents';
import { StudentsTable } from '../studentsTable/StudentsTable';
import { sortStudents } from '@/utils/sortStudents';
import { SortOptions } from '@/types/sortOptions';
import { SearchInput } from '../searchInput/SearchInput';
import { DropdownMenu } from '../dropdownMenu/DropdownMenu';
import { Trigger } from '../trigger/Trigger';
import { DEFAULT_SORT_VALUE } from '@/const/const';
import { IupdateStudents, updateStudents } from '@/utils/updateStudents';
import { StudentsCards } from '../studentsCards/StudentsCards';
import { useIsMobile } from '@/hooks/useIsMobile';
import classes from './mainContent.module.css';

export function MainContent() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [foundStudents, setFoundStudents] = useState<IStudent[]>([]);
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_VALUE);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    fetchUsers().then(studentsData => {
      setStudents(sortStudents(studentsData, DEFAULT_SORT_VALUE));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setFoundStudents(searchStudents(searchQuery, students));
  }, [searchQuery, students]);

  const handleClickOnItem = (value: SortOptions): void => {
    setStudents(sortStudents(students, value));
  };

  const updateStudentsHandler = ({
    studentsForUpdate,
    id,
    color,
  }: IupdateStudents): void => {
    setStudents(updateStudents({ studentsForUpdate, id, color }));
  };

  return (
    <div>
      {isLoading ? (
        <h2 className={classes.loadingMessage}>Загрузка студентов...</h2>
      ) : (
        <main className={classes.mainContent}>
          <div className="container">
            <h1>Студенты</h1>

            <section className={classes.filters}>
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
            </section>

            {isMobile ? (
              <StudentsCards
                students={
                  foundStudents.length || searchQuery ? foundStudents : students
                }
                updateStudentsHandler={updateStudentsHandler}
              />
            ) : (
              <StudentsTable
                students={
                  foundStudents.length || searchQuery ? foundStudents : students
                }
                updateStudentsHandler={updateStudentsHandler}
              />
            )}
          </div>
        </main>
      )}
    </div>
  );
}
