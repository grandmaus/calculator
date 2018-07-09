import React from 'react'
import PropTypes from 'prop-types'

const ButtonOperand = props => {
  return (
    <button type='button' value='props.value'>{props.content}</button>
  )
}

ButtonOperand.propTypes = {
  value: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired
}

export default ButtonOperand
