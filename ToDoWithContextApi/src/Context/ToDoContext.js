import { createContext, useContext } from "react";

export const ToDOContext = createContext({
    todos: [
        {
            id: 1,
            todo: "ToDo Message",
            Completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    removeTodo: (id) => { },
    toggleCompleteTodo: (id) => { }
})

export const ToDoProvider = ToDOContext.Provider

export const useToDo = () => {
    useContext(ToDOContext)
}