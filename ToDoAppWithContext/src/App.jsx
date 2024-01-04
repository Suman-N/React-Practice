import { useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './Component/TodoForm'
import { TodoItem } from './Component'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  // while adding a new ToDo we must need a previous status of an array and we must have to add both previous and current new todo..........

  const addTodo = (todo) => {
    setTodos((prev) => ([...prev, { id: Date.now(), ...todo }]))
  }

  // while updating a Todo's array we have to match the selected(id of todo which we want to update) id with previous id 

  const updateTodo = (id, todo) => {
    setTodos((prev) => (prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))))
  }

  // while delete a Todo we will use filter method which will gives a new filtered array(Array list except a deleted array) 

  const removeTodo = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => (prevTodo.id !== id))))
  }

  // here we are toggling a Todo in which we will compare the previos todo's id and then change only one properties value except everything will be as it is for that we will use spread operator

  const toggleComplete = (id) => {
    setTodos((prev) =>
    (prev.map((prevTodo) =>
      prevTodo.id === id ?
        { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, removeTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
