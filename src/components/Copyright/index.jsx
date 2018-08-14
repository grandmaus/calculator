import React from 'react'
import PropTypes from 'prop-types'

import { CopyrightStyled } from './styled.js'

const Copyright = props => {
  return (
    <CopyrightStyled href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.content}
    </CopyrightStyled>
  )
}

Copyright.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Copyright
