import React from 'react';
import './App.css';

const ListItem = (props) => {
  return (
    <li>{props.value}</li>
  )
}

const ListDisplays = (props) => {
  const lists = props.lists;

  console.log(lists.map((item) =>item));

  const listItems = lists.map((item) => {
      <ListItem key={item} value={item} />
    });

  return (
    <ul>
      {listItems}
    </ul>
  )
}

const InputNewTask = () => {
  return (
    <input type={"text"} placeholder={'Введите задачу'} />
  )
}
const Button = () => {
  return (
    <button >Добавить задачу</button>
  )
}
const lists = ['item1', 'item2', 'item3'];

const App = (props) =>  {
  return (
    <>
      <ListDisplays lists={lists}/>
      <InputNewTask/>
      <Button />
    </>
  );
}

export default App;
