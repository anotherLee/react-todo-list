import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {createChangeInputAction, createSubmitAction, createDeleteItemAction} from './store2/actionCreator'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {value, itemList, changeInputValue, submit, deleteItem} = this.props
    return (
      <Fragment>
        <input value={value} onChange={e => changeInputValue(e.target.value)} type="text"/>
        <button onClick={e => submit()}>提交</button>
        <ul>
          {
            itemList.map((item,index) => {
              return <li key={index} onClick={ e => deleteItem(index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.inputValue,
    itemList: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(inputValue) {
      const action = createChangeInputAction(inputValue)
      dispatch(action)
    },
    submit() {
      const action = createSubmitAction()
      dispatch(action)
    },
    deleteItem(index) {
      const action = createDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
