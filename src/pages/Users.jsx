import { List, ListItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";

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
  flex-direction: column;
  height: 200px;
  width: 100%;
  background-color: #ff7518;
  overflow-y: scroll;
`;
const UserItem = styled.div`
  display: flex;
  padding-left: 5px;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  width: 100%;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  color: #ff7518;
`;
const Title = styled.h1`
  font-size: 18px;
  color: white;
  font-weight: 300;
  padding-left: 12px;
  margin-bottom: 2px;
`;
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getUsers = () => {
    setLoading(true);
    axios
      .get("http://localhost:3001/api/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const h = (user) => {
    console.log(user._id);
    navigate("/user", { state: { id: user._id } });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Title>USERS</Title>
      <Wrapper>
        <List>
          {users.map((user) => {
            return (
              <ListItem onClick={() => h(user)}>
                <UserItem>{user.username}</UserItem>
              </ListItem>
            );
          })}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Users;
