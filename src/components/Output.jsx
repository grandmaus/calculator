import React from 'react'
import PropTypes from 'prop-types'

const Output = props => {
  return (
    <span>{props.result}</span>
  )
}

Output.propTypes = {
  result: PropTypes.string
}

Output.defaultProps = {
  result: '0'
}

export default Output
