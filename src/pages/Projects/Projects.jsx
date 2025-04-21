import React from 'react'
import "./Projects.css"
import projects from "../../data/projects.json"

function Projects() {
    return (
        <div className='container-project' id='projects'>
            <div className='content-project'>
                <h1>Projects</h1>
                <div className='projects'>
                    {projects.projects.map((e,i)=>(
                        <div key={i} className='project-card'>
                            <img className='project-image' src={e.image} ></img>
                            <h1 className="project-title">{e.title}</h1>
                            <p>{e.description}</p>
                            <div className='project-links' >
                            <a className='btn-project' href={e.link}>Click here</a>
                            <a className='btn-project'  href={e.github}>Github</a>
                            </div>
                        </div>

                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default Projects
