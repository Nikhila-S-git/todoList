import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {editedTitle: this.props.todoItem.title}

  onDelete = () => {
    const {deleteItem, todoItem} = this.props
    deleteItem(todoItem.id)
  }

  onToggle = () => {
    const {toggleBtn, todoItem} = this.props
    toggleBtn(todoItem.id)
  }

  onChangeChecked = () => {
    const {toggleCheck, todoItem} = this.props
    toggleCheck(todoItem.id)
  }

  onEditTodo = event => {
    const {editTodo} = this.props
    this.setState({editedTitle: event.target.value})
    editTodo(event.target.value)
  }

  onSaveTodo = () => {
    const {updateTodo, todoItem} = this.props
    const {editedTitle} = this.state
    updateTodo(todoItem.id, editedTitle)
    this.onToggle()
  }

  render() {
    const {todoItem, btnValue, todoTitle} = this.props
    const {title, isChecked} = todoItem
    return (
      <li className="todo-item">
        <label className="checkboxTitleContainer">
          <input type="checkbox" onChange={this.onChangeChecked} />
          {btnValue === 'Save' ? (
            <input
              type="text"
              value={todoTitle}
              className="inputItem"
              onChange={this.onEditTodo}
            />
          ) : (
            <p className={isChecked ? 'titleChecked' : ''}>{title}</p>
          )}
        </label>
        <div>
          <button
            className="button"
            onClick={btnValue === 'Save' ? this.onSaveTodo : this.onToggle}
            type="button"
          >
            {btnValue}
          </button>
          <button className="button" onClick={this.onDelete} type="button">
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
