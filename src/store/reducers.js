import { INPUT, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === INPUT) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }
  return state
}
