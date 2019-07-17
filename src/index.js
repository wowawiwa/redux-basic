import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

import todoApp from './reducers'
import { toggleTodo, addTodo, setVisibilityFilter, VisibilityFilters } from './actions';

const store = createStore(todoApp)

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addTodo('Learn redux'))
store.dispatch(addTodo('Learn redux advanced'))
store.dispatch(toggleTodo(0))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
