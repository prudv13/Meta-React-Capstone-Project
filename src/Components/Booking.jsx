import React, { useReducer } from 'react'
import BookingPage from './BookingPage';
import { fetchAPI } from '../utils/bookingAPI';

const Booking = () => {
    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return (
    <div>
        <BookingPage availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
  )
}

export default Booking;