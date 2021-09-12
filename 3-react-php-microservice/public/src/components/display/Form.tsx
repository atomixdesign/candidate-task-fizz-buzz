import React, { Component } from 'react';
import { errorInput, displayInputBlock, displayButtonBlock, formStyle, divForm, buttonForm } from './Form.styled';

type FormProps = {
    startInputError?: string;
    endInputError?: string;
    formInputError?: string;
    submitHandler?: React.FormEventHandler<any>;
    startChangeHandler?: React.FormEventHandler<any>;
    endChangeHandler?: React.FormEventHandler<any>;
};
class Form extends Component<FormProps, {}> {
    render() {
        return (
            <form style={formStyle} onSubmit={this.props.submitHandler}>
                <div style={divForm} className="Form">
                    <div style={displayInputBlock} className="start">
                        <p>Start</p>
                        <input
                            onChange={this.props.startChangeHandler}
                            className="start-input"
                            type="text"
                        />
                        <p style={errorInput} className={'error'}>{this.props.startInputError}</p>
                    </div>
                    <div style={displayInputBlock} className="end">
                        <p>End</p>
                        <input
                            onChange={this.props.endChangeHandler}
                            className="end-input"
                            type="text"
                        />
                        <p style={errorInput}className={'error'}>{this.props.endInputError}</p>
                    </div>
                    <div style={displayButtonBlock}>
                        <input style={buttonForm} type="submit" value="Calculate" />
                        <p style={errorInput} className={'error'}>{this.props.formInputError}</p>
                    </div>
                </div>
            </form>
        );
    }
}
export default Form;
