import React from 'react'
import FooterImg from '../assets/FooterImg.png'

const Footer = () => {
  return (
    <footer className='container-fluid p-4'>
      <div className='row'>
        <div className='col-12 text-center'>
          <img src={FooterImg} alt='footer image' width={200} />
        </div>
        <div className='col-6 col-md-4 mt-5'>
          <div className='d-flex flex-column gap-4 align-items-center'>
            <i class="fa-solid fa-location-dot fa-2xl"></i>
            <p>123 Town Street, Chicago</p>
          </div>
        </div>
        <div className='col-6 col-md-4 mt-5'>
          <div className='d-flex flex-column gap-4 align-items-center'>
            <i class="fa-solid fa-phone fa-2xl"></i>
            <p>+00 123 456 789</p>
          </div>
        </div>
        <div className='col-12 col-md-4 mt-5'>
          <div className='d-flex flex-column gap-4 align-items-center'>
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <p>littlelemon@gmail.com</p>
          </div>
        </div>
        <div className='col-12 d-flex flex-column align-items-center'>
          <h6 className='p-3'>Connect with us</h6>
          <div className='d-flex justify-content-center gap-3'>
            <i class="fa-brands fa-square-facebook fa-2xl"></i>
            <i class="fa-brands fa-square-instagram fa-2xl"></i>
            <i class="fa-brands fa-square-twitter fa-2xl"></i>
          </div>
        </div>
        <div className='col-12 py-4'>
          <h6 className='text-center mt-4'>&copy; Little Lemon Restaurant | 2023</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer;