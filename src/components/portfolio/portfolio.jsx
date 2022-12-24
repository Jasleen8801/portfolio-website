import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Cartoonify (OpenCV)',
    github: 'https://github.com/Jasleen8801/Cartoonify-using-opencv',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Zwiggato Discord Bot',
    github: 'https://github.com/Jasleen8801/Zwiggato',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Food-Ex Discord Bot',
    github: 'https://github.com/Jasleen8801/Food-ex',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Web 3.0 Krypt',
    github: 'https://github.com/Jasleen8801/web3.0-krypt',
    demo: 'https://jasleen8801.github.io/web3.0-krypt'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Medium Clone',
    github: 'https://github.com/Jasleen8801/medium-clone',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Website',
    github: 'https://github.com/Jasleen8801/portfolio-website',
    demo: 'htpps://jasleen8801.github.io/portfolio-website'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">{
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className='portfolio__item-image'/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">
                  Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
