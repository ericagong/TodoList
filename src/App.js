import React from "react";
import BucketList from "./BucketList";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["JS 파트 2 정리하기", "3주차까지 듣기", "자전 전화하기"],
    };
  }

  render() {
    return (
      <div className='App'>
        <div className='Container'>
          <BucketList list={this.state.list} />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className='App'>
//       <BucketList />
//     </div>
//   );
// }

export default App;
