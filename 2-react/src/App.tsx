import React, { useState } from 'react';
import './App.css';
import Form from './components/search/Form';
import RecordsList from './components/result/RecordsList';
import { fizzBuzz } from './fizzBuzz';

function App() {

    const [records, setRecords] = useState<any[]>([])

    const handleSubmit = ({start, end}: {start: string, end: string}) => {
        const data: any[] = fizzBuzz(parseInt(start), parseInt(end));
        setRecords(data);
    }

    return (
        <div className="App">
          <Form handleSubmit={handleSubmit}/>
          <RecordsList records={records}/>
        </div>
    );
}

export default App;
