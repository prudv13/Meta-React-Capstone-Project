import { Fragment } from 'react'
import './App.css'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'
import Booking from './Components/Booking'

function App() {
  return (
    <Fragment>
      <Nav />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App
