let id = 0;

export function setTab(number) {
  return { type: 'SET_TAB', payload: number }
}

export function addTodo(task) {
  return { type: 'ADD_TODO', payload: { task, checked: false, id: ++id } };
}

export function toggleCheck(id) {
  return { type: 'TOGGLE_CHECK', payload: id};
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', payload: id};
}

export function deleteAllCompleted() {
  return { type: 'DELETE_ALL' }
}