import React, { Component } from 'react';
import {
  Switch, Route, Router, Link, useLocation,
} from 'react-router-dom';
import PersistentDrawer from './components/PersistentDrawer';
import MainContainer from './components/MainContainer';
import MessageBoard from './components/MessageBoard';
import SubmitQuestions from './components/SubmitQuestion';
// import MainContainer from './components/MainContainer';
import Login from './components/Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="router">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/profile">
            <MainContainer />
          </Route>
        </Switch>
      </div>

    );
  }
}

export default App;
