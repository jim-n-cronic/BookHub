import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SeachBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NavBar from "./components/NavBar";

//import "./App.css";
const App = () => {
  return(
    <Router>
      <div>
        <NavBar />
          <Switch>
            <Route exact path="/" component={SeachBooks} />
            <Route exact path="/searchbooks" component={SeachBooks} />
            <Route exact path="/savedbooks/id" component={SavedBooks} />
          </Switch>
      </div>
    </Router>
  )
}

export default App;
