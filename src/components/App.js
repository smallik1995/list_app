import React from 'react';
import state from './state';
import {InputNewTask, Button} from './addItemBox';
import {ListDisplays} from './displayList'

const App = () =>  {
  const { lists, addItem } = state([]);
  return (
    <>
      <ListDisplays lists={lists} />
      <InputNewTask />
      <Button
        lists={lists}
        saveItem={listValue => {
          const trimmedText = listValue.trim();

          if (trimmedText.length > 0) {
            addItem(trimmedText);
          }
        }}
      />
    </>
  );
}

export default App;