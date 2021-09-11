import React, { useState } from 'react';
import './App.css';
import Form from './components/search/Form';
import RecordsList from './components/result/RecordsList';
import { fizzBuzz } from './fizzBuzz';

function App() {

    const [records, setRecords] = useState<any[]>([]);
    const [hasError, setError] = useState(false);

    const handleSubmit = ({start, end}: {start: string, end: string}) => {
        try {
            const data: any[] = fizzBuzz(parseInt(start), parseInt(end));
            setRecords(data);
        } catch (exception: any) {
            setRecords([])
            setError(true);
        }

    }

    return (
        <div className="App">
          <Form handleSubmit={handleSubmit}/>
            {!hasError ? <RecordsList records={records}/> : <h2>Something went wrong.</h2>}
        </div>
    );
}

export default App;
