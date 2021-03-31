import React, { useState } from "react";

import DB from "../src/assets/db.json";
import List from "./components/List";
import Tasks from "./components/Tasks";

export default function App() {
  const [lists, setLists] = useState(DB.lists);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={lists} />
      </div>
      <div className="todo__tasks">
        <Tasks list={lists[0]} />
      </div>
    </div>
  );
}
