import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #ff7518;
`;

const Create = styled.button`
  margin: 10px;
  background-color: #ff7518;
  border: none;
  color: whitesmoke;
  padding: 15px;
  cursor: pointer;
`;
function CreateUser() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function createUser() {
    setLoading(true);
    axios
      .post("http://localhost:3001/api/users", {
        username: user,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        navigate("/allusers");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }
  function handleChange(e) {
    setUser(e.target.value);
    console.log(e.target.value);
  }
  return (
    <Container>
      {/* <form action="http://localhost:3001/api/users"> */}
      <Wrapper>
        <TextField
          id="filled-basic"
          label="Username"
          name="username"
          variant="filled"
          onChange={handleChange}
        />
        <Create type="submit" onClick={() => createUser()}>
          Create User
        </Create>
        {loading && <CircularProgress />}
        {/* </form> */}
      </Wrapper>
    </Container>
  );
}

export default CreateUser;
