'use strict';
let todos = readTodo();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodo() {
  const todos = localStorage.getItem('todos-storage');
  if (todos) {
    const items = JSON.parse(todos);
    return items;
  }
  return [];
}
