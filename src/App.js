import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.circle = React.createRef(null);
  }

  componentDidMount() {
    console.log(this.circle);
    this.circle.current.addEventListener("mouseover", this.hoverEvent);
  }

  hoverEvent = (e) => {
    console.log(e.target); // 이벤트 객체에서 이벤트가 발생한 타겟 가져옴.
    console.log(this.circle.current);
    this.circle.current.style.backgroundColor = "red";
  };

  componentWillUnmount() {
    this.circle.current.removeEventListener("mouseover", this.hoverEvent);
  }

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
        <Text />
        <div
          style={{
            margin: "auto",
            width: "250px",
            height: "250px",
            background: "green",
            borderRadius: "250px",
          }}
          ref={this.circle}
        ></div>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import styled from "styled-components";
// import BucketList from "./BucketList";
// import "./style.css";

// const App = (props) => {
//   const [list, setList] = React.useState([
//     "JS 파트 2 정리하기",
//     "3주차까지 듣기",
//     "자전 전화하기",
//   ]);
//   const new_todo = React.useRef(null);

//   const addBucket = () => {
//     const new_item = new_todo.current.value;
//     setList([...list, new_item]);
//     new_todo.current.value = "";
//   };

//   return (
//     <Wrapper>
//       <Container>
//         <BucketList list={list} />
//         <div>
//           <Input ref={new_todo}></Input>
//           <Button onClick={addBucket}>Submit</Button>
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   background-color: #eee;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
// `;

// const Container = styled.div`
//   background-color: #fff;
//   margin: auto;
//   width: 50vw;
//   max-width: 350px;
//   height: 50vh;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 16px;
//   text-align: center;
// `;

// const Input = styled.input`
//   margin: auto;
//   height: 30px;
//   width: 75%;
//   border: 1px solid #ddd;
// `;

// const Button = styled.button`
//   padding: 8px;
//   background-color: slateblue;
//   color: white;
//   border: 1px solid #ddd;
// `;

// export default App;
