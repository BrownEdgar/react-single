import React from 'react'
import Slider from "react-slick";
import './Animals.scss'

export default function Animals() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    centerMode: true,
    swipeToSlide: true,

  };
  return (
    <div className='Animals'>
      <h1>Animals page</h1>
      <Slider {...settings}>
        {new Array(10).fill().map((_, index) => {
          return (
            <div className='Slider-item' key={index}>
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident rem asperiores, consectetur adipisci quam pariatur!</h3>
              <img src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
