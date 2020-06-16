import { useState } from 'react';

export default initialValue => {
  const [lists, setLists] = useState(initialValue);

  return {
    lists,
    addItem: listValue => {
      setLists([...lists, listValue]);
    }
  };
};