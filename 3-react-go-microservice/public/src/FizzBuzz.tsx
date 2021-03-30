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
      startError: false,
      endError: false,
      numberError: false,
      formError: false,
      errors: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submit
  handleSubmit(event: any) {
    event.preventDefault();
    let error = false;

    //validation
    if (this.state.start === "") {
      this.setState({ startError: true });
      error = true;
    } else {
      this.setState({ startError: false });
    }

    if (this.state.end === "") {
      this.setState({ endError: true });
      error = true;
    } else {
      this.setState({ endError: false });
    }

    if (!this.state.endError && this.state.start > this.state.end) {
      this.setState({ numberError: true });
      error = true;
    } else {
      this.setState({ numberError: false });
    }

    if (error) {
      this.setState({ formError: true });
      return;
    }
    this.setState({ formError: false });

    fetch("/api/fizzBuzz", {
      method: "POST",
      //convert the state to JSON and send as the POST request
      body: JSON.stringify(this.state),
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

  // store all the values of the input field in react state single method handle
  // input changes of all the input field using ES6
  handleChange(event: any) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Returns controlled form values of the input field not stored in DOM values are exist in react component itself as state
  render() {
    const { isError, result } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} error={this.state.formError}>
          {this.state.formError ? (
            <Message
              error
              header="FizzBuzz calculation Failed"
              content="Please check the errors in the form"
            />
          ) : null}
          <Header as="h1" textAlign="center">
            FizzBuzz Calculation
          </Header>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              name="start"
              placeholder="Start"
              label="Start"
              value={this.state.start}
              onChange={this.handleChange}
              error={this.state.startError}
            />
            <Form.Field
              control={Input}
              label="End"
              name="end"
              placeholder="End"
              value={this.state.end}
              onChange={this.handleChange}
              error={this.state.endError || this.state.numberError}
            />
            {this.state.numberError ? (
              <Message
                error
                content="End value should be greater than Start value"
                pointer="below"
              />
            ) : null}

            <Form.Field primary control={Button} label="&nbsp;">
              Calculate
            </Form.Field>
          </Form.Group>
          <hr />
          <List>
            {!isError ? (
              Object.keys(result).map((item: any) => {
                return (
                  <List.Item key={item}>
                    {" "}
                    {item}. {result[item]}
                  </List.Item>
                );
              })
            ) : (
              <></>
            )}
          </List>
        </Form>
      </Container>
    );
  }
}

export default FizzBuzz;
