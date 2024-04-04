import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slides.scss"

export default function Sliders() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='Slider'>
      <h1>Categories</h1>
      <Slider {...settings}>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1676321688723-72ddb32096cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="table" />
          <h3>Tables</h3>
          <p>2 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="armchair" />
          <h3>Armchairs</h3>
          <p>2 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1541085595943-84dd4307f30d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bath" />
          <h3>Baths</h3>
          <p>3 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1589200334106-58b552a9a8ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="light" />
          <h3>Lighting</h3>
          <p>5 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1588111948296-83a8e036e004?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shelve" />
          <h3>Shelves</h3>
          <p>2 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sofa" />
          <h3>Sofas</h3>
          <p>1 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1617325710236-4a36d46427c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chair" />
          <h3>Chairs</h3>
          <p>1 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bed" />
          <h3>Beds</h3>
          <p>7 item</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="other" />
          <h3>Other decor</h3>
          <p>1 item</p>
        </div>
      </Slider>
    </div>
  )
}
