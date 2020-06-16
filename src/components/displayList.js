import React from "react";

export const ListDisplays = ({lists}) => {
  return (
    <ul>
      {lists.map((item, index) => (
        <li key={index.toString()}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}