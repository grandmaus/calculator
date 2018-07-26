import React from 'react'
import PropTypes from 'prop-types'

const ButtonOperator = props => {
  return (
    <button type='button' value={props.value} onClick={props.clickHandlerEvent}>{props.content}</button>
  )
}

ButtonOperator.propTypes = {
  value: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  clickHandlerEvent: PropTypes.func.isRequired
}

export default ButtonOperator
