import { Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import RandomPages from "./pages/RandomPages";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/hats">
          <RandomPages heading="HATS" />
        </Route>
        <Route path="/jackets">
          <RandomPages heading="JACKETS" />
        </Route>
        <Route path="/sneakers">
          <RandomPages heading="SNEAKERS" />
        </Route>
        <Route path="*">
          <RandomPages heading="WRONG URL" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
