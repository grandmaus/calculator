import React from 'react'

import Calculator from './components/Calculator'
import Title from './components/Title'

const App = props => {
  return (
    <main>
      <section>
        <Title />
        <Calculator />
      </section>
    </main>
  )
}

export default App
