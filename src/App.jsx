import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddToDo'
import ListTodos from './components/ListTodos'

let currentId = 3;
const INITIAL_TODOS = [
  {id: 0, task: 'Take out the trash.', finished: true},
  {id: 1, task: 'Walk the dog.', finished: false},
]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  let checked = todos.filter(td => td.finished === true);

  function handleAddTodo(newTodo) {
    setTodos(todos.concat([{
      id: currentId++,
      task: newTodo,
      finished: false,
    }]))
  }

  function handleToggleTodo(todoId) {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          finished: !todo.finished,
        }
      }
      else
        return todo;
    }))
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(td => td.id !== todoId));
  }

  function handleEditTodo(nextTodo) { 
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      }
      else
        return todo;
    }))
  }

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ListTodos todos={todos} onToggle={handleToggleTodo} onClickDelete={handleDeleteTodo} handleEditTodo={handleEditTodo} />
      <p>You currently have {checked.length} tasks of {todos.length} completed!</p>
    </div>
  )
}

export default App
