import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  let sum = 10 + 200

  let email = `ILoveJavascript@gmail.com`

  return (
    <div className="App">

      <NavBar sumAsAProp={sum} favAnimal="zebra" favColor="black" />

      {/* {NavBar(sum)} */}

      <p>The sum is {sum}</p>
      <Footer email={email} />

    </div>

  );
}





export default App;
