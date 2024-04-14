import React, { useState } from 'react'
import { membersData } from '../agency_data'

const Members = () => {
  const [members, setMembers] = useState(membersData)
  return (
    <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Solutions Deck</h2>
        <p>Members</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">Founding Members</li>
            <li data-filter=".filter-card">Employees</li>
            <li data-filter=".filter-web">Freelancers</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container">
      {members && members.map((member, index) => (

        <div key={index} className={member.type === "filter-web" ?"col-lg-4 col-md-6 portfolio-item filter-web" : member.type === "filter-card" ? "col-lg-4 col-md-6 portfolio-item filter-card" : "col-lg-4 col-md-6 portfolio-item filter-app"}>
          <div className="portfolio-wrap">
            <img src={member.img} className="img-fluid" alt={member.name} />
            <div className="portfolio-info">
              <h4>{member.name}</h4>
              <p> {member.designation} </p>
              <div className="portfolio-links">
                <a href={member.img} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      ))}

      </div>

    </div>
  </section>
  )
}

export default Members