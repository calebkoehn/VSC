import logo from './logo.svg';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import SingleJob from './views/SingleJob';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/jobs/create">
        <Create/>
      </Route>
      <Route exact path="/jobs/:id">
        <SingleJob/>
      </Route>
      <Route exact path="/jobs/:id/edit">
        <Update/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
