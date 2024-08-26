import {createContext, useContext} from "react";

export let TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false, 
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})





export let TodoProvider = TodoContext.Provider
export let useTodo = () =>{
    return useContext(TodoContext)
}