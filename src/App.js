import React from "react";
import styled from "styled-components";
import BucketList from "./BucketList";
// import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["JS 파트 2 정리하기", "3주차까지 듣기", "자전 전화하기"],
    };

    // this.text = React.createRef();
  }

  // componentDidMount() {
  //   console.log(this.text.current);
  // }

  render() {
    return (
      <Wrapper>
        <Container>
          <BucketList list={this.state.list} />
          {/* <div>
            <input type='text' ref={this.text} />
            <button></button>
          </div> */}
        </Container>
      </Wrapper>
    );
  }
}

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
