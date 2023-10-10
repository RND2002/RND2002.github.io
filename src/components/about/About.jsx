import React from 'react'
import ME from '../../assets/aboutme.webp'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
		<div className='about__me'>
			<div className='about__me-image'>
				<img src={ME} alt="abc"/>
			</div>
		</div>
		<div className='about__content'>
			<div className='about__card'>
				<article className='about__card'>
					<FaAward className="about__icon"/>
					<h5>Experience</h5>
					<small>3+Years Working</small>
				</article>
				 {/* <article className='about__card'>
					<FiUsers className="about__icon"/>
					<h5>Clients</h5>
					<small>200+ clients worldwide</small>
				</article> */}
				{/* // <article className='about__card'>
				// 	<VscFolderLibrary className="about__icon"/>
				// 	<h5>Projects</h5>
				// 	<small>80+ projects</small>
				</article> */} 
			</div>
			<p>
			I'm Aryan Dwivedi, a seasoned Full Stack Developer proficient in Spring Boot, Java, Spring Cloud, React,
			 Git, MySQL, and Tailwind CSS. With a passion for crafting efficient and user-friendly applications, I excel in both
			  frontend and backend development. I specialize in building microservices architecture using Spring Cloud and delivering
			  
			   responsive UIs with React and Tailwind CSS. My commitment to clean code and version control with Git ensures reliable,
			    collaborative projects. Let's collaborate and turn your ideas into reality. Reach out to me at aryan.735921@@email.com
				 for exciting development opportunities.
			</p>
			<a href='#contact' className='btn btn-primary'>Let's Talk</a>
		</div>

	  </div>
    </section>
  )
}

export default About