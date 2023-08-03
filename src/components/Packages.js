import React, { useState } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from './Card';
import { packagesData } from '../agency_data';
import MobileCard from './MobileCard';

const Packages = () => {
  const [packages, setPackages] = useState(packagesData)
  return (
    <section id="resume" className="resume">
    <div className="container">

    <CarouselProvider
          totalSlides={3}
          naturalSlideWidth={100}
          naturalSlideHeight={32}
          infinite={true}
        >
          <h3>Packages We Provide</h3>
          <Slider className="cus-slider-two">
            <Slide index={0} className='cus-slide'>
              <Card data={packages.slice(0,3)} />
            </Slide>
            <Slide index={1} className='cus-slide'>
              <p>Hi, Package Slide 1</p>
            </Slide>
            <Slide index={2} className='cus-slide'>
              <p>i, Package Slide 2</p>
            </Slide>
          </Slider>
          <div className='button-div'>
            <ButtonBack className="cus-back btn">
              <i class='bx bxs-left-arrow'></i>
            </ButtonBack>
            <ButtonNext className="cus-front btn">
              <i class='bx bxs-right-arrow'></i>
            </ButtonNext>
          </div>
        </CarouselProvider>

    </div>
    <div className="container-mobile">

    <CarouselProvider
          totalSlides={3}
          naturalSlideWidth={100}
          naturalSlideHeight={32}
          infinite={true}
        >
          <h3>Packages We Provide</h3>
          <Slider className="cus-slider-two">
            {packages.map((pack) => (
              <Slide index={0} className='cus-slide'>
                <div className='wrapper snip1265'>
                <MobileCard dt={pack} />
                </div>
            </Slide>
            ))}
          </Slider>
          <div className='button-div'>
            <ButtonBack className="cus-back btn">
              <i class='bx bxs-left-arrow'></i>
            </ButtonBack>
            <ButtonNext className="cus-front btn">
              <i class='bx bxs-right-arrow'></i>
            </ButtonNext>
          </div>
        </CarouselProvider>

    </div>
  </section>
  )
}

export default Packages