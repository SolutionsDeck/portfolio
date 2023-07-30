import React, { useState } from 'react'
import { aboutData } from '../agency_data'

const About = () => {
  const [about, setAbout] = useState(aboutData)
  return (
    <section id="about" className="about">

 
    <div className="about-me container">

      <div className="section-title">
        <h2>Solutions Deck</h2>
        <p>Learn more about Agency</p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="img/me.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{about.title}</h3>
          <p className="fst-italic">{about.shortDesc}</p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Started:</strong> <span>{about.started}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{about.website}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{about.phone}</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Country:</strong> <span>{about.country}</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Experience:</strong> <span>{about.experience} years</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{about.email}</span></li>
              </ul>
            </div>
          </div>
          <p>{about.briefDesc}</p>
        </div>
      </div>

    </div>
    
    <div className="counts container">

      <div className="row">
        { about.countsData && about.countsData.map((data) => (

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className={data.icon}></i>
            <span data-purecounter-start="0" data-purecounter-end={data.count} data-purecounter-duration="1" className="purecounter"></span>
            <p>{data.name}</p>
          </div>
        </div>
          ))}
        
      </div>

    </div>
    
    <div className="skills container">

      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">

        <div className="col-lg-6">

          {about.skillsData && about.skillsData.slice(0,5).map((data) => (
            <div className="progress">
            <span className="skill">{data.name}<i className="val">{data.value}%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{width: data.value + "%"}} aria-valuenow={data.value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
            ))}

        </div>

        <div className="col-lg-6">

          {about.skillsData && about.skillsData.slice(5,10).map((data) => (
            <div className="progress">
            <span className="skill">{data.name}<i className="val">{data.value}%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{width: data.value + "%"}} aria-valuenow={data.value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
            ))}

        </div>

      </div>

    </div>
    
    

    <div className="testimonials container">

      <div className="section-title">
        <h2>More About US</h2>
      </div>

      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">

            {about.QAs && about.QAs.map((data) => (
          <div className="swiper-slide">

              <div className="testimonial-item">
              <h3>{data.title}</h3>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {data.desc}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
            </div>
          </div>
              ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>

      <div className="owl-carousel testimonials-carousel">

      </div>

    </div>

  </section>
  )
}

export default About