import { Link } from "react-router-dom";
import BookingHeroImg from "../assets/booking-table-img.jpg";


const BookingPage = () => {
  return (
    <div className="container-fluid booking-page">
      <div className="row">

        <div className="col-12 booking-hero-bg">
        </div>

        <div className="col-12 my-4 px-3">
          <Link to='/'>
            <button className='btn btn-dark'>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </Link>
        </div>

      </div>

      <form className="row">

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">First Name</label>
          <input className="form-control" type="text" />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Last Name</label>
          <input className="form-control" type="text" />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Phone Number</label>
          <input className="form-control" type="text" />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Choose Date</label>
          <input className="form-control" type="date" />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Choose Time</label>
          <select className="form-select">
            <option>12:00 PM</option>
            <option>01:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
            <option>05:00 PM</option>
            <option>06:00 PM</option>
            <option>07:00 PM</option>
            <option>08:00 PM</option>
            <option>09:00 PM</option>
            <option>10:00 PM</option>
            <option>11:00 PM</option>
          </select>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Number of Guests</label>
          <input className="form-control" type="number" min="0" max="10" name="guests" />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Occasion</label>
          <select className="form-select">
            <option>Birthday</option>
            <option>Anniversery</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <button type="button" className="btn btn-reservation">Make Your Reservation</button>
        </div>

      </form>
      
    </div>
  )
}

export default BookingPage;