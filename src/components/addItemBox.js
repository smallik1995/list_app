import React from 'react';
import {addItem} from './../module/addItem';

export const ButtonAddItem = ({list, setList}) => {
  return (
    <button onClick={() => addItem(list, setList)}>Добавить задачу</button>
  )
}