import React, { Component } from "react"
import { Button, Operator } from "./Components/Button"
import { Input } from "./Components/Input"
import { ClearBtn, BackBtn } from './Components/Control'
import * as math from 'mathjs'

import "./app.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 0
    };
  }

  addToInput = val => {
    this.setState(prevState => (
      { input: prevState.input?prevState.input + val:val }
    ))
  }

  handleEqual = () => {
    this.setState(prevState => (
      { input: math.evaluate(prevState.input) }
    ))
  }

  del = () => {
    this.setState({input: ""})
  }

  removeLastElement = () => {
    this.setState(prevState => (
      { input: (String(prevState.input)).slice(0, -1)||0 }
    ))
  }

  render()
  {
    console.log(typeof(this.state.input))
    return (
      <div className="app">
        <div className="wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Operator handleClick={this.addToInput}>/</Operator>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Operator handleClick={this.addToInput}>*</Operator>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Operator handleClick={this.addToInput}>+</Operator>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Operator handleClick={this.addToInput}>.</Operator>
            <Operator handleClick={this.addToInput}>-</Operator>
            <Operator handleClick={this.handleEqual}>=</Operator>
          </div>
          <div className="control">
            <ClearBtn clearInput={this.del}> Clear </ClearBtn>
            <BackBtn removeLastElement={this.removeLastElement}>Back</BackBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
