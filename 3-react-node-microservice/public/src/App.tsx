import React, { useState } from 'react';
import './App.css';
import Form from './components/search/Form';
import RecordsList from './components/result/RecordsList';
import { get } from './helpers/api-helper'


function App() {

  const [records, setRecords] = useState<any[]>([])

  const handleSubmit = async ({start, end}: {start: string, end: string}) => {
      try {
          const { data } = await get(`http://localhost:8000/fizz-buzz?start=${start}&end=${end}`);
          setRecords(data)
      } catch (exception: any) {
          setRecords([])
          console.error(exception.response.data.errors);
      }
  }

  return (
      <div className="App">
        <Form handleSubmit={handleSubmit}/>
        <RecordsList records={records}/>
      </div>
  );
}

export default App;
