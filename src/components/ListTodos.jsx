import { useState } from 'react';

export default function ListTodos({todos, handleDeleteTodo, handleToggleTodo, handleEditTodo}) {
  
  return (
    <ol>
      {todos.map(todo => (
        <ListItem todo={todo} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} onEdit={handleEditTodo}/>
      ))}
    </ol>
  )
}


function ListItem({todo, onDelete, onToggle, onEdit}) {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return (
      <li>
        <input
          type='checkbox'
          checked={todo.finished}
          value={todo.finished}
          onChange={() => onToggle(todo.id)}
        />
        <label>
          <input 
            type='input'
            value={todo.task}
            onChange={(e) => onEdit({
              ...todo,
              task: e.target.value,
            })}
          />
        </label>
        <button onClick={() => setIsEdit(!isEdit)}>
          Save
        </button>
        <button onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </li>
    )
  }
  else {
    return (
      <li>
        <label>
          <input
            type='checkbox'
            checked={todo.finished}
            value={todo.finished}
            onChange={() => onToggle(todo.id)}
          />
          {todo.task}
        </label>
        <button onClick={() => setIsEdit(!isEdit)}>
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </li>
    )
  }
}


