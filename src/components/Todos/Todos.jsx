import Todo from './../Todo/Todo';

let todos = [
  {
    todo: "Do Something",
    checked: false
  },
  {
    todo: "Learn about DOM",
    checked: false
  },
  {
    todo: "Do homework",
    checked: true
  }
]

export default function Todos() {
  return (
    <div className="todos">
      {
        todos.map((e, i) => (
          <Todo key={i} todo={e}/>
        ))
      }
    </div>
  );
}