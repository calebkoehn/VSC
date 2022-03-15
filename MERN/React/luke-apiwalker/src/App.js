import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 className='mb-5'>Luke APIwalker Project</h1>
      <Form />
      <Switch>
        <Route exact path="/:category/:id" component={Results} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
