import { connect } from 'react-redux'

import Link from "./Link";
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: (ownProps.filter === state.visibilityFilter)
  }
}
const mapDipatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

const FilterLink = connect(
  mapStateToProps, 
  mapDipatchToProps
)(Link)

export default FilterLink