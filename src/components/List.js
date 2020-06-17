import React from "react";

const List = ({list,postfix,prefix}) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index.toString()}>
          <span>{prefix}</span> <span>{item}</span> <span>{postfix}</span>
        </li>
      ))}
    </ul>
  )
}

export default List;