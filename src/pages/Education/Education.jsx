import React from 'react'
import "./Education.css"
import education from "../../data/education.json"

function Education(){

  return (
  <div className='container-edu' id='education'>
              <div className='content-edu'>
                  <h1>Education</h1>
                  <div className='edu'>
                      {education.education.map((e,i)=>(
                          <div key={i} className='edu-card'>
                              <h1 className="edu-title">{e.degree}</h1>
                              <h1 >Institute : {e.institution}</h1>
                              <p>Year:{e.year}</p>
                              <p>{e.grade}</p>
                              <p>{e.description}</p>
                          </div>
  
                      ) ) }
                  </div>
              </div>
          </div>
  )
}

export default Education
