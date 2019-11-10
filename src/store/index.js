import { createStore, applyMiddleware, compose } from 'redux'
import reducers from "./reducers"
import createSagaMiddleware from 'redux-saga'
import todoSaga from './sagas'

const sageMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sageMiddleware))
)

sageMiddleware.run(todoSaga)

export default store
