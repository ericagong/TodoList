/* 클래스형 컴포넌트 사용 */
import React from "react";
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
  const todos = list.map((todo, i) => (
    <div className='todo' key={i}>
      {todo}
    </div>
  ));
  return (
    <div>
      <h1>버킷리스트</h1>
      <hr className='Line' />
      {todos}
    </div>
  );
};

// function BucketList(props) {
// 	return (
// 		<div>버킷리스트</div>
// 	)
// }

export default BucketList;
// export { BucketList };
