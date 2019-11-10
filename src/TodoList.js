import React, {Component} from 'react'
import 'antd/dist/antd.css'
import store from "./store"
import {
  getInputAction,
  getAddTodoAction,
  getDeleteItemAction,
  getTodoAction
} from './store/actionCreators'
import TodoListUI from "./TodoListUI"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClickItem = this.handleClickItem.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleChange(e) {
    const action = getInputAction(e.target.value)
    store.dispatch(action)
  }

  handleClick() {
    const action = getAddTodoAction()
    store.dispatch(action)
  }

  handleClickItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleClickItem={this.handleClickItem}
      />
    )
  }

  componentDidMount() {
    const action = getTodoAction()
    store.dispatch(action)
  }
}

export default TodoList
