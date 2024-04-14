import React, { useState } from 'react'
import { servicesData } from '../agency_data'

const Services = () => {
  const [agency_data, setAgency_data] = useState(servicesData)
  return (
    <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>Solutions Deck</h2>
        <p>Services</p>
      </div>

      <div className="row">
        {agency_data && agency_data.map((data, index) => (
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" key={index}>
          <div className="icon-box">
            <div className="icon"><i className={data.icon}></i></div>
            <h4><a href="#!">{data.title}</a></h4>
            <p>{data.description}</p>
          </div>
        </div>
          ))}

      </div>

    </div>
  </section>
  )
}

export default Services