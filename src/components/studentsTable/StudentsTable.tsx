import { IStudent } from '@/types/student';
import './studentsTable.module.css';

export function StudentsTable({ students }: { students: IStudent[] }) {
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
        {students.map(student => (
          <tr key={student.id}>
            <td>{/* <img src={student.avatar} alt="avatar" /> */}</td>
            <td>{student.name}</td>
            <td>{student.specialty}</td>
            <td>{student.group}</td>
            <td>{student.birthday}</td>
            <td>{student.rating}</td>
            <td>{student.color}</td>
            <td>
              <button>cart</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
