import { Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

const App = (props) => {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/detail'>
        <Detail />
      </Route>
    </div>
  );
};

export default App;
