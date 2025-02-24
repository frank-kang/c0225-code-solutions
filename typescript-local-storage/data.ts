/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodo();
function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodo(): any[] {
  const todos = localStorage.getItem('todos-storage');
  if (!todos) throw new Error('todos does not exist');
  const items: any[] = JSON.parse(todos);
  return items;
}
