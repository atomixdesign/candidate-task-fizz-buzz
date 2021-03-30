import React,{ Component } from 'react'
import {
  Button,
  Form,
  Input,
  Header,
  List,
  Container
} from 'semantic-ui-react'

class FizzBuzz extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { start: '', end: '', result: [], isError: false, errors: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Form submit
  handleSubmit(event: any) {
    event.preventDefault()
    fetch('/api/fizzBuzz', {
        method: 'POST',
        //convert the state to JSON and send as the POST request
       body: JSON.stringify(this.state)
     }).then(response => response.json())
     .then(data =>
      this.setState({
        result: data.message,
        isError: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isError: true }));
  }

  // store all the values of the input field in react state single method handle
  // input changes of all the input field using ES6
  handleChange(event: any) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  // Returns controlled form values of the input field not stored in DOM values are exist in react component itself as state
  render() {
    const { isError, result, error } = this.state;
    return(
      <Container>
      <Form onSubmit={this.handleSubmit}>
      <Header as='h1' textAlign='center'>FizzBuzz Calculation</Header>
        <Form.Group widths='equal'>
         <Form.Field
           control={Input}
           name ='start'
           placeholder='Start'
           label='Start'
           value = {this.state.start}
           onChange={this.handleChange}
         />
         <Form.Field
           control={Input}
           label='End'
           name ='end'
           placeholder='End'
           value = {this.state.end}
           onChange={this.handleChange}
         />
       <Form.Field primary control={Button}  label='&nbsp;' >Calculate</Form.Field>
       </Form.Group>
       <hr/>
       <List>
           {!isError ? Object.keys(result).map((item: any) => { return <List.Item key={item}> {item}. {result[item]}</List.Item>}) : <></> }
       </List>
       </Form>
       </Container>
    )
  }
}

export default FizzBuzz;

<form className="ui form placeholder segment">
<header className="ui header centered">FizzBuzz Calculation</header>
<div className="inline fields">
<div className="field">
<label>Start</label>
<div className="ui input">
<input type="text" placeholder="Start"/>
</div>
</div>
<div className="field">
<label>End</label>
<div className="ui input">
<input type="text" placeholder="End"/>
</div>
</div>
<div className="field">
<label>&nbsp;</label>
<button className="ui primary button">Calculate</button>
</div>
</div>
<div role="list" className="ui list">
  <div role="listitem" className="item">
  </div>
</div>
</form>
