import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './../../redux/actions.js';

export default function Input() {
  // DISPATCH
  let dispatch = useDispatch();

  // SELECTOR
  let tab = useSelector(state => state.tab);

  // STATES
  let [task, setTask] = useState('');

  // HANDLERS
  function handleInputChange(event) {
    let { value } = event.target;

    setTask(value);
  }

  function handleAddTodo() {
    if (task.length > 0)
      dispatch(addTodo(task))
    else
      alert('Please, write a task.');
    
    setTask('');
  }

  // RETURN
  return ( tab !== 3 && (<div className="input">
      <input placeholder="add details" className="input--field" value={task} onChange={handleInputChange}/>
      <button className="input--button" onClick={() => handleAddTodo()}>Add</button>
    </div>
  ));
}