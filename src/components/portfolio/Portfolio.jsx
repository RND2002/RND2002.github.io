import React from 'react'
import './portfolio.css'
import IMG1 from  '../../assets/portfolio1.jpg'
import IMG2 from  '../../assets/portfolio2.jpg'
import  IMG3 from  '../../assets/portfolio3.jpg'





const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='img'/>
          </div>
          <h3>E commerce app for one district one product</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/RND2002/odop_shi' className='btn' target='.blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='.blank'>Live Demo</a>

          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='img'/>
          </div>
          <h3>Quiz App </h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/RND2002/Quiz-App-using-Spring-Boot' className='btn' target='.blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='.blank'>Live Demo</a>

          </div>
          </article>
          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='img'/>
          </div>
          <h3>Waste Management Application using Spring boot thymeleaf</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/RND2002/WasteManagementSHIProject' className='btn' target='.blank'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='.blank'>Live Demo</a>

          </div>
          </article>
         
      
      </div>
   
    </section>
  )
}

export default Portfolio