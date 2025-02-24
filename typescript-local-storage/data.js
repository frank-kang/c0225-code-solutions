'use strict';
let todos = readTodo();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodo() {
  const todos = localStorage.getItem('todos-storage');
  if (!todos) throw new Error('todos does not exist');
  const items = JSON.parse(todos);
  return items;
}
