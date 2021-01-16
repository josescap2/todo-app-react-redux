const initialState = {
  // 1: All 2: Active 3: Completed
  tab: 1,

  todos: []
};

function rootReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'SET_TAB':
      return {
        ...state,
        tab: action.payload
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'TOGGLE_CHECK':
      let index = state.todos.findIndex(e => e.id === action.payload);
      let todos = [...state.todos];
      todos[index].checked = !todos[index].checked
      return {
        ...state,
        todos
      };
    case 'DELETE_TODO':
      let filtered = state.todos.filter((e) => e.id !== action.payload);
      return {
        ...state,
        todos: [...filtered]
      };
    default:
      return state;
  }
}

export default rootReducer;