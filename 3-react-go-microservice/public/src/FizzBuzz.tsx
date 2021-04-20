import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Header,
  List,
  Container,
  Message,
} from "semantic-ui-react";

class FizzBuzz extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      start: "",
      end: "",
      result: [],
      isError: false,
      errors: {},
      fields: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  // Form submit
  handleSubmit(event: any) {
    event.preventDefault();

    if (!this.handleValidation(event)) {
      console.error('Invalid Form')
      return false;
    } else {
        fetch("/api/fizzBuzz", {
          method: "POST",
          //convert the state to JSON and send as the POST request
          body: JSON.stringify({ start: parseInt(this.state.start),
                                 end:   parseInt(this.state.end)}),
        })
        .then((response) => response.json())
        .then((data) =>
            this.setState({
              result: data.message,
              isError: false,
            })
        )
        // Catch any errors we hit and update the app
        .catch((error) => this.setState({ error, isError: true }));
      }
  }

  handleValidation(event: any) {
    let errors: any = {};
    let formIsValid = true;

    if (!this.state.start) {
      formIsValid = false;
      errors["start"] = "Please enter the start value"
    }

    if (!this.state.end) {
      formIsValid = false;
      errors["end"] = "Please enter the end value"
    }

    if (this.state.start >= this.state.end) {
      formIsValid = false;
      errors["end"] = "End value should be greater than start value"
    }

    this.setState({errors: errors});

    return formIsValid;
  }

  // store all the values of the input field in react state single method handle
  // input changes of all the input field using ES6
  handleChange(event: any) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Returns controlled form values of the input field not stored in DOM values are exist in react component itself as state
  render() {
    const {errors} = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h1" textAlign="center">
            FizzBuzz Calculation
          </Header>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              name="start"
              type='number'
              placeholder="Start"
              label="Start"
              value={this.state.start}
              onChange={this.handleChange}
              error={errors.start}
            />
            <Form.Field
              control={Input}
              label="End"
              type='number'
              name="end"
              placeholder="End"
              value={this.state.end}
              onChange={this.handleChange}
              error={errors.end}
            />
            <Form.Field primary control={Button} label="&nbsp;">
              Calculate
            </Form.Field>
          </Form.Group>
          <hr />
          {!this.state.isError ? (
            <List>
                {this.state.result.map(function(item: any, id: any) {
                    return (<List.Item key={item.input}>{item.input}. {item.output}</List.Item>)
                 })
                }
            </List> ) : (<></>)}
        </Form>
      </Container>
    );
  }
}

export default FizzBuzz;
