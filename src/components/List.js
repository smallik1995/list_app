import React from "react";

const List = ({list}) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index.toString()}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default List;