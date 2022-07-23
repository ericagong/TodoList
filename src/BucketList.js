import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const BucketList = ({ list }) => {
  const history = useHistory();
  const todos = list.map((todo, i) => (
    <Item
      key={i}
      onClick={() => {
        history.push("/detail");
      }}
    >
      {todo}
    </Item>
  ));
  const wrapper = React.useRef(null); // 리액트 훅 사용, 초기값 제공

  console.log(wrapper);

  window.setTimeout(() => {
    console.log(wrapper);
  }, 1000);
  return (
    <div ref={wrapper}>
      <Title>버킷리스트</Title>
      <Line></Line>
      {todos}
    </div>
  );
};

const Line = styled.hr`
  margin: 20px;
  border: 1px solid slateblue;
`;

const Title = styled.h1`
  color: slateblue;
`;

const Item = styled.div`
  padding: 16px;
  margin: 10px;
  background-color: aliceblue;
`;

export default BucketList;
