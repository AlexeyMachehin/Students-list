export function calculateAge(birthday: string): number {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  const isBeforeBirthday =
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate());

  return isBeforeBirthday ? yearsDiff - 1 : yearsDiff;
}
