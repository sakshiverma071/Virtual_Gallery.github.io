import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import potrait2 from  "../assets/potrait2.jpg";
import potrait3 from  "../assets/potrait3.jpg";
import potrait5 from  "../assets/potrait5.jpg";
import potrait6 from  "../assets/potrait6.jpg";
import potrait8 from  "../assets/potrait8.jpg";
import potrait7 from  "../assets/potrait7.webp";
import potrait9 from  "../assets/potrait9.webp";

import "../Component/Slider.css";

function Slider5() {
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
          <img src={potrait7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={potrait2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={potrait3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={potrait5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={potrait9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={potrait8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={potrait6} alt="slide_image" />
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

export default Slider5;