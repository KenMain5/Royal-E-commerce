import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import './global.scss'
import Hero from '/src/pages/Hero/Hero'
import Main from '/src/pages/Main/Main'
import SignIn from "./pages/SignIn/SignIn"
import Offer from "./components/Offer/Offer"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
              <Banner/>
              <Navbar/>
              <Hero/>
              <Main/>
              <Banner/>
              <Navbar/>
              <SignIn/>
              <Offer/>
              <Navbar/>
              <Register/>
              <Offer/>
          </div>
        }/>

        <Route path='/register' element={
          <div>
              <Banner/>
              <Navbar/>
              <Register/>
              <Offer/>
          </div>
        }/>

        <Route path='/signin' element={
          <div>
              <Banner/>
              <Navbar/>
              <SignIn/>
              <Offer/>
          </div>
        }/>
        
      </Routes>
    </Router>
  )
}

export default App

   