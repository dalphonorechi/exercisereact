import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUser, selectCreateUser } from "../feature/PageIndicatorSlice";

const Container = styled.div`
  display: flex;
  height: 20vh;
  width: 100%;
  flex-direction: column;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Logo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: white;
  font-size: 24px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Item = styled(Link)`
  padding: 5px;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
  border-radius: 2px;
  color: ${(props) => (props.onSelected === "white" ? "#ff7518" : "white")};
  background-color: ${(props) => props.onSelected};
`;

const Navbar = () => {
  const count = useSelector((state) => state.indicator.value);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>EXERCIFY</Logo>
        </Left>
        <Right>
          <Item
            onClick={() => dispatch(selectCreateUser())}
            onSelected={count === 1 ? "white" : "#ff7518"}
            to={"/createuser"}
          >
            Create User
          </Item>
          <Item
            onClick={() => dispatch(selectAllUser())}
            onSelected={count === 2 ? "white" : "#ff7518"}
            to={"/allusers"}
          >
            All Users
          </Item>
        </Right>
      </Wrapper>
      <Divider
        sx={{
          backgroundColor: "white",
          margin: "5px",
        }}
      />
    </Container>
  );
};

export default Navbar;
