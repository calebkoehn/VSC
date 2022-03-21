import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/products">
            <Main/>
          </Route>
          <Route exact path="/products/:id">
            <Detail/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
