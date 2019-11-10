import {INPUT, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST, GET_TODO} from './actionTypes'

export const getInputAction = (value) => ({
  type: INPUT,
  value
})

export const getAddTodoAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (value) => ({
  type: DELETE_ITEM,
  value
})

export const initListAction = (value) => ({
  type: INIT_LIST,
  value
})

export const getTodoAction = () => ({
  type: GET_TODO
})
