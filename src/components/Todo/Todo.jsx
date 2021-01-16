export default function Todos(props) {
  let { todo, checked } = props.todo;

  return (
    <div className="todo">
      <div className="left">
        <input type="checkbox" checked={checked} className="todo--check" />
        <p className="todo--text">{todo}</p>
      </div>
      <div className="right">
        <button className="todo--delete">
          <span class="material-icons todo--delete--icon">
            delete_outline
          </span>
        </button>
      </div>
    </div>
  );
}