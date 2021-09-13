import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';




function App() {

  let [dogPic, setDogPic] = useState('')
  let [catPic, setCatPic] = useState('')
  let [gif, setGif] = useState('')

  //Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=5838a9bd-a7b5-44e9-a8aa-008532cf0796' More details on authentication.
  useEffect(() => {

    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(resFromApi => {
        setDogPic(resFromApi.data.message)
      })

    axios.get('https://api.thecatapi.com/v1/images/search?api_key=5838a9bd-a7b5-44e9-a8aa-008532cf0796', {
      headers: {
        api_key: '5838a9bd-a7b5-44e9-a8aa-008532cf0796'
      }
    })
      .then(res => {
        setCatPic(res.data[0].url)
      })


    axios.get('https://api.giphy.com/v1/gifs/random?api_key=4KRR2ib2sfgJTS1gPRONV0SJNeLKxM2I&tag=&rating=g')
      .then(res => {
        console.log(res.data.data)
        setGif(res.data.data.image_url)
      })


  }, [])

  ///4KRR2ib2sfgJTS1gPRONV0SJNeLKxM2I
  return (
    <div className="App">
      <h2>Apis</h2>
      <img src={dogPic} />
      <img src={catPic} />
      <img src={gif} />
    </div>
  );
}

export default App;
