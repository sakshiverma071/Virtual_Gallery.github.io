import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.css';

import modernaert2 from  "../assets/modernaert2.jpg";
import modernart3 from  "../assets/modernart3.jpg";
import modernart4 from  "../assets/modernart4.jpg";
import modern5 from  "../assets/modern5.jpg";
import modernart6 from  "../assets/modernart6.jpg";
import modern7 from  "../assets/modern5.jpg";
import modern8 from  "../assets/modern5.jpg";

import "../Component/Slider.css";


function Slider() {
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
          <img className="img-fluid"src={modern7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid"src={modernaert2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid"src={modernart3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid"src={modernart4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid"src={modern8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid"src={modernart6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid"src={modern5} alt="slide_image" />
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

export default Slider;
