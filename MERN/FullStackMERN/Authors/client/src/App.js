import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { createBrowserHistory } from 'history';
import Add from './views/Add';
import Main from './views/Main';
import Update from './views/Update';


function App() {

  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/new">
            <Add/>
          </Route>
          <Route exact path="/edit/:id">
            <Update/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
