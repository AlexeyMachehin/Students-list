export async function fetchUsers() {
  try {
    const response = await fetch(
      'https://front-assignment-api.2tapp.cc/api/persons',
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const studentsData = await response.json();

    if (!studentsData.students) {
      throw new Error('Data structure is not as expected');
    }

    return studentsData.students;
  } catch (error) {
    console.log(`Cannot fetch users: ${error}`);
    return [];
  }
}
