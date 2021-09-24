import { useEffect, useState } from 'react';
import axios from 'axios'


function AnimalDetail(props) {

    const [animal, setAnimal] = useState({})

    useEffect(async () => {
        let res = await axios.get(`http://localhost:5000/specific-animal?animalId=${props.match.params.animalId}`)
        console.log(res)
        setAnimal(res.data)
    }, [])

    console.log(props)
    return (
        <div>
            Animal id is {props.match.params.animalId}
            <li>Name: {animal.name}</li>
            <li>Weight: {animal.weight}</li>
            <li>Emotion: {animal.emotion}</li>
        </div>
    );
}

export default AnimalDetail;