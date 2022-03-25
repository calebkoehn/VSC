import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import SinglePirate from './views/SinglePirate';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/pirates/create">
        <Create/>
      </Route>
      <Route exact path="/pirates/:id/view">
        <SinglePirate/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;