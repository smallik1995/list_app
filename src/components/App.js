import React, {useState} from 'react';
// import state from './state';
import {InputNewTask, Button} from './addItemBox';
import {ListDisplays} from './displayList'

const App = () =>  {
  const [lists, setLists] = useState([]);
  return (
    <>
      <ListDisplays lists={lists} />
      <InputNewTask />
      <Button
        lists={lists}
        setLists={setLists}
      />
    </>
  );
}

export default App;