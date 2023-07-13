import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import traditional2 from  "../assets/traditional2.jpeg";
import traditional3 from  "../assets/traditional3.jpeg";
import traditional4 from  "../assets/traditional4.jpg";
import traditional5 from  "../assets/traditional5.jpg";
import traditional6 from  "../assets/traditional6.jpg";
import traditional7 from  "../assets/traditional7.jpg";
import traditional8 from  "../assets/traditional8.jpg";

import "../Component/Slider.css";

function Slider3() {
  return (
    <div  className='Slider'>
      <div className="container">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={traditional7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traditional2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traditional3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traditional4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traditional8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traditional6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traditional5} alt="slide_image" />
        </SwiperSlide>
        
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    
    </div>
  )
}

export default Slider3;
