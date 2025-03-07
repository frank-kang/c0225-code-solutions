interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP Error. Status: ${response.status}`);
    }
    const users = (await response.json()) as User;
    console.log(users);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUsers();
