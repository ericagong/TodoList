/* 클래스형 컴포넌트 사용 */
import React from "react";
import styled from "styled-components";
// class BucketList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: [],
//     };
//   }

//   // render는 무조건 있어야 함.
//   render() {
//     return <div>버킷리스트</div>;
//   }
// }

/* 함수형 컴포넌트 사용 */
const BucketList = ({ list }) => {
  const todos = list.map((todo, i) => <Item key={i}>{todo}</Item>);
  return (
    <div>
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

// function BucketList(props) {
// 	return (
// 		<div>버킷리스트</div>
// 	)
// }

export default BucketList;
// export { BucketList };
