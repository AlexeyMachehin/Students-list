import React from 'react';
import { IStudent } from '@/types/student';
import { IupdateStudents } from '@/utils/updateStudents';
import { calculateAge } from '@/utils/calculateAge';
import { Specialities } from '@/types/specialties';
import classes from './studentCard.module.css';

interface IStudentsTableProps {
  student: IStudent;
  students: IStudent[];
  updateStudentsHandler: ({
    studentsForUpdate,
    id,
    color,
  }: IupdateStudents) => void;
}

export const StudentCard = React.memo(function StudentCard({
  student,
  students,
  updateStudentsHandler,
}: IStudentsTableProps) {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <img className={classes.avatar} src={student.avatar} alt="avatar" />

          <div>
            <div className={classes.name}>{student.name}</div>
            <div className={classes.nameSecondary}>
              <button
                className={`${classes.colorCircle} ${classes[student.color]}`}
                onClick={() =>
                  updateStudentsHandler({
                    studentsForUpdate: students,
                    color: student.color,
                  })
                }></button>

              <img className={classes.star} src="/star.svg" alt="star" />
              <div className={classes.rating}>{student.rating}</div>
            </div>
          </div>
        </div>

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
      </div>

      <div className={classes.main}>
        <div>
          <div className={classes.mainString}>
            <div className={classes.circle}></div>
            {calculateAge(student.birthday)}
          </div>

          <div className={classes.mainString}>
            <div className={classes.circle}></div>
            {Specialities.toReadonly(student.specialty)}
          </div>

          <div className={classes.mainString}>
            <div className={classes.circle}></div>
            {student.group}
          </div>
        </div>
      </div>
    </div>
  );
});
