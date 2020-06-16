import React from 'react';

export const InputNewTask = () => {
  return (
    <input type={"text"} placeholder={'Введите задачу'} name={'item'}/>
  )
}

export const Button = ({lists, saveItem}) => {
  const addItem = () => {
    const input = document.querySelector('input[name=item]');
    let inputValue = input.value;

    if (lists.length < 3) {
      if (inputValue !== '') {
        saveItem(inputValue);
        input.value = '';
      }
    } else {
      alert('Список заполнен');
    }
  }

  return (
    <button onClick={addItem}>Добавить задачу</button>
  )
}