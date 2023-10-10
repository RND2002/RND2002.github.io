import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>HTML</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>CSS</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>Tailwind</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>Javascript</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>React</h4>
            
            </article>
          </div>

        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_-details-icon'/>
              <h4>Spring boot</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_-details-icon'/>
              <h4>MySQL</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_-details-icon'/>
              <h4>Node.js</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_-details-icon'/>
              <h4>Python</h4>
            
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_-details-icon'/>
              <h4>MOngoDB</h4>
            
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default experience