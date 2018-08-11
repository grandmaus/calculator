import React from 'react'
// import PropTypes from 'prop-types'

import ButtonOperand from './ButtonOperand'
import ButtonOperator from './ButtonOperator'
import Output from './Output'

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      leftOperand: '',
      rightOperand: '',
      operator: '',
      result: null,
      prevResult: null
    }

    this.pattern = new RegExp('([+*/-])')

    this.mathOpToSymb = {
      PLUS: '+',
      MINUS: '-',
      DIVIDE: '/',
      MULTIPLY: '*'
    }

    this.MathOperations = {
      [this.mathOpToSymb.PLUS]: (a, b) => a + b,
      [this.mathOpToSymb.MINUS]: (a, b) => a - b,
      [this.mathOpToSymb.DIVIDE]: (a, b) => a / b,
      [this.mathOpToSymb.MULTIPLY]: (a, b) => a * b
    }

    this.operandClickHandler = this.operandClickHandler.bind(this)
    this.operatorClickHandler = this.operatorClickHandler.bind(this)
    this.equalsClickHandler = this.equalsClickHandler.bind(this)
  }

  operandClickHandler (e) {
    const val = e.target.value

    if (this.state.operator) {
      this.setState(prevState => ({
        rightOperand: prevState.rightOperand + val,
        result: prevState.leftOperand + this.state.operator + prevState.rightOperand + val
      }))
    } else {
      this.setState(prevState => ({
        leftOperand: prevState.leftOperand + val,
        result: prevState.leftOperand + val
      }))
    }
  }

  operatorClickHandler (e) {
    const val = e.target.value

    if (this.state.leftOperand) {
      this.setState({
        operator: val,
        rightOperand: '',
        result: this.state.leftOperand + val
      })
    }
  }

  equalsClickHandler (e) {
    let result = this.state.result
    let array = result.split(this.pattern)
    result = this.MathOperations[array[1]](+array[0], +array[2])

    if (this.state.rightOperand) {
      this.setState({
        leftOperand: '',
        rightOperand: '',
        operator: '',
        result: result,
        prevResult: result
      })
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
          <ButtonOperator value='=' content='=' clickHandlerEvent={this.equalsClickHandler} />
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

export default Calculator
