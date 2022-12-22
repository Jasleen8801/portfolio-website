import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" className='about__me-image' />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Currently in 4th Semester</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Completed 5 Major Projects</small>
            </article>
          </div>
          <p>
            🔭 I’m currently working on Web automation and Bots<br/>
            🌱 I’m currently learning MERN stack<br/>
            👯 I’m looking to collaborate on Machine Learning and Data Science projects<br/>
            🤝 I’m looking for help with Cloud Hosting and Deployment<br/>
            💬 Ask me about Object Oriented Programming and Python<br/>
            ⚡ Fun fact I 'understood' that code<br/>
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
