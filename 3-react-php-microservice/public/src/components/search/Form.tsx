import React from 'react';
import { useForm } from '../common/useForm';
import { Input } from '../common/Input';

type FormProps = {
    handleSubmit({start, end}: {start: string, end: string}): void;
};

const Form = ({ handleSubmit }: FormProps) => {

    const { values, onInputChange, onSubmit } = useForm({start: '', end: ''}, handleSubmit);

    return (
        <form onSubmit={onSubmit} data-testid='form'>
            <Input id='start' name='start' label='Start' type='number' value={values.start} onChange={onInputChange}/>
            <Input id='end' name='end' label='End' type='number' value={values.end} onChange={onInputChange}/>
            <button type='submit'>Calculate</button>
        </form>
    )
}

export default Form;