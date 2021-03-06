const initialState = {
  // 1: All 2: Active 3: Completed
  tab: 1,

  // TODOS
  // {
  //   id: Number,
  //   task: String,
  //   checked: Boolean
  // }
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
    case 'DELETE_ALL':
      return {
        ...state,
        todos: state.todos.filter((e) => !e.checked)
      }
    default:
      return state;
  }
}

export default rootReducer;