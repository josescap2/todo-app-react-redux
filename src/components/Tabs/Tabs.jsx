import { useSelector, useDispatch } from 'react-redux';
import { setTab } from './../../redux/actions.js';

export default function Tabs() {
  // DISPATCH
  let dispatch = useDispatch();

  // SELECTORS
  let tab = useSelector(state => state.tab);

  // HANDLERS
  function handleTab(number) {
    dispatch(setTab(number));
  }

  // RETURN
  return (
    <div className="tabs">
      <button className={`tabs--button ${tab === 1 ? "active" : ""}`} onClick={() => handleTab(1)}>All</button>
      <button className={`tabs--button ${tab === 2 ? "active" : ""}`} onClick={() => handleTab(2)}>Active</button>
      <button className={`tabs--button ${tab === 3 ? "active" : ""}`} onClick={() => handleTab(3)}>Completed</button>
    </div>
  );
}