import React,{ Component } from 'react'

class Form extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { start: '', end: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Form submit
  handleSubmit(event: any) {
    event.preventDefault()
    console.log(this.state);
    console.log(JSON.stringify(this.state));
    fetch('/api/fizzBuzz', {
        method: 'POST',
        //convert the state to JSON and send as the POST request
       body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
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
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='start'>Start</label>
          <input
            name='start'
            placeholder='Start'
            value = {this.state.start}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='end'>End</label>
          <input
            name='end'
            placeholder='End'
            value={this.state.end}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    )
  }
}

export default Form
