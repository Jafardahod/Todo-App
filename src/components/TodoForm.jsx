import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {
  let {addTodo} = useTodo()

  let [single_todo, setSingletodo] = useState('')

  let handleSubmit = (e) => {
    e.preventDefault()
    if(single_todo.length < 1){
      alert('Please Add Something')
    }else{

      let todo = {
        todo: single_todo,
        completed: false  
      }
      addTodo(todo)
      setSingletodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={single_todo}
        onChange={(e) => setSingletodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-cyan-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
