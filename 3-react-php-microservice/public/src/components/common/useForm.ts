import React from 'react';
import { useState } from 'react';

export const useForm = (initialState: any, handleSubmit: any) => {
    const [values, setValues] = useState(initialState);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(handleSubmit) {
            await handleSubmit(values);
        }
    }

    return { values, onInputChange, onSubmit}
}