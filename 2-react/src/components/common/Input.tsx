import React from 'react';

type InputProps = {
    id: string;
    name: string;
    label: string;
    type: string;
    value: any;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input = ({id, name, label, type, value, onChange}: InputProps) => {
    return (
        <div>
            <label>{label}</label>
            <input id={id} name={name} type={type} value={value} onChange={onChange}/>
        </div>
    )
}