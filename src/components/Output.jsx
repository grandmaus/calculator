import React from 'react'
import PropTypes from 'prop-types'

const Output = props => {
  return (
    <output>{props.result}</output>
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
