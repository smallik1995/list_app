export const addItem = (list, setList) => {
  const input = document.querySelector('input[name=item]');
  let inputValue = input.value;

  if (list.length < 3) {
    if (inputValue !== '') {
      setList([...list, inputValue]);
      input.value = '';
    }
  } else {
    alert('Список заполнен');
  }
}