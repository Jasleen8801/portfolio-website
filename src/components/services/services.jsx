import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Web Design and Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Corporate Graphic Designing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile App Designing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Designing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Theme Based Designing</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Progressiv Web App Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Portals Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud-based Web App Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Enterprise Web App Development</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Automation and Chatbots</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automation Testing using Selenium</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Discord Bots using Nextcord</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>AI chatbots with NLP</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customer Support Chatbot</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
