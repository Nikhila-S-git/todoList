import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const newTodosList = initialTodosList.map(each => ({
  ...each,
  isChecked: false,
}))

class SimpleTodos extends Component {
  state = {
    todoList: newTodosList,
    title: '',
    editId: 0,
  }

  deleteItem = id => {
    const {todoList} = this.state
    const filteredList = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredList})
  }

  onClickAdd = () => {
    const {todoList, title} = this.state
    const inputTodo = title.split(' ')
    if (inputTodo.length > 1) {
      const n = parseInt(inputTodo[1])
      for (let i = 0; i < n; i++) {
        const newId = newTodosList[newTodosList.length - 1].id + 1
        const newTodo = {id: newId, title}
        todoList.push(newTodo)
      }
    } else {
      const newId = newTodosList[newTodosList.length - 1].id + 1
      const newTodo = {id: newId, title}
      todoList.push(newTodo)
    }
    this.setState({todoList, title: ''})
  }

  toggleBtn = id => {
    this.setState(prevState => ({editId: prevState.editId === id ? null : id}))
  }

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  toggleCheck = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each =>
        each.id === id ? {...each, isChecked: !each.isChecked} : each,
      ),
    }))
  }

  render() {
    const {todoList, title, editId} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="inputContainer">
            <input
              type="text"
              className="inputElement"
              onChange={this.onChangeInput}
              value={title}
            />
            <button type="button" className="addBtn" onClick={this.onClickAdd}>
              Add
            </button>
          </div>
          <ul>
            {todoList.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
                toggleBtn={this.toggleBtn}
                btnValue={editId === eachItem.id ? 'Save' : 'Edit'}
                toggleCheck={this.toggleCheck}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
