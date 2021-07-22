import React, { useState } from "react";
import styled from "styled-components";
import SingleFB from "./SingleFB";

const Container = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.6rem;
  input {
    height: 2rem;
    font-size: large;
  }
  button {
    background-color: #288cfb;
    color: #fff;
    padding: 0.2rem 1.8rem;
    border-radius: 10px;
    font-weight: bold;
    border: 1.8px solid gray;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

const FizzBuzz = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState(null);

  const getData = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    try {
      const res = await fetch("/fizzbuzz", requestOptions);
      const list = await res.json();
      setData(list);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };
  const onsumit = (e) => {
    e.preventDefault();

    if (isNaN(start) | isNaN(end)) {
      return alert("number only");
    }
    const res = getData({ start, end });
    setStart("");
    setEnd("");
  };

  return (
    <div>
      <Container onSubmit={onsumit}>
        <Field>
          <label>Start</label>
          <input
            type="text"
            name="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </Field>
        <Field>
          <label htmlFor="">End</label>
          <input
            type="text"
            name="end"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </Field>
        <button type="submit">Calculate</button>
      </Container>
      <hr />
      {data && data.map((item) => <SingleFB item={item} key={item.input} />)}
    </div>
  );
};

export default FizzBuzz;
