import React from "react";
import styled from "styled-components";
import BucketList from "./BucketList";
import "./style.css";

const Home = (props) => {
  const [list, setList] = React.useState([
    "JS 파트 2 정리하기",
    "3주차까지 듣기",
    "자전 전화하기",
  ]);
  const new_todo = React.useRef(null);

  const addBucket = () => {
    const new_item = new_todo.current.value;
    setList([...list, new_item]);
    new_todo.current.value = "";
  };

  return (
    <Wrapper>
      <Container>
        <BucketList list={list} />
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
