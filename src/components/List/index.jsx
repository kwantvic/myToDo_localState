import React from "react";

export default function List({ items }) {
  let active = () => {
    alert("test");
  };

  return (
    <div onClick={active}>
      {items.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
}
