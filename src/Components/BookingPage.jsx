import { Link } from "react-router-dom";
import BookingHeroImg from "../assets/booking-table-img.jpg";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";


const BookingPage = ({updateTimes, availableTimes}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    updateTimes(date);

    setFinalTime(availableTimes.map((times) => <option value={times}>{times}</option>));
  }

  let buttonValidation = firstName && lastName && email && phoneNumber && guests && date && occasion;

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
          <input 
            className="form-control" 
            type="text" 
            placeholder="Enter your first name"
            minLength={2} 
            maxLength={50} 
            value={firstName} 
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Last Name</label>
          <input 
            className="form-control" 
            type="text" 
            placeholder="Enter your last name"
            minLength={2} 
            maxLength={50} 
            value={lastName} 
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Email</label>
          <input 
            className="form-control" 
            type="email" 
            placeholder="Enter your email address"
            value={email}
            minLength={4}
            maxLength={200}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Phone Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Select Date</label>
          <input
            className="form-control"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Select Time</label>
          <select className="form-select" required>
            {finalTime}
          </select>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Number of Guests</label>
          <input 
            className="form-control" 
            type="number" 
            placeholder="guests"
            min="0" 
            max="15" 
            value={guests}
            onChange={e => setGuests(e.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <label className="form-label">Occasion</label>
          <select className="form-select" value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversery">Anniversery</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
            <option value="None">None</option>
          </select>
        </div>


        <div className="mb-2">
          <button 
            type="button" 
            className="btn btn-reservation" 
            href="#" 
            data-bs-toggle="modal" 
            data-bs-target="#confirmationModal"
            disabled={buttonValidation ? false : true}
          >Make Your Reservation</button>
        </div>
        
        {
          buttonValidation ?
          <p className="mb-4 mx-1"></p> :
          <p className="mb-4 mx-1 text-danger fw-bold">Fill all the details</p>
        }

        <ConfirmationModal confirmationModal="confirmationModal" />
      </form>

    </div>
  )
}

export default BookingPage;