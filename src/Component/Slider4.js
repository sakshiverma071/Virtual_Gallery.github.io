import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import abstract2 from  "../assets/abstract2.jpg";
import abstract3 from  "../assets/abstract3.jpg";
import abstract4 from  "../assets/abstract4.jpeg";
import abstract5 from  "../assets/abstract5.jpg";
import abstract6 from  "../assets/abstract6.jpg";
import abstract7 from  "../assets/abstract7.jpg";
import abstract9 from  "../assets/abstract9.jpeg";

import "../Component/Slider.css";

function Slider4() {
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
          <img src={abstract7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abstract2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abstract3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abstract4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abstract9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abstract6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abstract5} alt="slide_image" />
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

export default Slider4;
