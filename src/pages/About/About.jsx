import React from 'react'
import "./About.css"

function About() {


  return (
    <>
      <div className='container' id='about'>
        <div className='content'>
          <h1 className="heading" style={{ color: "white", size: "400px" }}>Hi, I am Pankaj Barsaiya</h1>

          <div class="dropping-texts">
            <div>Developers</div>
            <div>Designers</div>
            <div>Coders</div>
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