import React from "react";
import styled from "styled-components";

const Container = styled.li`
  font-size: large;
  font-weight: 400;
  list-style: none;
`;
const SingleFB = ({ item }) => {
  const { input, output } = item;
  return (
    <Container>
      {`${input}.`} {output}
    </Container>
  );
};

export default SingleFB;
