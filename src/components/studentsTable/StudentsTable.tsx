import { IStudent } from '@/types/student';
import { IupdateStudents } from '@/utils/updateStudents';
import { TableRow } from './tableRow/TableRow';
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
              <TableRow
                key={student.id}
                students={students}
                student={student}
                updateStudentsHandler={updateStudentsHandler}
              />
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
