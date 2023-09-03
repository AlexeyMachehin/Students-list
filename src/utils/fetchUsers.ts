export async function fetchUsers() {
  try {
    const response = await fetch(String(process.env.STUDENTS_URL));

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const studentsData = await response.json();

    return studentsData.students;
  } catch (error) {
    console.log(`Cannot fetch users: ${error}`);
    alert(`Cannot fetch users: ${error}`);
    return [];
  }
}
