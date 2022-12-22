import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jasleen-kaur-9a27b821a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Jasleen8801" target="_blank"><FaGithub/></a>
        <a href="https://medium.com/@jkaur1_be21" target="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials
