import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

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
  height: 100%;
  width: 100%;
  background-color: #ff7518;
`;
const Header = styled.div`
  display: flex;
  background-color: #ff7518;
  padding: 5px;
`;
const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff7518;
  padding: 5px;
`;

const AddButton = styled.button`
  background-color: white;
  color: #ff7518;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 2px;
`;

const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  color: white;
  margin-bottom: 5px;
`;
const Count = styled.p`
  color: white;
`;

const ExerciseContainer = styled.div`
  color: white;
  padding: 2px;
`;

const Table = styled.table`
  width: 100%;
`;
const TRow = styled.tr``;
const TData = styled.td``;

const AddExercise = styled.div`
  height: 300px;
  width: 300px;
  background-color: white;
`;

const User = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [refresh, setRefresh] = useState(0);

  const location = useLocation().state;
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    console.log(user._id);
    axios
      .post(`http://localhost:3001/api/users/${user._id}/exercises`, {
        duration: duration,
        date: date,
        description: description,
      })
      .then((response) => {
        console.log(response);
        setRefresh((prev) => (prev = +1));
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const getUsers = () => {
    setLoading(true);
    axios
      .get(
        `http://localhost:3001/api/users/${location.id}/logs?from=2005-05-01&to=2220-05-01&limit=30`
      )
      .then((response) => {
      
        setUser(response.data);
        setLoading(false);
      })
      .catch((e) => {
        
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, [refresh]);
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderLeft>
            <Name>User: {user.username}</Name>
            <Count>Number of Exercises : {user.count}</Count>
          </HeaderLeft>
          <HeaderRight>
            <AddButton onClick={() => handleOpen()}>ADD EXERCISE</AddButton>
          </HeaderRight>
        </Header>
        <ExerciseContainer>
          <Table>
            <thead>
              <TRow>
                <TData>Date</TData>
                <TData>Duration</TData>
                <TData>Description</TData>
              </TRow>
            </thead>
            <tbody>
              {user.log &&
                user.log.map((item) => {
                  return (
                    <TRow key={nanoid()}>
                      <TData>{item.date}</TData>
                      <TData>{item.duration}</TData>
                      <TData>{item.description}</TData>
                    </TRow>
                  );
                })}
            </tbody>
          </Table>
        </ExerciseContainer>
      </Wrapper>
      <Dialog open={open} onClose={handleClose}>
        <AddExercise>
          <DialogTitle id="alert-dialog-title">{"Add Exercise"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                id="standard-error"
                label="Duration"
                variant="standard"
                onChange={handleDuration}
              />
              <TextField
                id="standard-error-helper-text"
                label="Date"
                variant="standard"
                onChange={handleDate}
              />
              <TextField
                id="standard-error-helper-text"
                label="Description"
                variant="standard"
                onChange={handleDescription}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAdd}>Add</Button>
          </DialogActions>
        </AddExercise>
      </Dialog>
    </Container>
  );
};

export default User;
