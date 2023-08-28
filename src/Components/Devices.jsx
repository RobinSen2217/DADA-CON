import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Devices.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const slides=[{
    url:'https://lh3.googleusercontent.com/yt5FGbyvBSoAYuOAh7zW-R91NtRXs4HTR1uggdhNuWb3WdkfAEUGKbCGERsCGdgww_l2JdVbYcOtVnfZawyW2vV3IjxDx8s29M7hHvxJthCRFA=w1440-e365'
},
{
    url:'https://lh3.googleusercontent.com/yt5FGbyvBSoAYuOAh7zW-R91NtRXs4HTR1uggdhNuWb3WdkfAEUGKbCGERsCGdgww_l2JdVbYcOtVnfZawyW2vV3IjxDx8s29M7hHvxJthCRFA=w1440-e365'
},
{
    url:'https://lh3.googleusercontent.com/yt5FGbyvBSoAYuOAh7zW-R91NtRXs4HTR1uggdhNuWb3WdkfAEUGKbCGERsCGdgww_l2JdVbYcOtVnfZawyW2vV3IjxDx8s29M7hHvxJthCRFA=w1440-e365'
}]

let index

function Devices() {
    
const sendData= (event)=>{
    // let index= event.target.key
    index=event.target.getAttribute('id')
    // export index

    
// const stopMovie = (e) => {
//   e.target.pause();
//   console.log('off');
// }

// const playMovie = (e) => {
//   e.target.play();
//   console.log('on');
// }


}
  return (
    <div className="container">
      <h1 className="text-center text-5xl font-Spy">Our Devices</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
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
        {/* {slides.map((slide,index)=>{
            return(
              <SwiperSlide key={index}>
                <Link to='/device'></Link><img src={slide.url} alt="flower" />
              </SwiperSlide>
            )
        })} */}


        <SwiperSlide>
          <Link onClick={sendData} to='/device'><video loop id='0'
  poster={slides[0].url}
  onMouseOver={event => event.target.play()}
  onMouseOut={event => event.target.pause()}
  src='/videos/pendrive.mp4' >
</video></Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link onClick={sendData} to='/device' ><img id='1' src={slides[0].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/device' onClick={sendData} ><img id='2' src={slides[0].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/device' onClick={sendData} ><img id='3' src={slides[0].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link onClick={sendData} to='/device' ><img id='5' src={slides[0].url} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/device' onClick={sendData} ><img id='6' src={slides[0].url} alt="slide_image" /></Link>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination  text-purple-500"></div>
        </div>
      </Swiper>
    </div>
  );
}


export default Devices;

export {index}