import React from 'react'
// import PropTypes from 'prop-types'

import ButtonOperand from './ButtonOperand'
import ButtonOperator from './ButtonOperator'
import Output from './Output'

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      leftOperand: null,
      rightOperand: null,
      operator: null,
      result: null
    }

    this.operandClickHandler = this.operandClickHandler.bind(this)
    this.operatorClickHandler = this.operatorClickHandler.bind(this)
    console.log(this.state.result)
  }

  operandClickHandler (e) {
    let leftOperand = this.state.leftOperand
    let rightOperand = this.state.rightOperand

    this.setState({
      leftOperand: leftOperand + e.target.value
    })
    console.log(leftOperand)
  }

  operatorClickHandler (e) {
    let operator = this.state.operator

    if (this.state.leftOperand !== null) {
      this.setState({
        operator: e.target.value
      })
      console.log(operator)
    }
  }

  render () {
    return (
      <div>
        <Output result={this.state.result} />
        <div>
          {/* <ButtonOperator value='backSpace' content='&#8592;' /> */}
          {/* <ButtonOperator value='ce' content='CE' /> */}
          {/* <ButtonOperator value='c' content='C' /> */}
          {/* <ButtonOperator value='sqrt' content='&#8730;' /> */}
          {/* <ButtonOperator value='.' content='.' /> */}
          <ButtonOperator value='/' content='/' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='*' content='*' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='+' content='+' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='-' content='-' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='=' content='=' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperand value={7} content={7} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={8} content={8} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={9} content={9} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={4} content={4} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={5} content={5} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={6} content={6} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={1} content={1} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={2} content={2} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={3} content={3} clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value={0} content={0} clickHandlerEvent={this.operandClickHandler} />
        </div>
      </div>
    )
  }
}

// Calculator.propTypes = {
//   clickHandler: PropTypes.func.isRequired
// }

export default Calculator
