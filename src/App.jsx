import { Fragment } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App
