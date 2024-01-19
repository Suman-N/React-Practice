import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            msg: "Hello World"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo', // naming property which will display at devtools also
    initialState, // gives you the initial state of the store
    reducers: {

        //states will gives you initial state value
        // actions will gives you id's text's to update the store

        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                msg: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload.msg : todo.msg)
        }
    }
})


// we always update the store by these individual reducers only thats'y we need to export it individualy from actions we will get all
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

//the whole reducer also we need to export for store awareness
export default todoSlice.reducer