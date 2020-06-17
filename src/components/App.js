import React, {useState} from 'react';
import {List} from './list';

const App = () =>  {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (list.length < 3) {
      if (inputValue !== '') {
        setList([...list, inputValue]);
      }
    } else {
      alert('Список заполнен');
    }
  }

  return (
    <>
      <List list={list} />
      <input type={"text"}
             placeholder={'Введите задачу'}
             name={'item'}
             value={inputValue}
             onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => addItem(list, setList)}>Добавить задачу</button>
    </>
  );
}

export default App;