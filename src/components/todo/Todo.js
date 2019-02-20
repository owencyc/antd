import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ completed, text ,onClick}) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </div>
)

Todo.propTypes={
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}


export default Todo