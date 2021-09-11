import React, { useState } from 'react';
import './App.css';
import Form from './components/search/Form';
import RecordsList from './components/result/RecordsList';
import { get } from './helpers/api-helper'


function App() {

  const [records, setRecords] = useState<any[]>([]);
  const [hasError, setError] = useState(false);

  const handleSubmit = async ({start, end}: {start: string, end: string}) => {
    try {
      const { data } = await get(`http://127.0.0.1?start=${start}&end=${end}`);
      setRecords(data);
      setError(false);
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
