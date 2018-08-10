import React from 'react'
import PropTypes from 'prop-types'

import { ButtonOperandStyled } from './styled.js'

const ButtonOperand = props => {
  return (
    <ButtonOperandStyled type='button' value={props.value} onClick={props.clickHandlerEvent}>
      {props.content}
    </ButtonOperandStyled>
  )
}

ButtonOperand.propTypes = {
  value: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  clickHandlerEvent: PropTypes.func.isRequired
}

export default ButtonOperand
