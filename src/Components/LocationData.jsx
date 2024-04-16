import React from 'react'
import '../Styles/LocationData.css';

const LocationData = ({location}) => {
    // console.log(location)

  return (
    <section className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span>Type:</span><span>{location?.type}</span></li>
            <li className='location__item'><span>Dimension:</span><span>{location?.dimension}</span></li>
            <li className='location__item'i><span>Population:</span><span></span>{location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationData