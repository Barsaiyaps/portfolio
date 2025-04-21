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
                            <img className='project-image' style={{height:"300px",borderRadius:"100%",border:"2px solid white",margin:"0px",padding:"0px"}} src={e.image} />
                            <h1 style={{fontSize:"30px",marginTop:"20px"}}>{e.title}</h1>
                            <p>{e.description}</p>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <a style={{margin:"30px", fontSize:"20px",border:"1px solid white", padding:"5px",background:"black",borderRadius:"5px" }} href={e.link}>Click here</a>
                            <a style={{margin:"30px", fontSize:"20px",border:"1px solid white", padding:"5px",background:"black",borderRadius:"5px" }} href={e.github}>Github</a>
                            </div>
                        </div>

                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default Projects
