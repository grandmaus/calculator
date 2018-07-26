import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
  return (
    <h1>{props.content}</h1>
  )
}

Title.propTypes = {
  content: PropTypes.string
}

Title.defaultProps = {
  content: 'Калькулятор'
}

export default Title
