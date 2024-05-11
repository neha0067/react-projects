import React from 'react'
import { Link } from 'react-router-dom'


function Cocktail({ image, drink, glass, info, id }) {



  return (
    <div>
        <img src={image} alt={glass}/>
        <h2>{drink}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Details</Link>
    </div>
  )
}

export default Cocktail