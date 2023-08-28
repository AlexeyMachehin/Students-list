import { IStudent } from '@/types/student';
import classes from './studentsTable.module.css';
import { calculateAge } from '@/utils/calculateAge';

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
              <td>{student.specialty}</td>
              <td>{student.group}</td>
              <td>{calculateAge(student.birthday)}</td>
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
        
            <td className={classes.emptyList} colSpan={7}>Список студентов пуст</td>
        
        )}
      </tbody>
    </table>
  );
}
