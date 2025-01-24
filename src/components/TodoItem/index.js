import './index.css'

const TodoItem = props => {
  const {todoItem, deleteItem, toggleBtn, btnValue, toggleCheck} = props
  const {title, id, isChecked} = todoItem
  const onDelete = () => {
    deleteItem(id)
  }

  const onToggle = () => {
    toggleBtn(id)
  }

  const onChangeChecked = () => {
    toggleCheck(id)
  }

  return (
    <li className="todo-item">
      <label className="checkboxTitleContainer">
        <input type="checkbox" onChange={onChangeChecked} />
        {btnValue === 'Save' ? (
          <input type="text" value={title} className="inputItem" />
        ) : (
          <p className={isChecked ? 'titleChecked' : ''}>{title}</p>
        )}
      </label>
      <div>
        <button className="button" onClick={onToggle} type="button">
          {btnValue}
        </button>
        <button className="button" onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
