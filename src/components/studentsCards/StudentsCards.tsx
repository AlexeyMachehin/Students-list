import { IStudent } from '@/types/student';
import { IupdateStudents } from '@/utils/updateStudents';
import { StudentCard } from './studentCard/StudentCard';
import classes from './studentCards.module.css';

interface IStudentsCardsProps {
  students: IStudent[];
  updateStudentsHandler: ({
    studentsForUpdate,
    id,
    color,
  }: IupdateStudents) => void;
}

export function StudentsCards({
  students,
  updateStudentsHandler,
}: IStudentsCardsProps) {
  return (
    <div>
      {students.length ? (
        <section className={classes.cards}>
          {students.map(student => (
            <StudentCard
              key={student.id}
              students={students}
              student={student}
              updateStudentsHandler={updateStudentsHandler}
            />
          ))}
        </section>
      ) : (
        <div className={classes.emptyList}>Список студентов пуст</div>
      )}
    </div>
  );
}
