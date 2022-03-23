import logo from './logo.svg';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import Index from './views/Index';
import Create from './views/Create';
import Detail from './views/Detail';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
        <Route exact path="/:id">
          <Detail/>
        </Route>
        <Route exact path="/:id/edit">
          <Edit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
