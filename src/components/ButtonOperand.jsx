import React from 'react'
import PropTypes from 'prop-types'

const ButtonOperand = props => {
  return (
    <button type='button' value={props.value} onClick={props.clickHandlerEvent}>
      {props.content}
    </button>
  )
}

ButtonOperand.propTypes = {
  value: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  clickHandlerEvent: PropTypes.func.isRequired
}

export default ButtonOperand
