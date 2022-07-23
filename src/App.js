import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

const App = (props) => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/detail'>
          <Detail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
