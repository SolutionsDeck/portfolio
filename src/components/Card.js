import React from 'react'

const Card = ({data}) => {
  return (
    <div className='wrapper snip1265'>
    {data && data.map((dt) => (
        <div class={`plan ${dt.type === 'featured' ? 'featured' : ''}`}>
    <header><i class="ion-ios-navigate-outline"></i>
    {dt.type === 'featured' ? <div className='ribbon'>Recommended</div> : null}
      <h4 class="plan-title">
        {dt.title}
      </h4>
      <div class="plan-cost"><span class="plan-price">{dt.price}</span><span class="plan-type">{dt.title === 'Premium' ? 'Starting price' : ''}</span></div>
    </header>
    <ul class="plan-features">
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