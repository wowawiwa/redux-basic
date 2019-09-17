import React from 'react';

import { NavLink } from 'react-router-dom'
import { VisibilityFilters } from '../redux/actions'

const FilterLink = ({filter, children}) => {
  return(
    <NavLink
      exact
      to={filter === VisibilityFilters.SHOW_ALL ? '/' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {children}
    </NavLink>
  )
}

export default FilterLink
