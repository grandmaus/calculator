import React from 'react'
import PropTypes from 'prop-types'

import { TitleStyled } from './styled.js'

const Title = props => {
  return (
    <TitleStyled>
      {props.content}
    </TitleStyled>
  )
}

Title.propTypes = {
  content: PropTypes.string
}

Title.defaultProps = {
  content: 'Calculator based ReactJS'
}

export default Title
