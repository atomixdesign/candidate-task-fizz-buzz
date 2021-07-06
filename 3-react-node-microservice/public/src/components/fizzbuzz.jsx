import React, { Component } from "react";
import axios from "axios";

class Fizzbuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: 10,
      fizzbuzzArray: [],
    };
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleChangeMax = this.handleChangeMax.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeMin(event) {
    this.setState({ min: event.target.value });
  }
  handleChangeMax(event) {
    this.setState({ max: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const values = {
      min: this.state.min,
      max: this.state.max,
    };

    axios.post("/", values).then((response) => {
      this.setState({ fizzbuzzArray: response.data });
    });
  }

  fizzBuzzLoop() {
      return this.state.fizzbuzzArray.map((item) => <li>{item}</li>)
  }

  render() {
    return (
      <div class="ml-40">
        <h1 class="mt-20 text-4xl">Welcome to FizzBuzz</h1>
        <p class="mt-10 w-1/2">
          Please choose two values between 1-100. If these numbers are divisable
          by 3, the output will read fizz, if its divisable by 5 it will read
          buzz and if its divisable by both 3 and 5, it will read fizzbuzz.
        </p>
        <form onSubmit={this.handleSubmit} class="mt-5">
          <div class="flex">
            <div class="mr-5">
              <label class="block">Start: </label>
              <input
                class="border-2 rounded-sm"
                type="number"
                id="min"
                value={this.state.min}
                onChange={this.handleChangeMin}
                required
              ></input>
            </div>
            <div>
              <label class="block">End: </label>
              <input
                class="border-2 rounded-sm"
                type="number"
                id="max"
                value={this.state.max}
                onChange={this.handleChangeMax}
                required
              ></input>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <p id="output" class="mt-10 list-decimal">Output: {this.fizzBuzzLoop()} </p>
      </div>
    );
  }
}

export default Fizzbuzz;
