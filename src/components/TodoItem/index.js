import './index.css'

const TodoItem = props => {
  const {todoItem, deleteItem} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="todo-item">
      <p>{title}</p>
      <div>
        <button className="button" onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
