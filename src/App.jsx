import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <div>
        <h1>Todo-App</h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  )
}

export default App
