import { IStudent } from '@/types/student';
import { calculateAge } from '@/utils/calculateAge';
import { IupdateStudents } from '@/utils/updateStudents';
import { Specialities } from '@/types/specialties';
import classes from './studentsTable.module.css';

interface IStudentsTableProps {
  students: IStudent[];
  updateStudentsHandler: ({
    studentsForUpdate,
    id,
    color,
  }: IupdateStudents) => void;
}

export function StudentsTable({
  students,
  updateStudentsHandler,
}: IStudentsTableProps) {
  return (
    <div className={classes.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ФИО</th>
            <th>Специальность</th>
            <th>Группа</th>
            <th>Возраст</th>
            <th>Рейтинг</th>
          </tr>
        </thead>

        <tbody>
          {students.length ? (
            students.map(student => (
              <tr key={student.id}>
                <td>
                  <img
                    className={classes.avatar}
                    src={student.avatar}
                    alt="avatar"
                  />
                </td>
                <td>
                  <div className={classes.cellContent}>{student.name}</div>
                </td>
                <td>
                  <div className={classes.cellContent}>
                    {Specialities.toReadonly(student.specialty)}
                  </div>
                </td>
                <td>
                  <div className={classes.cellContent}>{student.group}</div>
                </td>
                <td>
                  <div className={classes.cellContent}>
                    {calculateAge(student.birthday)}
                  </div>
                </td>
                <td>
                  <div className={classes.cellContent}>{student.rating}</div>
                </td>
                <td>
                  <button
                    className={`${classes.colorCircle} ${
                      classes[student.color]
                    }`}
                    onClick={() =>
                      updateStudentsHandler({
                        studentsForUpdate: students,
                        color: student.color,
                      })
                    }></button>
                </td>
                <td>
                  <button
                    className={classes.deleteButton}
                    onClick={() =>
                      updateStudentsHandler({
                        studentsForUpdate: students,
                        id: student.id,
                      })
                    }>
                    <img src="/cart.svg" alt="cart" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <td className={classes.emptyList} colSpan={7}>
              Список студентов пуст
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}
