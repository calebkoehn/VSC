import {Router} from '@gatsbyjs/reach-router';
import Routing from './components/Routing';
import './App.css';

function App() {
  return (
    <div className="App text-center">
      <Router>
        <Routing path="/home" />
        <Routing path="/:numOrWord" />
        <Routing path="/:numOrWord/:fontColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
