import { useState } from 'react';

export default function AddTodo({ handleAddTodo }) {
  const [task, setTask] = useState('')

  return (
    <div>
      <input 
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => {
        handleAddTodo(task)
        setTask('');
      }}>
        Add Todo
      </button>
    </div>
  )
}