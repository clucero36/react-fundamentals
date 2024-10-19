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

  let completed = todos.filter(td => td.finished !== false)

  function handleAddTodo(task) {
    setTodos([
      ...todos,
      {
        id: currentId++,
        task: task,
        finished: false,
      }
    ]);
  };

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(td => td.id !== todoId));
  };

  function handleToggleTodo(todoId) {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          finished: !todo.finished,
        }
      }
      else {
        return todo;
      }
    }));
  };

  function handleEditTodo(nextTodo) {
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) 
        return nextTodo;
      else 
        return todo;
    }));
  };
  
  return (
    <div>
      <AddTodo onClick={handleAddTodo} />
      <ListTodos todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} handleEditTodo={handleEditTodo} />
      <p>{completed.length} todos of {todos.length} completed!</p>
    </div>
  )
}



export default App
