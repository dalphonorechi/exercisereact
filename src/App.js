import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { Route, Routes } from "react-router";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import bg from "./assets/honeycomb.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #ff7518;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 500px;
  background-color: #ff7518;
  border: white solid 1px;
`;

const Create = styled.button`
  margin: 10px;
  background-color: #ff7518;
  border: none;
  color: whitesmoke;
  padding: 15px;
  cursor: pointer;
`;
function App() {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="createuser" exact element={<CreateUser />} />
          <Route path="/allusers" element={<Users />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

export default App;
