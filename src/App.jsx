import { Fragment } from 'react'
import './App.css'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import BookingPage from './Components/BookingPage'
import Footer from './Components/Footer'

function App() {
  return (
    <Fragment>
      <Nav />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App
