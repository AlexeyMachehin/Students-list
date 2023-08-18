import { IStudent } from '@/types/student';

export function updateStudents(students: IStudent[], id: number): IStudent[] {
  const updatedStudents = students.filter(student => student.id !== id);
  return updatedStudents;
}
