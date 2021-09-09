import React from "react";
import $ from "jquery";
import jQuery from "jquery";
import "./Form.css";
class FizzBuzzClass extends React.Component {
  state = { 
    rangeStart:0,
    rangeEnd:0,
    listitems: []
  };
  myChangeHandler = (event:any) => {
    this.setState({...this.state,
      [event.target.name]: event.target.value
    });
  }

  updateList = (event:any) => {
    $.post("http://127.0.0.1:8000/calculate",{rangeStart:this.state.rangeStart,rangeEnd:this.state.rangeEnd}, (data) =>{
        if(jQuery.isEmptyObject({})) {
          this.setState({...this.state,
            listitems:data
          });
          
          }
      });
  }
  render() {
    return (
      <><form className="form-box">
        <label>Please enter Number Range for FizzBuzz</label>
        <label>
          Start
          <input type="number" name="rangeStart" onChange={this.myChangeHandler} />
        </label>
        <label>
          End
          <input type="number" name="rangeEnd" onChange={this.myChangeHandler} />
        </label>
        <input type="button" name="button"  onClick={this.updateList}/>
      </form>
      <React.Fragment>
        <ol className="lists">
          {this.state.listitems.map(listitem => (
            <li key={listitem} className="list">
              {listitem}
            </li>
          ))}
        </ol>
      </React.Fragment>
      </>
      
    );
  }
}
export default FizzBuzzClass;