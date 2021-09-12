import React, { Component } from 'react';
import Form from "./components/display/Form";
import Results from "./components/display/Results";
import { displayRoot } from './Display.styled';
import { get } from './components/model/Progress'

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

  submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (this.formValidate()) {
        const response = await get(
            `http://127.0.0.1:8000/fizzbuzz?x=${Number(this.state.xValue)}&y=${Number(this.state.yValue)}`
        );
        const results = await response.json();
        this.setState({results});
      }
    } catch (exception: any) {
      this.setState({results: null, submitValueError: "Please try again."});
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
