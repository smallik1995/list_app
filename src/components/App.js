import React, {useState, useCallback, useMemo} from 'react';
import List from './List';

const App = () =>  {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [prefixValue, setPrefixValue] = useState('');
  const [postfixValue, setPostfixValue] = useState('');

  const prefixChange = useCallback((event) => {setPrefixValue(event.target.value);}, []);
  const postfixChange = useCallback((event) => {setPostfixValue(event.target.value);}, []);
  const valueChange = useCallback((event) => {setInputValue(event.target.value);}, []);

  const addItem = useCallback(() => {
    if (list.length < 3) {
      if (inputValue !== '') {
        setList([...list, inputValue ]);
        setInputValue('');
      }
    } else {
      alert('Список заполнен');
    }
    },[inputValue, list]
  );
  const addPrefixs = useMemo(() => {
    return (list.map((item) => (prefixValue + item + postfixValue)))
  }, [list,postfixValue, prefixValue])

  return (
    <>
      <List list={addPrefixs} />
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
      <button onClick={addItem}>Добавить задачу</button>
    </>
  );
}

export default App;