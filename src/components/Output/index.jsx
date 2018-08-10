import React from 'react'
import PropTypes from 'prop-types'

import { OutputStyled } from './styled.js'

const Output = props => {
  return (
    <OutputStyled>
      {props.result}
    </OutputStyled>
  )
}

Output.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Output.defaultProps = {
  result: '0'
}

export default Output
