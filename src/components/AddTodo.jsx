import { useState } from 'react';

export default function AddTodo({ onClick }) {
  const [task, setTask] = useState('');

  return (
    <>
      <label>
        <input
          type='task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button onClick={() => {
        onClick(task)
        setTask('')
      }}>
        Add Todo
      </button>
    </>
  )
}