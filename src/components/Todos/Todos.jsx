import { useSelector } from 'react-redux';

import Todo from './../Todo/Todo';

export default function Todos() {
  // SELECTOR
  let todos = useSelector(state => state.todos);
  let tab = useSelector(state => state.tab)

  // RETURN
  return (
    <div className="todos">
      {
        todos.map((e, i) => ( tab === 1 && (
          <Todo key={i} todo={e} />
        ) ) )
      }
      {
        todos.map((e, i) => ( tab === 2 && !e.checked && (
          <Todo key={i} todo={e} />
        ) ) )
      }
      {
        todos.map((e, i) => ( tab === 3 && e.checked && (
          <Todo key={i} todo={e} />
        ) ) )
      }
    </div>
  );
}