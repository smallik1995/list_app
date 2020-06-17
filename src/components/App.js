import React, {useState} from 'react';
import List from './List';

const App = () =>  {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [prefixValue, setPrefixValue] = useState('');
  const [postfixValue, setPostfixValue] = useState('');

  const addItem = () => {
    if (list.length < 3) {
      if (inputValue !== '') {
        setList([...list, inputValue]);
        setInputValue('');
      }
    } else {
      alert('Список заполнен');
    }
  }

  return (
    <>
      <List list={list} prefix={prefixValue} postfix={postfixValue} />
      <input type={"text"}
             placeholder={'Введите префикс'}
             name={'prefix'}
             value={prefixValue}
             onChange={(event) => setPrefixValue(event.target.value)}
      />
      <input type={"text"}
             placeholder={'Введите задачу'}
             name={'item'}
             value={inputValue}
             onChange={(event) => setInputValue(event.target.value)}
      />
      <input type={"text"}
             placeholder={'Введите постфикс'}
             name={'postfix'}
             value={postfixValue}
             onChange={(event) => setPostfixValue(event.target.value)}
      />
      <button onClick={() => addItem(list, setList)}>Добавить задачу</button>
    </>
  );
}

export default App;