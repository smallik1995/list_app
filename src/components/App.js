import React, {useState, useCallback} from 'react';
import List from './List';

const App = () =>  {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [prefixValue, setPrefixValue] = useState('');
  const [postfixValue, setPostfixValue] = useState('');

  const prefixChange = useCallback((event) => {setPrefixValue(event.target.value);}, []);
  const postfixChange = useCallback((event) => {setPostfixValue(event.target.value);}, []);
  const valueChange = useCallback((event) => {setInputValue(event.target.value);}, []);

  const addItem = () => {
    const listItem = `${prefixValue} ${inputValue} ${postfixValue}`;
    if (list.length < 3) {
      if (inputValue !== '') {
        setList([...list, listItem ]);
        setInputValue('');
      }
    } else {
      alert('Список заполнен');
    }
  }

  const callAddItem = useCallback(() => addItem(list, setList));

  return (
    <>
      <List list={list} />
      <input type={"text"}
             placeholder={'Введите префикс'}
             name={'prefix'}
             value={prefixValue}
             onChange={prefixChange}
      />
      <input type={"text"}
             placeholder={'Введите задачу'}
             name={'item'}
             value={inputValue}
             onChange={valueChange}
      />
      <input type={"text"}
             placeholder={'Введите постфикс'}
             name={'postfix'}
             value={postfixValue}
             onChange={postfixChange}
      />
      <button onClick={callAddItem}>Добавить задачу</button>
    </>
  );
}

export default App;