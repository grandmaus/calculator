import React from 'react'

import ButtonOperand from './ButtonOperand'
import ButtonOperator from './ButtonOperator'
import Output from './Output'

const mathOpToSymb = {
  PLUS: '+',
  MINUS: '-',
  DIVIDE: '/',
  MULTIPLY: '*',
  SQRT: 'sqrt'
}

const MathOperations = {
  [mathOpToSymb.PLUS]: (a, b) => a + b,
  [mathOpToSymb.MINUS]: (a, b) => a - b,
  [mathOpToSymb.DIVIDE]: (a, b) => a / b,
  [mathOpToSymb.MULTIPLY]: (a, b) => a * b,
  [mathOpToSymb.SQRT]: (a) => Math.sqrt(a)
}

const pattern = /^-?(\d+)?\.?(\d+)?$/
const patternOperator = /[- + * /]/
const patternOperand = /[- .]|\d/

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      leftOperand: '',
      rightOperand: '',
      result: '',
      operator: ''
    }

    this.operandClickHandler = this.operandClickHandler.bind(this)
    this.operatorClickHandler = this.operatorClickHandler.bind(this)
    this.sqrtClickHandler = this.sqrtClickHandler.bind(this)
    this.cleanClickHandler = this.cleanClickHandler.bind(this)
    this.equalsClickHandler = this.equalsClickHandler.bind(this)
    this.keyPressOperandHandler = this.keyPressOperandHandler.bind(this)
    this.keyPressOperatorHandler = this.keyPressOperatorHandler.bind(this)
    this.keyPressEnterHandler = this.keyPressEnterHandler.bind(this)
    this.keyPressEscHandler = this.keyPressEscHandler.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keypress', this.keyPressOperatorHandler)
    document.addEventListener('keypress', this.keyPressOperandHandler)
    document.addEventListener('keypress', this.keyPressEnterHandler)
    document.addEventListener('keydown', this.keyPressEscHandler)
  }

  keyPressOperandHandler (e) {
    const val = String.fromCharCode(e.keyCode)
    const validatedVal = patternOperand.test(val)
    const validatedLeftOperand = pattern.test(this.state.leftOperand + val)
    const validatedRightOperand = pattern.test(this.state.rightOperand + val)

    if (val === '.' && !this.state.leftOperand) {
      this.setState(prevState => ({
        leftOperand: '0' + val,
        result: ''
      }))
    } else if (val === '.' && this.state.operator && !this.state.rightOperand) {
      this.setState(prevState => ({
        rightOperand: '0' + val
      }))
    } else if (this.state.operator && validatedVal && validatedRightOperand && val !== '-') {
      this.setState(prevState => ({
        rightOperand: prevState.rightOperand + val
      }))
    } else if (validatedVal && validatedLeftOperand && !this.state.rightOperand) {
      this.setState(prevState => ({
        leftOperand: prevState.leftOperand + val,
        result: ''
      }))
    }
  }

  keyPressOperatorHandler (e) {
    const val = String.fromCharCode(e.keyCode)
    const validatedVal = patternOperator.test(val)

    if (this.state.leftOperand && validatedVal) {
      this.setState({
        operator: val
      })
    } else if (this.state.result && validatedVal) {
      this.setState({
        leftOperand: this.state.result,
        operator: val,
        result: ''
      })
    }
  }

  keyPressEnterHandler (e) {
    const enterKeyCode = 13

    if (e.keyCode === enterKeyCode) {
      this.equalsClickHandler()
    }
  }

  keyPressEscHandler (e) {
    const escKeyCode = 27

    if (e.keyCode === escKeyCode) {
      this.cleanClickHandler()
    }
  }

  operandClickHandler (e) {
    const val = e.target.value
    const validatedLeftOperand = pattern.test(this.state.leftOperand + val)
    const validatedRightOperand = pattern.test(this.state.rightOperand + val)

    if (val === '.' && !this.state.leftOperand) {
      this.setState(prevState => ({
        leftOperand: '0' + val,
        result: ''
      }))
    } else if (val === '.' && this.state.operator && !this.state.rightOperand) {
      this.setState(prevState => ({
        rightOperand: '0' + val
      }))
    } else if (this.state.operator && validatedRightOperand) {
      this.setState(prevState => ({
        rightOperand: prevState.rightOperand + val
      }))
    } else if (validatedLeftOperand && !this.state.rightOperand) {
      this.setState(prevState => ({
        leftOperand: prevState.leftOperand + val,
        result: ''
      }))
    }
  }

  operatorClickHandler (e) {
    const val = e.target.value

    if (this.state.leftOperand) {
      this.setState({
        operator: val
      })
    } else if (this.state.result) {
      this.setState({
        leftOperand: this.state.result,
        operator: val,
        result: ''
      })
    } else if (val === '-') {
      this.setState({
        leftOperand: val + this.state.leftOperand,
        result: ''
      })
    }
  }

  sqrtClickHandler (e) {
    const val = e.target.value
    const leftOperand = this.state.leftOperand
    const rightOperand = this.state.rightOperand
    const result = this.state.result
    const sqrt = MathOperations[val](result || leftOperand)

    if (!rightOperand) {
      this.setState({
        leftOperand: '',
        rightOperand: '',
        operator: '',
        result: sqrt
      })
    }
  }

  cleanClickHandler (e) {
    this.setState({
      leftOperand: '',
      rightOperand: '',
      operator: '',
      result: ''
    })
  }

  equalsClickHandler (e) {
    if (this.state.rightOperand) {
      const result = MathOperations[this.state.operator](+this.state.leftOperand, +this.state.rightOperand)

      this.setState({
        leftOperand: '',
        rightOperand: '',
        operator: '',
        result: result
      })
    }
  }

  render () {
    const {leftOperand, operator, rightOperand} = this.state
    const output = leftOperand ? leftOperand + ' ' + operator + ' ' + rightOperand : '0'
    const result = this.state.result

    return (
      <div>
        <Output result={result || output} />
        <div>
          <ButtonOperator value='c' content='C' clickHandlerEvent={this.cleanClickHandler} />
          <ButtonOperator value='sqrt' content='&#8730;' clickHandlerEvent={this.sqrtClickHandler} />
          <ButtonOperator value='.' content='.' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperator value='/' content='/' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='*' content='*' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='+' content='+' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='-' content='-' clickHandlerEvent={this.operatorClickHandler} />
          <ButtonOperator value='=' content='=' clickHandlerEvent={this.equalsClickHandler} />
          <ButtonOperand value='7' content='7' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='8' content='8' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='9' content='9' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='4' content='4' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='5' content='5' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='6' content='6' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='1' content='1' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='2' content='2' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='3' content='3' clickHandlerEvent={this.operandClickHandler} />
          <ButtonOperand value='0' content='0' clickHandlerEvent={this.operandClickHandler} />
        </div>
      </div>
    )
  }
}

export default Calculator
