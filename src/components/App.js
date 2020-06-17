import React, {useState} from 'react';
import {ButtonAddItem} from './addItemBox';
import {InputAddItem} from './inputAddItem';
import {List} from './list'

const App = () =>  {
  const [list, setList] = useState([]);

  return (
    <>
      <List list={list} />
      <InputAddItem />
      <ButtonAddItem list={list} setList={setList} />
    </>
  );
}

export default App;