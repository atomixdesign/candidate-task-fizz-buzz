import React, { useState } from 'react';
import { Grommet, Box, Text, Button, TextInput, List, Spinner } from 'grommet'
import { grommet } from 'grommet/themes';
import './App.css';
import { formValidate, fetchAPI } from './util'

export interface Check {
  input: number;
  output: string | '-';
}


export interface NumberCheck {
  startNumber: number;
  endNumber: number
}

function App() {

  const [state, setState] = useState<NumberCheck>({
    startNumber: 0,
    endNumber: 0
  })

  const [data, setData] = useState<Check[]>([]);
  const [isLoading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let validate = formValidate(state.startNumber, state.endNumber);

    try {
      if (validate) {
        setLoading(true)
        const response_data = await fetchAPI(state.startNumber, state.endNumber);
        setLoading(false);
        setData(response_data);
      }
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Grommet theme={grommet}>
      <Box align="center" direction="column">

        <Box direction="row">

          {renderInputField('Start', 'startNumber', state.startNumber, handleChange)}
          {renderInputField('End', 'endNumber', state.endNumber, handleChange)}


          <Box>
            <Button type="button" size="small"
              primary
              margin={{ left: "20px", top: "50px" }}
              onClick={handleSubmit}
              label="Calculate"
            />
          </Box>

        </Box>

        {isLoading ? <Spinner size="xlarge" message="fetching data..." /> : renderList(data)}



      </Box>
    </Grommet>
  );
}

export default App;
function renderList(data: Check[]) {
  return <Box>
    <List
      border=
      {{
        color: { dark: "accent-1", light: "accent-3" },
        side: "horizontal",
        size: "small"
      }}
      background="light-1"
      step={15}
      paginate={true}
      primaryKey={item => (<Text>{item.input === 1 ? item.input : item.input}</Text>)}
      secondaryKey={
        item => (<Text>{item.output ? item.output : '-'}</Text>)}
      data={data} />
  </Box>;
}

function renderInputField(title: string, name: string, value: number, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void) {
  return <Box direction="column" pad="medium">
    <Text>{title}:</Text>
    <TextInput
      required={true}
      name={name}
      placeholder="Enter start number"
      value={value}
      onChange={handleChange} />
  </Box>;
}

