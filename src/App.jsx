import React from 'react'

import Calculator from './components/Calculator/index'
import Title from './components/Title/index'
import Copyright from './components/Copyright/index'

import './theme/globalStyle'

const App = props => {
  return (
    <main>
      <section>
        <Title />
        <Calculator />
        <Copyright href='https://github.com/grandmaus/calculator-react' content='Look on GitHub' />
      </section>
    </main>
  )
}

export default App
