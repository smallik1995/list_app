import React, {useState, useCallback, useEffect} from 'react';
import './App.css';

const ListItem = (props) => {
  return (
    <li>{props.value}</li>
  )
}

const ListDisplays = (props) => {
    const lists = props.lists;
    const listItems = lists.map((item) => {
      return <ListItem key={item} value={item}/>
    })
    return (
    <ul>
      {listItems}
    </ul>
  )
}

const InputNewTask = () => {
  return (
    <input type={"text"} placeholder={'Введите задачу'} name={'item'}/>
  )
}
const Button = (props) => {
  const lists = props.lists;
  const setLists = () => props.setLists;

  const addItem = useCallback(() => {
    const input = document.querySelector('input[name=item]');
    let inputValue = input.value;

    if(lists.length < 10 ) {
      if (inputValue !== '') {
        setLists(lists.push(inputValue));
        input.value = '';

        console.log(lists);
      }
    } else {
      alert('Список заполнен');
    }
  });

  return (
    <button onClick={addItem}>Добавить задачу</button>
  )
}

const App = () =>  {
  const [lists, setLists] = useState([]);
  return (
    <>
      <ListDisplays lists={lists} />
      <InputNewTask />
      <Button lists={lists} setList={setLists}/>
    </>
  );
}

export default App;
