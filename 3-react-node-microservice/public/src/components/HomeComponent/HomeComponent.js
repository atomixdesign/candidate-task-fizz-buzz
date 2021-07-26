import React, {Component} from 'react';
import axios from 'axios';
import './HomeComponent.css';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: null,
            end: null,
            result:[],
            errors: null
        };
    }
    getData = (start,end) =>{
        axios.get('http://localhost:8000/api/inputs?start='+start+'&end='+end+'').then(response => {
            this.setState({result:response.data.result})
        }).catch(error => {
           console.log(error)
        });
    }

    onChangeValue = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        this.handleValidation(val,nam);
    }

    onSubmitValue = (event) =>{
        event.preventDefault();
        let start = this.state.start;
        let end = this.state.end;

        // this.handleValidation(end,'end');
        if(start && end){
            this.getData(start,end)
        }
    }

    handleValidation = (value,field) => {
        let errors =  null;
        let formIsValid = true;

        if(!value){
            formIsValid = false;
            errors = "Fields cannot be empty";
        } else if(typeof value !== "undefined"){
            if(!value.match(/^[0-9]+$/)){
                formIsValid = false;
                errors = "Please use numbers";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    renderFormContent(){
        return(
            <div>
                <form onSubmit={this.onSubmitValue}>
                <div className="control">
                    <label>Start</label>
                    <label>{this.setState.error}</label>
                    <input type="text" name="start" onChange={this.onChangeValue} placeholder="Start Number"/>
                </div>
                <div className="control">
                    <label>End</label>
                    <input type="text" name="end" onChange={this.onChangeValue} placeholder="End Number"/>
                </div>
                <button>Submit</button>
                </form>
                <span style={{color: "red"}}>{this.state.errors}</span>
            </div>
        );
    }
    renderResult = () =>{
        const {result} = this.state;
        const resultList = []
        if(result.length !== 0) {
            result.map(item=>{
                resultList.push(
                    <div className="item" key={item.number}>
                        <div>{item.number}</div>
                        <div>{item.value}</div>
                    </div>
                );
            })
        }

        return(
            <div>
                {resultList}
            </div>
        )
    }

    render(){
        return(
            <div className="main-container">
                <div className="form"> {this.renderFormContent()} </div>
                <div className="result"> {this.renderResult()} </div>
            </div>
        )
    }
}

export default HomeComponent;
