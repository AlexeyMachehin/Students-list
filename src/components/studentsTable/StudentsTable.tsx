import { IStudent } from '@/types/student';
import { calculateAge } from '@/utils/calculateAge';
import { IupdateStudents } from '@/utils/updateStudents';
import classes from './studentsTable.module.css';
import { Specialities } from '@/types/specialties';

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
              <td>{student.name}</td>
              <td>{Specialities.toReadonly(student.specialty)}</td>
              <td>{student.group}</td>
              <td>{calculateAge(student.birthday)}</td>
              <td>{student.rating}</td>
              <td>
                <button
                  className={`${classes.colorCircle} ${classes[student.color]}`}
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
  );
}
