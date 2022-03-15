import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NumWord from './components/NumWord';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/:param" component={NumWord} />
        <Route exact path="/:param/:fontColor/:backgroundColor" component={NumWord} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;


