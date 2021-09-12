import React, { Component } from 'react';
import {displayResults, displayResultsUl} from './Results.styled'
type ResultsProps = {
    list: any;
};
class Results extends Component<ResultsProps, {}> {
    render() {
        return (
            <div style={displayResults}>
                <ul style={displayResultsUl}>
                    {this.props.list.map((fizzBuzz: any) => <li>{fizzBuzz.input}. {fizzBuzz.output ? fizzBuzz.output : '-'}</li>)
                    }
                </ul>
            </div>
        );
    }
}
export default Results;
