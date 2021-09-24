import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home(props) {
    const [animals, setAnimals] = useState([])
    let [name, setName] = useState('')
    let [weight, setWeight] = useState(0)
    let [emotion, setEmotion] = useState('')

    useEffect(async () => {
        let res = await axios.get(`http://localhost:5000/all-animals`)
        setAnimals(res.data)
    }, [])

    const AllAnimals = () => {
        return animals.map(eachAnimal => {
            return <Link key={eachAnimal._id} to={`/animal/${eachAnimal._id}`}><li>{eachAnimal.name} {eachAnimal.weight} {eachAnimal.emotion}</li></Link>
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post(`http://localhost:5000/attic`, { name, weight, emotion })
        setAnimals([...animals, ...[res.data]])
    }


    return (
        <div>
            <h2>How do we talk to the backend?</h2>
            <ul><AllAnimals /></ul>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} placeholder="name" />
                <input onChange={(e) => setWeight(e.target.value)} placeholder="weight" type="number" />
                <input onChange={(e) => setEmotion(e.target.value)} placeholder="emotion" />
                <button>Add Animal</button>
            </form>

        </div>
    );
}

export default Home;