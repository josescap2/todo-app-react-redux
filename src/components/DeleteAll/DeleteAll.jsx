import { useSelector } from 'react-redux';

export default function DeleteAll() {
  // SELECTOR
  let tab = useSelector(state => state.tab);

  // RETURN
  return ( tab === 3 && (
    <div className="dall">
      <button className="dall--button">
        <span class="material-icons">
          delete_outline
        </span>
        DeleteAll
      </button>
    </div>
  ));
}