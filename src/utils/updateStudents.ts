import { IStudent } from '@/types/student';

export interface IupdateStudents {
  studentsForUpdate: IStudent[];
  id?: number;
  color?: string;
}

export function updateStudents({
  studentsForUpdate,
  id,
  color,
}: IupdateStudents): IStudent[] {
  let updatedStudents = null;

  if (id) {
    updatedStudents = studentsForUpdate.filter(student => student.id !== id);
  }

  if (color) {
    updatedStudents = studentsForUpdate.filter(
      student => student.color === color,
    );
  }

  if (updatedStudents && updatedStudents.length) {
    return updatedStudents;
  } else {
    return [];
  }
}
