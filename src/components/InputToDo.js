import React, { useState } from "react";
import ToDoList from "./ToDoList";

const InputToDo = () => {
  let [element, setElement] = useState("");
  let [todoArray, setToDoArray] = useState([]);
  return (
    <div className="inputToDo">
      <input
        type="text"
        value={element}
        onChange={(e) => setElement(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          setElement(element);
          setToDoArray([...todoArray, element]);
          setElement("");
          console.log(todoArray);
        }}
      >
        Add ToDo
      </button>
      {todoArray.map((elm, i) => (
        <ToDoList key={i} todo={elm} />
      ))}
    </div>
  );
};

export default InputToDo;
