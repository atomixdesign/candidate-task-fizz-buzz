import React, { Component } from 'react';
import Form from "./components/display/Form";
import Results from "./components/display/Results";
import {fizzBuzz} from "./fizzBuzz";
import { displayRoot } from './Display.styled';

const validNUmberRegex = RegExp(/^[0-9]*$/i);

type DisplayState = {
  results: any;
  xValue: string;
  xValueError: string;
  yValue: string;
  yValueError: string;
  submitValueError: string;
}

class Display extends Component<{}, DisplayState> {
  constructor(props:any) {
    super(props);

    this.state = {
      results: null,
      xValue: '',
      xValueError: '',
      yValue: '',
      yValueError: '',
      submitValueError: '',
    };
  }

  submitHandler = (event:any) => {
    event.preventDefault();
    if (this.formValidate()) {
      this.setState({results: fizzBuzz(Number(this.state.xValue), Number(this.state.yValue))});
    }
  }

  formValidate = () => {
    let error = false;
    if (!this.state.xValue || !validNUmberRegex.test(this.state.xValue)) {
      this.setState({xValueError: 'Invalid Number'});
      error = true;
    }
    if (!this.state.yValue || !validNUmberRegex.test(this.state.yValue)) {
      this.setState({yValueError: 'Invalid Number'});
      error = false;
    }
    if ( Number(this.state.xValue) >= Number(this.state.yValue)) {
      this.setState({submitValueError: 'Start Value should grater than End value'});
      error = true;
    } else {
      this.setState({submitValueError: ''});
    }
    return !error;
  }

  startChangeHandler = (event:any) => {
    if (validNUmberRegex.test(event.target.value)) {
      this.setState({xValue: event.target.value, xValueError: ''});
    } else {
      this.setState({xValueError: 'Invalid Number'});
    }
  }
  endChangeHandler = (event:any) => {
    if (validNUmberRegex.test(event.target.value)) {
      this.setState({yValue: event.target.value, yValueError: ''});
    } else {
      this.setState({yValueError: 'Invalid Number'});
    }
  }

  render() {
    return (<div style={displayRoot} className="display">
      <Form
          submitHandler={this.submitHandler}
          startChangeHandler={this.startChangeHandler}
          endChangeHandler={this.endChangeHandler}
          startInputError={this.state.xValueError}
          endInputError={this.state.yValueError}
          formInputError={this.state.submitValueError}
      />
      {this.state.results && <Results list={this.state.results}/>}
    </div>);
  }
}

export default Display;
