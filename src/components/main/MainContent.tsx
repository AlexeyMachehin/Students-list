import { useEffect, useState } from 'react';
import { IStudent } from '@/types/student';
import { fetchUsers } from '@/utils/fetchUsers';
import { searchStudents } from '@/utils/searchStudents';
import { StudentsTable } from '../studentsTable/StudentsTable';
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

  return (
    <div className={classes.mainContent}>
      <div className="container">
        <h1>Студенты</h1>

        <div className={classes.filters}>
          <input
            className={classes.searchInput}
            type="search"
            placeholder="Поиск по имени"
            onChange={e => setSearchQuery(e.target.value)}
          />

          <select
            id="sortSelect"
            //  onchange="sortItems()"
          >
            <option value="name-asc">Имя А-Я</option>
            <option value="name-desc">Имя Я-А</option>
            <option value="age-asc">Сначала моложе</option>
            <option value="age-desc">Сначала старше</option>
            <option value="rating-desc">Высокий рейтинг</option>
            <option value="rating-asc">Низкий рейтинг</option>
          </select>
        </div>

        <StudentsTable
          students={foundStudents.length ? foundStudents : students}
        />
      </div>
    </div>
  );
}
