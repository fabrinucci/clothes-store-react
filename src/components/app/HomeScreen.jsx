import React from 'react'
import { Slide, Slideshow, SlideText } from '../content/Slideshow';

import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
// import img3 from '../../assets/img/product-dumbbell.jpg';
// import img4 from '../../assets/img/product-boxing.jpg';
// import img5 from '../../assets/img/product-tshirt.jpg';
// import img6 from '../../assets/img/product-ball.jpg';

export const HomeScreen = () => {
  return (
     <>
        <Slideshow>
          <Slide>
            <a href="https://www.google.com">
              <img src={img1} alt="" />
            </a>
            <SlideText backgroundColor="" textColor="white">
              <h1 className='slide-title'>Men`s clothes</h1>
              <p className='slide-description'>Cool summer sale 50% off</p>
              <button className='btn btn-slide'>Shop Now</button>
            </SlideText>
          </Slide>
       
          <Slide>
            <a href="https://www.google.com">
              <img src={img2} alt="" />
            </a>
            <SlideText backgroundColor="" textColor="white">
              <h1 className='slide-title'>Women`s clothes</h1>
              <p className='slide-description'>Want to Look Your Best?</p>
              <button className='btn btn-slide'>Shop Now</button>
            </SlideText>
          </Slide>
       
        </Slideshow>  
        
        <main>
          <div className="container">
            <h2>New Arrivals for you</h2> 

            <div className="main-container">

              {/* <div className='card-container'>
                <img src={img3} alt="product" />
                <div className="card-body">
                  <h4>Dumbbells</h4>
                  <p>$575.00</p>
                  <i className="fa-solid fa-cart-plus"></i>
                </div>
              </div> */}
 
            </div>
          </div>
        </main>
     </>
  )
}