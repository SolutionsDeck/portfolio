import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>Solutions Deck</h2>
        <p>Services</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <div className="icon"><i class='bx bx-desktop'></i></div>
            <h4><a href="#!">Web Development</a></h4>
            <p>Design, Develop and Deploy is what we do best.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="icon-box">
            <div className="icon"><i class='bx bxs-devices'></i></div>
            <h4><a href="#!">Mobile Responsive</a></h4>
            <p>Transform your website into smooth Mobile Responsive.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="icon-box">
            <div className="icon"><i class='bx bx-color'></i></div>
            <h4><a href="#!">UI/UX Development</a></h4>
            <p>Creating seamless digital experiences through expert UI/UX development.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4><a href="#!">Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>

        
      </div>

    </div>
  </section>
  )
}

export default Services