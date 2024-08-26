import React, { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  let [todos, setTodos] = useState([]);
  let [count, setcount] = useState(0);
  let addTodo = (todo) => {
    setTodos((e) => {
      let id = Date.now();
      e.unshift({id: id, ...todo})
      return [...e]; 
    });
  console.log('From add todos', todos)
  };
  let updateTodo = (id, todo) => {
    setTodos((prevtodo) => {
      return prevtodo.map((individual_todo_obj) => {
        if (individual_todo_obj.id === id) {
          return todo;
        } else {
          return individual_todo_obj;
        }
      });
    });
  };
  let deleteTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((notwanted_todo) => {
        if (notwanted_todo.id === id) {
          return false;
        } else {
          return true;
        }
      });
    });
  };
  let toggleComplete = (id) => {
    setTodos((prevtodo) => {
      return prevtodo.map((individual_todo_obj) => {
        if (individual_todo_obj.id === id) {
          return {
            ...individual_todo_obj,
            completed: !individual_todo_obj.completed,
          };
        } else {
          return individual_todo_obj;
        }
      });
    });
  };
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("todos"));
    if (data && data.length > 0) {
      setTodos(data);
    }
    
  }, [])

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className=" bg-cyan-500 min-h-screen py-8">
        <div className="w-full bg-[#172842] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            To Do App 
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((singletodo) => (
              <div key={singletodo.id} className="w-full">
                <TodoItem id={singletodo.id} todo={singletodo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
