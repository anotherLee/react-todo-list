import {put, takeEvery} from 'redux-saga/effects'
import {GET_TODO} from './actionTypes'
import {getTodoList} from '../api'
import {initListAction} from './actionCreators'

function* fetchTodos() {
  try {
    const list = (yield getTodoList()).data.data.map(item => item.name)
    const action = initListAction(list)
    yield put(action)
  } catch(e) {
    console.log(e)
  }
}

function* todoSaga() {
  yield takeEvery(GET_TODO, fetchTodos)
}

export default todoSaga
