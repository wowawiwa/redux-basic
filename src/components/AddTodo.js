import React from 'react';
import { connect } from 'react-redux'

import { addTodo } from '../actions';

// This is a mixed Presentational / Container component: Because it's so small, it's not worth separating.

let AddTodo = ({dispatch}) => {
  let input

  return(
    <form
      onSubmit={e => {
        e.preventDefault()
        let txt = input.value.trim()
        if (!txt) {
          return
        }

        dispatch(addTodo(txt))
        input.value = ''
      }}
    >
      <input ref={node => {input = node}}/>
      <button type="submit">Add Todo</button>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo