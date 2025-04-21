import React from 'react'
import "./Skills.css"
import skills from "../../data/skills.json"
function Skills() {


    return (
        <>
            <div className='container-skills' id='skills'>
                <div className='content-skills'>
                    <h1>Skills</h1>
                    <div className='skills'>
                    {skills.skills.map((item, index) => (<div className='skill' key={index}>
                        <img src={item.img} alt=''></img>
                        <h2>{item.title}</h2>
                    </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
