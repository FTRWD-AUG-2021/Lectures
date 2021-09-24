
import './App.css';
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import AnimalDetail from './components/AnimalDetail'

function App() {




  return (
    <div className="App">


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/animal/:animalId" component={AnimalDetail} />
      </Switch>

    </div>
  );
}

export default App;
