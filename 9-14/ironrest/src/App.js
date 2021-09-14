import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios'

//https://ironrest.herokuapp.com/




function App() {

  useEffect(() => {
    axios.get('https://ironrest.herokuapp.com/favoriteCandy')
      .then(res => console.log(res.data))
  }, [])

  const saveData = () => {
    axios.post('https://ironrest.herokuapp.com/favoriteCandy', { name: 'Snickers', calories: 0 })
      .then(res => console.log(res.data))
  }

  return (
    <div className="App">
      <h3>IronRest</h3>
      <button onClick={saveData}>Save Candy</button>
    </div>
  );
}

export default App;
