import {CHNAGE_INPUT, SUBMIT, DELETE_ITEM} from './actionTypes'

export const createChangeInputAction = (value) => ({
  type: CHNAGE_INPUT,
  value
})

export const createSubmitAction = () => ({
  type: SUBMIT
})

export const createDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  value: index
})
