import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jasleen</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/jasleen88801/" target='_blank'><FiInstagram/></a>
        <a href="https://www.facebook.com/profile.php?id=100085317212904" target='_blank'><FaFacebookF/></a>
        <a href="https://twitter.com/Jasleen88801" target='_blank'><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jasleen Kaur. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
