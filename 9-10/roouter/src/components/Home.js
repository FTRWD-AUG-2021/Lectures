import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const myProjects = [
    {
        id: "1a",
        name: "The Frogger Clone",
        year: 2021,
        technologies: "JavaScript, jQuery",
        description: "The first project game clone."
    },
    {
        id: "2b",
        name: "iTravel",
        year: 2021,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to share their experiences about travel destinations."
    },
    {
        id: "3c",
        name: "The Plan",
        year: 2021,
        technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to plan your next activity with your friends or business partners."
    }
]


function Home(props) {


    const ShowList = () => {
        return myProjects.map((eachProject) => {
            return <Link key={eachProject.id} to={`/project/${eachProject.id}`}><li>{eachProject.name}</li></Link>
        })
    }


    return (
        <div>
            Home <button onClick={props.history.goBack}>Go Back</button>

            <main>
                <h2>Check out my projects:</h2>
                <ShowList />
            </main>
        </div>
    );
}

export default Home;