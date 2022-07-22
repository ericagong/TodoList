import React from "react";
import styled from "styled-components";
import Nemo from "./Nemo";
// import BucketList from "./BucketList";
// import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 3 };
  }

  addNemo = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    } else {
      window.alert("네모가 너무 많아요. 기존 네모를 줄여야 더할수 있답니다 :(");
    }
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어요 :(");
    }
  };

  render() {
    // console.log(this.state.count);
    // const nemo_cnts = Array.from({ length: this.state.count }, (_, i) => i);
    return (
      <div className='App'>
        <h1>Nemo Project</h1>
        <Nemo></Nemo>
        {/* {nemo_cnts.map((_, i) => (
          <div
            className='Nemo'
            key={i}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "gray",
              margin: "10px",
            }}
          ></div>
        ))}
        <button onClick={this.addNemo}>네모 추가하기</button>
        <button
          onClick={() => {
            this.removeNemo();
          }}
        >
          네모 없애기
        </button> */}
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: ["JS 파트 2 정리하기", "3주차까지 듣기", "자전 전화하기"],
//     };

//     // this.text = React.createRef();
//   }

//   // componentDidMount() {
//   //   console.log(this.text.current);
//   // }

//   render() {
//     return (
//       <Wrapper>
//         <Container>
//           <BucketList list={this.state.list} />
//           {/* <div>
//             <input type='text' ref={this.text} />
//             <button></button>
//           </div> */}
//         </Container>
//       </Wrapper>
//     );
//   }
// }

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

// function App() {
//   return (
//     <div className='App'>
//       <BucketList />
//     </div>
//   );
// }

export default App;
