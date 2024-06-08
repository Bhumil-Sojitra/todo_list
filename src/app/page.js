"use client";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title !== "" && desc !== "") {
      setTodos([...todos, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="my-6 flex flex-col gap-6 min-h-[905px] overflow-auto">
      <div className="">
        <form onSubmit={handleAddTodo} className="flex flex-col items-center">
          <input
            placeholder="Enter Title here!"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-bgd rounded-md mb-2 px-2 py-1"
          />
          <input
            placeholder="Enter Description here!"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="bg-bgd rounded-md mb-2 px-2 py-1 "
          />
          <button className="px-2 py-2 rounded-md bg-btnbg">Add ToDo</button>
        </form>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-bgd overflow-auto p-4 rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
            <p className="text-gray-600">{todo.desc}</p>
            <button
              onClick={() => handleRemoveTodo(index)}
              className="text-red-500 sticky left-0 top-20"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
