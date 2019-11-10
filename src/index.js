import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from "./TodoList"
import TodoList2 from "./todoList2"
import { Provider } from 'react-redux'
import store from "./store2"

const App = () => (
  <Provider store={store}>
    <TodoList2 />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
