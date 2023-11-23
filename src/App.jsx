import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import './global.scss'
import Hero from '/src/pages/Hero/Hero'
import Main from '/src/pages/Main/Main'
import SignIn from "./pages/SignIn/SignIn"
import Offer from "./components/Offer/Offer"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Luxury from "./components/Luxury/Luxury"
import Shoppingbag from "./components/ShoppingBag/Shoppingbag"
import Mainpage from "./pages/Mainpage/Mainpage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
              <Mainpage />
             
            
              
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

          <Route path='/shoppingbag' element={
          <div>
              <Banner/>
              <Navbar/>
              <Shoppingbag/>
              <Offer/>
          </div>
        }/>

       

        
      </Routes>
    </Router>
  )
}

export default App

   