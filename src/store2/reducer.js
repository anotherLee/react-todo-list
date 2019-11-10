import { CHNAGE_INPUT, SUBMIT, DELETE_ITEM } from './actionTypes'
const defaultState = {
  inputValue: 'hello',
  list: ['a', 'b']
}

export default (state = defaultState, action) => {
  if (action.type === CHNAGE_INPUT) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === SUBMIT) {
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
  return state
}
