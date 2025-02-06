/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  const firstInitial: string = person.firstName[0];
  const secondInitial: string = person.lastName[0];
  return firstInitial + secondInitial;
}
