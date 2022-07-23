import React from "react";
import styled from "styled-components";
import BucketList from "./BucketList";
import "./style.css";
import { useDispatch } from "react-redux";
import { createBucket } from "./redux/modules/bucket";

const Home = (props) => {
  const new_todo = React.useRef(null);
  const dispatch = useDispatch();

  const addBucket = () => {
    const new_item = new_todo.current.value;
    dispatch(createBucket(new_item));
    new_todo.current.value = "";
  };

  return (
    <Wrapper>
      <Container>
        <BucketList />
        <div>
          <Input ref={new_todo}></Input>
          <Button onClick={addBucket}>Submit</Button>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  background-color: #fff;
  margin: auto;
  width: 50vw;
  max-width: 350px;
  height: 50vh;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 16px;
  text-align: center;
`;

const Input = styled.input`
  margin: auto;
  height: 30px;
  width: 75%;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px;
  background-color: slateblue;
  color: white;
  border: 1px solid #ddd;
`;

export default Home;
