import React from 'react';
import { Specialities } from '@/types/specialties';
import { calculateAge } from '@/utils/calculateAge';
import { IStudent } from '@/types/student';
import { IupdateStudents } from '@/utils/updateStudents';
import classes from './tableRow.module.css';

interface ITableRowProps {
  students: IStudent[];
  student: IStudent;
  updateStudentsHandler: ({
    studentsForUpdate,
    id,
    color,
  }: IupdateStudents) => void;
}

export const TableRow = React.memo(function TableRow({
  students,
  student,
  updateStudentsHandler,
}: ITableRowProps) {
  return (
    <tr>
      <td>
        <img className={classes.avatar} src={student.avatar} alt="avatar" />
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
  );
});
