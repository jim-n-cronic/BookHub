import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import BookHub from './pages/BookHub'
// import SavedBooks from './pages/SavedBooks'
import NavBar from './components/Nav'

import Home from './pages/Home'
class App extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={BookHub} />
            <Route exact path="/search" component={BookHub} />
            <Route exact path="/savedbooks" component={SavedBooks} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
