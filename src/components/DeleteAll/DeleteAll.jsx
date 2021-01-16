import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCompleted } from './../../redux/actions.js';

export default function DeleteAll() {
  // DISPATCH
  let dispatch = useDispatch();

  // SELECTOR
  let tab = useSelector(state => state.tab);

  // HANDLERS
  function handleDeleteCompleted() {
    dispatch(deleteAllCompleted());
  }

  // RETURN
  return ( tab === 3 && (
    <div className="dall">
      <button className="dall--button" onClick={() => handleDeleteCompleted()}>
        <span class="material-icons">
          delete_outline
        </span>
        DeleteAll
      </button>
    </div>
  ));
}