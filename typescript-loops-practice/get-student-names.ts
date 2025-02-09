/* exported getStudentNames */
interface People {
  name: string;
}

function getStudentNames(students: People[]): any[] {
  const names: string[] = [];
  for (const student of students) {
    names.push(student.name);
  }
  return names;
}
