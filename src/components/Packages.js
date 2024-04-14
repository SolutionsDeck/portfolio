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
  const [infoModal, setInfoModal] = useState(false)

  return (
    <section id="resume" className="resume">
      {!infoModal ? (
        <>
    <div className="container cus-container">

    <CarouselProvider
          totalSlides={3}
          naturalSlideWidth={100}
          naturalSlideHeight={32}
          infinite={true}
        >
          <div className='package-header'>
          <h3>Packages We Provide</h3>
          {/* <h5 className='info-h5' onClick={() => setInfoModal(true)}>Click me</h5> */}
          </div>
          <Slider className="cus-slider-two">
            <Slide index={0} className='cus-slide'>
              <Card data={packages.slice(0,3)} />
            </Slide>
            <Slide index={1} className='cus-slide'>
              <Card data={packages.slice(3,6)} />
            </Slide>
            <Slide index={2} className='cus-slide'>
              <Card data={packages.slice(6,9)} />
            </Slide>
          </Slider>
          <div className='button-div'>
            <ButtonBack className="cus-back btn">
              <i className='bx bxs-left-arrow'></i>
            </ButtonBack>
            <ButtonNext className="cus-front btn">
              <i className='bx bxs-right-arrow'></i>
            </ButtonNext>
          </div>
        </CarouselProvider>

    </div>
    <div className="container-mobile">

    <CarouselProvider
          totalSlides={6}
          naturalSlideWidth={100}
          naturalSlideHeight={32}
          infinite={true}
        >
          <div className='package-header'>
            <h3>Packages We Provide</h3>
            {/* <h5 className='info-h5' onClick={() => setInfoModal(true)}>Click me</h5> */}
          </div>
          <Slider className="cus-slider-two">
            {packages.map((pack, index) => (
              <Slide index={0} className='cus-slide'>
                <div className='wrapper snip1265' key={index}>
                <MobileCard dt={pack} index={index} />
                </div>
            </Slide>
            ))}
          </Slider>
          <div className='button-div'>
            <ButtonBack className="cus-back btn">
              <i className='bx bxs-left-arrow'></i>
            </ButtonBack>
            <ButtonNext className="cus-front btn">
              <i className='bx bxs-right-arrow'></i>
            </ButtonNext>
          </div>
        </CarouselProvider>

    </div>
    </>
      ): (
        <div className='container'>
          <div className='info-modal'>

          <div className='package-header'>
          <h3>Titleee</h3>
          <h5 className='info-h5' onClick={() => setInfoModal(false)}>Back</h5>
          </div>
          <div className='info-listing'>
            <ul>
              <li>Prices for all packages can be negotiated.</li>
              <li>Point 2</li>
            </ul>
          </div>
          </div>
        </div>
      ) }
  </section>
  )
}

export default Packages