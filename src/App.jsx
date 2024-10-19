import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [task, setTask] = useState('');

  let checked = todos.filter(td => td.finished === true);

  function handleAddTodo() {
    setTodos(todos.concat([{
      id: currentId++,
      task: task,
      finished: false,
    }]))
  }

  function handleChange(e) {
    setTask(e.target.value);
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

  return (
    <div>
      <AddTodo task={task} handleChange={handleChange} handleAddTodo={handleAddTodo} />
      <ListTodos todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} />
      <p>You currently have {checked.length} tasks of {todos.length} completed!</p>
    </div>
  )
}

export default App
