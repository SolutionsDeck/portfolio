import React from 'react'

const MobileCard = ({dt, index}) => {
  return (
    <>
    <div className={`plan ${dt.type === 'featured' ? 'featured' : ''}`} key={index}>
    <header><i className="ion-ios-navigate-outline"></i>
    {dt.type === 'featured' ? <div className='ribbon'>Recommended</div> : null}
      <h4 className="plan-title">
        {dt.title}
      </h4>
      <div className="plan-cost"><span className="plan-price">{dt.price}</span><span className="plan-type">{dt.title === 'Premium' ? 'Starting price' : ''}</span></div>
    </header>
    <ul className="plan-features">
        {dt.features && dt.features.map((feature) => (
            feature.visible === true ? 
            <li>{feature.name}
                </li>
                : null
        ))}
    </ul>
  </div>
    </>
  )
}

export default MobileCard