import React, { useEffect, useState } from 'react';


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



function Project(props) {

    const [theProject, setTheProject] = useState({})

    useEffect(() => { //When component mounts

        let project = myProjects.find((eachProject) => {
            //Find project whose id is equal the idOftheProject in the url
            return eachProject.id === props.match.params.theIdOfTheProject
        })

        setTheProject(project) //Set that project to state
    }, [])

    return (
        <div>
            <h4>Project Details</h4>
            <h5>Project id is {props.match.params.theIdOfTheProject}</h5>

            <h5>Project name: {theProject.name} </h5>
            <p>Project description:{theProject.description} </p>
            <p>Project tech:{theProject.technologies} </p>
        </div>
    );
}

export default Project;