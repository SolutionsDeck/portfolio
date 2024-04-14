import React from 'react'

const Card = ({data}) => {
  return (
    <div className='wrapper snip1265'>
    {data && data.map((dt, index) => (
        <div key={index} className={`plan ${dt.type === 'featured' ? 'featured' : ''}`}>
    <header><i className="ion-ios-navigate-outline"></i>
    {dt.type === 'featured' ? <div className='ribbon'>Recommended</div> : null}
      <h4 className="plan-title">
        {dt.title} <br/> {dt.title2}
      </h4>
      <div className="plan-cost"><span className="plan-price">{dt.price}</span></div>
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
                ))}
  
    </div>
  )
}

export default Card