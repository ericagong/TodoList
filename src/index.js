import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configStore";

const Wrap = (props) => {
  const [amount, setAmount] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);

  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  const resetHandler = () => setAmount(0);
  const flipHandler = () => {
    setDisabled((curr) => !curr);
    setAmount(0);
  };
  const Conatiner = () => (
    <div>
      <h1>Super Converter</h1>
      <label htmlFor='minutes'>Minutes</label>
      <input
        type='number'
        id='minutes'
        placeholder='minutes'
        value={!disabled ? amount * 60 : amount}
        onChange={changeHandler}
        disabled={!disabled}
      />
      <h3>You want to convert {amount}</h3>
      <label htmlFor='hours'>Hours</label>
      <input
        type='number'
        id='hours'
        placeholder='hours'
        value={disabled ? amount / 60 : amount}
        onChange={changeHandler}
        disabled={disabled}
      />
      <button onClick={resetHandler}>reset</button>
      <button onClick={flipHandler}>flip</button>
    </div>
  );

  return <Conatiner></Conatiner>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Wrap />);

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
