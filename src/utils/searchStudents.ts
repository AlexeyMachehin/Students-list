import { IStudent } from '@/types/student';

export function searchStudents(
  query: string,
  students: IStudent[],
): IStudent[] {
  const searchString = query.toLowerCase();
  const matchingStudents: IStudent[] = [];

  students.forEach(student => {
    const studentName = student.name.toLowerCase();
    if (studentName.includes(searchString)) {
      matchingStudents.push(student);
    }
  });

  return matchingStudents;
}
