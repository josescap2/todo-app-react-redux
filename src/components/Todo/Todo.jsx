import { useSelector, useDispatch } from 'react-redux';
import { toggleCheck, deleteTodo } from './../../redux/actions.js';

export default function Todos(props) {
  // DISPATCH
  let dispatch = useDispatch();
  
  // VARIABLES
  let { task, checked, id } = props.todo;

  // SELECTORS
  let tab = useSelector(state => state.tab);

  // HANDLERS
  function handleToggleCheck() {
    dispatch(toggleCheck(id));
  }

  function handleDeleteTodo() {
    dispatch(deleteTodo(id));
  }

  // RETURN
  return (
    <div className="todo">
      <div className="left" onClick={() => handleToggleCheck()}>
        <input type="checkbox" checked={checked} className="todo--check" />
        <p className="todo--text">{task}</p>
      </div>
      {
        checked && tab === 3 &&(
          <div className="right">
            <button className="todo--delete" onClick={() => handleDeleteTodo()}>
              <span class="material-icons todo--delete--icon">
                delete_outline
              </span>
            </button>
          </div>
        )
      }
    </div>
  );
}