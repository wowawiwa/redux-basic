import React from 'react';

import VisibleTodoList from "./VisibleTodoList"
import AddTodo from './AddTodo';
import Footer from './Footer';
import { VisibilityFilters } from '../redux/actions';

const App = ({ match: { params } }) => {

  return (
    <div>
      <AddTodo/>
      <VisibleTodoList filter={params.filter || VisibilityFilters.SHOW_ALL}/>
      <Footer/>
    </div>
  )
}

export default App;
