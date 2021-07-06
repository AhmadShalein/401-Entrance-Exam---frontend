import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Main /></Route>
          </Switch>
          <Switch>
            <Route path="/favorite"><Favorite /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;