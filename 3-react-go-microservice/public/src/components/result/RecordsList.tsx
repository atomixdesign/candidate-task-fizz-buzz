import React from 'react';
import { Record } from './Record';

const RecordsList = ({ records }: { records: any}) => {
    return (
        <div data-testid='record-list' className='record-list-container'>
            <ul>
                {records.length > 0 && records.map((record: any) => {
                    return <Record key={record.input} {...record}/>
                })}
            </ul>
        </div>
    )
}

export default RecordsList;

