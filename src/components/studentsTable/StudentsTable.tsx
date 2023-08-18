import { IStudent } from '@/types/student';
import classes from './studentsTable.module.css';

interface IStudentsTableProps {
  students: IStudent[];
  updateStudentsHandler: any;
}

export function StudentsTable({
  students,
  updateStudentsHandler,
}: IStudentsTableProps) {
  return (
    <table>
      <thead>
        <th></th>
        <th>ФИО</th>
        <th>Специальность</th>
        <th>Группа</th>
        <th>Возраст</th>
        <th>Рейтинг</th>
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
              <td>{student.specialty}</td>
              <td>{student.group}</td>
              <td>{student.birthday}</td>
              <td>{student.rating}</td>
              <td>{student.color}</td>
              <td>
                <button
                  onClick={() => updateStudentsHandler(students, student.id)}>
                  <img src="/cart.svg" alt="cart" />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <div>Список студентов пуст</div>
        )}
      </tbody>
    </table>
  );
}
