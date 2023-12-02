import React from 'react'
import FooterImg from '../assets/FooterImg.png'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-md-4 text-center footer-logo my-auto'>
          <img src={FooterImg} alt='footer image' width={180} />
        </div>
        <div className='col-6 col-md-4 mt-5 d-flex flex-column justify-content-center'>
          <div className='d-flex align-items-center gap-2 mb-3'>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <span className=''>123 Town Street, Chicago</span>
          </div>
          <div className='d-flex align-items-center gap-2 mb-3'>
            <i class="fa-solid fa-phone fa-lg"></i>
            <span>+00 123 456 789</span>
          </div>
          <div className='d-flex align-items-center gap-2 mb-3'>
            <i class="fa-solid fa-envelope fa-lg"></i>
            <span>littlelemon@gmail.com</span>
          </div>
        </div>

        <div className='col-6 col-md-4 mt-5'>
          <h6 className='mb-3 px-2'>Connect with us</h6>
          <div className='d-flex align-items-center gap-2 mb-3 px-3'>
            <i class="fa-brands fa-square-facebook fa-lg"></i>
            <span className=''>Facebook</span>
          </div>
          <div className='d-flex align-items-center gap-2 mb-3 px-3'>
            <i class="fa-brands fa-square-instagram fa-lg"></i>
            <span>Instagram</span>
          </div>
          <div className='d-flex align-items-center gap-2 mb-3 px-3'>
            <i class="fa-brands fa-square-twitter fa-lg"></i>
            <span>Twitter</span>
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