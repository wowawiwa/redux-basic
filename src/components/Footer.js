import React from 'react';

import { VisibilityFilters } from "../redux/actions";
import FilterLink from './FilterLink';

const Footer = ({visbility, onVisibilityClick}) => {

  return (
    <p>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
  )
}

export default Footer