import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {


  return (
    <div className="App">
      <h3>React Router Dom</h3>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>




      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project/:theIdOfTheProject" component={Project} />
      </Switch>
    </div>
  );
}

export default App;
