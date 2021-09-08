
import { useState } from 'react'
import './App.css';

function App() {

  // let name = 'Felix'
  let [name, setName] = useState('Felix')
  let [number, setNumber] = useState(0)
  let [shows, setShows] = useState(['Friends', 'The Office', 'Suits'])


  const changeName = () => {
    console.log('Channge the Name!')
    //name = 'Garfield'
    setName('Garfield')
  }

  const increment = () => {
    setNumber(++number)
  }
  const decrement = () => {
    setNumber(--number)
  }

  const deleteShow = (i) => {
    console.log('deleteShow', i)
    let copyOfShows = [...shows] //Make a copy 
    copyOfShows.splice(i, 1) //Channge said copy
    setShows(copyOfShows) //Replace old list with new copy
  }


  const ShowTheListOfShows = () => {
    let list = shows.map((eachShow, i) => {
      return <li key={i}>{eachShow} <button onClick={() => deleteShow(i)} >Delete</button></li>
    })
    return list
  }


  return (
    <div className="App">
      <h2>Working with State</h2>
      <h4>{Math.random()}</h4>
      {/* <h1 style={{
        backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16)
      }}>Meow! 😼 My name is {name}</h1> */}

      <h1>Meow! 😼 My name is {name}</h1>
      <button onClick={changeName} >Change Name</button>

      <h1>{number}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <h2>TV Shows</h2>

      {/* <ul>
        <li>{shows[0]}</li>
        <li>{shows[1]}</li>
        <li>{shows[2]}</li>
      </ul> */}
      <ul>
        <ShowTheListOfShows />
      </ul>

    </div>
  );
}


// documnet.querySelector('button').onclick = function(){} 



export default App;























// function Dog({ name }) {
//   console.log('woof!');
//   return (
//     <div>🐶 Sit {name}</div>
//   )
// }