

export default function ListTodos({todos, handleToggleTodo, handleDeleteTodo}) {

  return (
    <ol>
      {todos.map(todo => 
        <li>
          <label>
            <input 
              type='checkbox'
              checked={todo.finished}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.task}
          </label>
          <button onClick={() => handleDeleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      )}
    </ol>
  )
}