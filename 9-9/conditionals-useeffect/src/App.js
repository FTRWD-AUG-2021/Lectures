import { useState, useEffect } from 'react'



// let stinksAtJavascript = true

// function App() {

//   if (stinksAtJavascript) {
//     return (
//       <h3>Study More</h3>
//     );

//   } else {
//     return (
//       <h3>Youu're Awesome</h3>
//     )
//   }

// }

// function App() {
//   let text = stinksAtJavascript ? <h3>Study More</h3> : <h3>Youu're Awesome</h3>
//   return text
// }



//

function App() {

  let [stinksAtJavascript, setStinksAtJavascript] = useState(true)

  let [user, setUser] = useState()

  let [num, setNum] = useState(0)

  useEffect(() => { //Only happens once in the beginning on mount 
    // setTimeout(() => {  //Go to a database and find our user
    console.log("This fires", user)
    setUser({ name: 'Julian', profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOAX8m3_9cxrqQH1JQRrZgcgWzObsWgKb3A&usqp=CAU' })

    // }, 3000)
  }, [stinksAtJavascript])


  // useEffect(() => {
  //   console.log('num or stinksAtJavascript chhanged')

  // }, [num, stinksAtJavascript])


  return (
    <div>
      <h3>{num}</h3>
      <h4>{user?.name}</h4>
      <img src={user?.profilePic} width='100' />

      <h2>Do you stiink at Javascript?</h2>
      {stinksAtJavascript ? <h3>Study More</h3> : <h3>Youu're Awesome</h3>}

      <button onClick={() => setStinksAtJavascript(!stinksAtJavascript)} >Toggle Variable</button>
      <button onClick={() => setNum(++num)} > Increment + </button>
    </div>
  )
}


















export default App;
