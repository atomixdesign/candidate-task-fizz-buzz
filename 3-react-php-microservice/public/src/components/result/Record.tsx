import React from 'react';

export const Record = ({ input, output }: { input: number, output: string}) => {
    return (
        <div className='record'> {`${input}. ${output === '' ? '-' : output}`}</div>
    )
}