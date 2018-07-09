import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import App from './App'

App.propTypes = {
  title: PropTypes.string
}

App.defaultProps = {
  title: 'Калькулятор'
}

ReactDOM.render(<App />, document.getElementById('root'))
