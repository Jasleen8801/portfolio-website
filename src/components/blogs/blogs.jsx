import React from 'react'
import './blogs.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    title: 'Data Analytics',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facilis odio reprehenderit repellat ad nemo beatae. Deleniti, suscipit odit! Quibusdam autem hic in exercitationem nulla architecto aspernatur nesciunt quae? Excepturi?'
  },
  {
    avatar: AVTR2,
    title: 'Discord Bots',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facilis odio reprehenderit repellat ad nemo beatae. Deleniti, suscipit odit! Quibusdam autem hic in exercitationem nulla architecto aspernatur nesciunt quae? Excepturi?'
  },
  {
    avatar: AVTR3,
    title: 'Web Development',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facilis odio reprehenderit repellat ad nemo beatae. Deleniti, suscipit odit! Quibusdam autem hic in exercitationem nulla architecto aspernatur nesciunt quae? Excepturi?'
  },
  {
    avatar: AVTR4,
    title: 'Machine Learning',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facilis odio reprehenderit repellat ad nemo beatae. Deleniti, suscipit odit! Quibusdam autem hic in exercitationem nulla architecto aspernatur nesciunt quae? Excepturi?'
  },
]

const Blogs = () => {
  return (
    <section id='blogs'>
      <h5>Inspired by Cybernetics</h5>
      <h2>My Blogs</h2>

      <Swiper className="container blogs__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, title, content}, index) => {
            return (
              <SwiperSlide key={index} className="blog">
                <div className="blog__avatar">
                  <img src={avatar} alt="Avatar " />
                </div>
                <h5 className='blog__title'>{title}</h5>
                <small className="blog__content">
                  {content}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Blogs
