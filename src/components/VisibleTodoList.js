import { connect } from 'react-redux'

import TodoList from "./TodoList"
import { VisibilityFilters, toggleTodo } from '../actions';

const filterTodos = (todos, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.visibilityFilter)
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDipatchToProps)(TodoList)

export default VisibleTodoList