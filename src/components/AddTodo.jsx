

export default function AddTodo({task, handleChange, handleAddTodo}) {

  return (
    <div>
      <input 
        type='text'
        value={task}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  )
}