import React from 'react'
import PropTypes from 'prop-types'

import { ButtonOperatorStyled } from './styled.js'

const ButtonOperator = props => {
  return (
    <ButtonOperatorStyled large={props.large} type='button' value={props.value} onClick={props.clickHandlerEvent}>
      {props.content}
    </ButtonOperatorStyled>
  )
}

ButtonOperator.propTypes = {
  value: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  large: PropTypes.bool,
  clickHandlerEvent: PropTypes.func.isRequired
}

export default ButtonOperator
