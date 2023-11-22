import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../Main/Main'
import Offer from '../../components/Offer/Offer'
import { useState, useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import Hero from '../Hero/Hero'



function Mainpage() {
    
    const [navbarOptions, setNavbarOptions] = useState(null); 
    const handleNavbarClick = (value) => {
        setNavbarOptions(value);
    }

    useEffect(() => {
        console.log(navbarOptions, 'this is the value of navbar options'); 
    },[navbarOptions])

    useEffect(() => {
        console.log(navbarOptions, 'this is the value of navbar options'); 
    },[])

    

  return (
    <main>
        <Banner />
        <Navbar handleNavbarClick={handleNavbarClick} />
        <Hero navbarOptions={navbarOptions} />
        <Main navbarOptions={navbarOptions} />
        <Offer />

    </main>
  )
}

export default Mainpage
