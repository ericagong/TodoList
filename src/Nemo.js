import React from "react";

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);
  console.log(count);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      window.alert("네모가 너무 많아요. 기존 네모를 줄여야 더할수 있답니다 :(");
    }
  };
  const nemo_cnts = Array.from({ length: count }, (_, i) => i);
  return (
    <div>
      {nemo_cnts.map((_, i) => (
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
      <button onClick={addNemo}>네모 추가하기</button>
      <button
        onClick={() => {
          removeNemo();
        }}
      >
        네모 없애기
      </button>
    </div>
  );
};

export default Nemo;
