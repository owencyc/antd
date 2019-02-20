import { connect } from 'react-redux'
import TodoList from '../components/todo/TodoList'
import {toggleEvent} from '../actions'

const mapStateToProps = state => ({
    list: state.todo_list
  })
  
  const mapDispatchToProps = dispatch => ({
    toggleEvent: id => dispatch(toggleEvent(id))
  })

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)