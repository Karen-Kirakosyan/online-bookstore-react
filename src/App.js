import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
}

export default App;
