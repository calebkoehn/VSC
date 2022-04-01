import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import SingleProduct from './views/SingleProduct';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/products/create">
        <Create/>
      </Route>
      <Route exact path="/products/:id">
        <SingleProduct/>
      </Route>
      <Route exact path="/products/:id/edit">
        <Update />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
