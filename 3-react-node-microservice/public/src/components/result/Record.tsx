import React from 'react';

export const Record = ({ input, output }: { input: number, output: string}) => {
    return (
        <div> {`${input}. ${output === '' ? '-' : output}`}</div>
    )
}