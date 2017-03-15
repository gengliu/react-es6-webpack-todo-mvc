import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

import App from './components/TodoApp'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import 'babel-polyfill';

let store = createStore(reducer);

ReactDOM.render(
  (<Provider store={store}>
    <App/>
  </Provider>),
  document.getElementsByClassName('todoapp')[0]);
