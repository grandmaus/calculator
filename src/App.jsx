import React from 'react'

import ButtonOperand from './components/ButtonOperand'
import ButtonOperator from './components/ButtonOperator'

const App = props => {
  return (
    <main>
      <section>
        <h1>{props.title}</h1>
        <div>
          <span>Результат</span>
          <div>
            <ButtonOperator value='backSpace' content='&#8592;' />
            <ButtonOperator value='ce' content='CE' />
            <ButtonOperator value='c' content='C' />
            <ButtonOperator value='sqrt' content='&#8730;' />
            <ButtonOperator value='/' content='/' />
            <ButtonOperator value='*' content='*' />
            <ButtonOperator value='+' content='+' />
            <ButtonOperator value='-' content='-' />
            <ButtonOperator value='.' content='.' />
            <ButtonOperator value='result' content='=' />
            <ButtonOperand value={7} content={7} />
            <ButtonOperand value={8} content={8} />
            <ButtonOperand value={9} content={9} />
            <ButtonOperand value={4} content={4} />
            <ButtonOperand value={5} content={5} />
            <ButtonOperand value={6} content={6} />
            <ButtonOperand value={1} content={1} />
            <ButtonOperand value={2} content={2} />
            <ButtonOperand value={3} content={3} />
            <ButtonOperand value={0} content={0} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
