import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
      <h2>We are changing the way people shop</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
      <Link to='/products'>OUR PRODUCTS</Link>
    </div>
  )
}

export default Hero