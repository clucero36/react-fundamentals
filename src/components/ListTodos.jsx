import { useState } from 'react';

export default function ListTodos({ todos, onToggle, onClickDelete, handleEditTodo }) {

  return (
    <ol>
    {todos.map(todo => 
      <li key={todo.id}>
        <Todo 
          todo={todo}
          onToggle={onToggle} 
          onClickDelete={onClickDelete} 
          onEditTodo={handleEditTodo}
        />
      </li>
    )}
    </ol>
  )
}


function Todo({ todo, onToggle, onClickDelete, onEditTodo }) {

  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return (
      <>
        <label>
          <input 
            type='checkbox'
            checked={todo.finished}
            value={todo}
            onChange={() => onToggle(todo.id)}
          />
          <input 
            type='text'
            value={todo.task} 
            onChange={e => {
              onEditTodo({
                ...todo,
                task: e.target.value,
              })
            }}
          />
        </label>
        <button onClick={() => setIsEdit(!isEdit)}>
          Save
        </button>
        <button onClick={() => onClickDelete(todo.id)}>
          Delete
        </button>
      </>
    )
  }
  else {
    return (
      <>
        <label>
          <input 
            type='checkbox'
            checked={todo.finished}
            value={todo}
            onChange={() => onToggle(todo.id)}
          />
          {todo.task}
        </label>
        <button onClick={() => setIsEdit(!isEdit)}>
          Edit
        </button>
        <button onClick={() => onClickDelete(todo.id)}>
          Delete
        </button>
      </>
    )
  }
}