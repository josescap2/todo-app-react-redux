import Tabs from './../Tabs/Tabs';
import Input from './../Input/Input';
import Todos from './../Todos/Todos';
import DeleteAll from './../DeleteAll/DeleteAll';

import './../../css/styles.css';

export default function Layout() {
  return (
    <div className="layout">
      <h1 className="title">#todo</h1>
      <Tabs />
      <Input />
      <Todos />
      <DeleteAll />
    </div>
  );
}