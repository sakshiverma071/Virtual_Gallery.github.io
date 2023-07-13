import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import landscape1 from  "../assets/landscape1.jpg";
import landscape2 from  "../assets/landscape2.jpg";
import Landscape3 from  "../assets/Landscape3.jpg";
import landscape4 from  "../assets/landscape4.jpg";
import landscape5 from  "../assets/landscape5.jpg";
import Landscape6 from  "../assets/landscape6.jpg";
import landscape7 from  "../assets/landscape7.jpg";

import "../Component/Slider.css";

function Slider2() {
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
          <img src={Landscape6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landscape1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landscape2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Landscape3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landscape4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landscape5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landscape7} alt="slide_image" />
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

export default Slider2;
