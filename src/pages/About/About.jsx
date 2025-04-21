import React from 'react'
import "./About.css"

function About() {


  return (
    <>
      <div className='container-about' id='about'>
        <div className='content-about'>
          <h1 className="heading-about" >Hi, I am Pankaj Barsaiya</h1>

          <div class="dropping-texts">
            <div>Developer</div>
            <div>Frontend</div>
            <div>Backend</div>
          </div>


        </div>
          <div>
            <img className='profile' src='src\data\myPhoto.jpg' alt=''></img>
          </div>

      </div>
    </>
  )
}

export default About