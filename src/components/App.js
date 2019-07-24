import React from 'react';

import VisibleTodoList from "./VisibleTodoList"
import AddTodo from './AddTodo';
import Footer from './Footer';

function App() {

  return (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  )
}

export default App;
