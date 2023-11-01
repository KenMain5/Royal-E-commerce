import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import './global.scss'
import Hero from '/src/pages/Hero/Hero'
import Main from '/src/pages/Main/Main'
import SignIn from "./pages/SignIn/SignIn"
import Offer from "./components/Offer/Offer"
import Register from "./pages/Register/Register"


function App() {
  return (
    <>
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

    </>
  )
}

export default App

   
      {/* <Navbar/>
      <SignIn/>
      <Offer/> */}
      