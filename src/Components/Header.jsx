import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header container-fluid'>
      <div className='row'>
        <div className='d-flex align-items-center col-12 col-md-6 order-2 order-md-1'>
          <div className='card bg-transparent border-0 p-2'>
            <h1 className='hero-heading'>Little Lemon</h1>
            <h3 className='hero-subheading'>Chicago</h3>
            <p className='hero-caption'>
              We are a family owned Mediterranean restaurant, focused on 
              traditional recipes served with a modern twist.
            </p>
            <Link to='/booking'>
              <button className='btn btn-warning'>Reserve Table</button>
            </Link>
          </div>
        </div>
        <div className='col-12 col-md-6 order-1 order-md-2'>
          <div className='card bg-transparent border-0 p-2'>
            <img className='rounded' src='https://images.pexels.com/photos/6287486/pexels-photo-6287486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero-image' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;