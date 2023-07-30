import React from 'react'

const Members = () => {
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
            <li data-filter=".filter-web">Interns</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="img/AK.jpeg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Amogh Ak</h4>
              <p>Member</p>
              <p>MERN Stack Developer</p>
              <div className="portfolio-links">
                <a href="img/Ak.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="img/Sandesh.jpeg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Sandhesh Vanwadi</h4>
              <p>MERN Stack Developer</p>
              <div className="portfolio-links">
                <a href="img/Sandesh.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        

      </div>

    </div>
  </section>
  )
}

export default Members