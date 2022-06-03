import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
`;
const Home = () => {
  return (
    <Container>
      <Title>EXERCISE TRACKER</Title>
    </Container>
  );
};

export default Home;
