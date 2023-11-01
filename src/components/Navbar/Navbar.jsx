import React from 'react'
import './Navbar.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Navbar() {
  return (
    <nav>
      <div className="navbar__wrapper">
        <div className="navbar__container">
          <div className='navbar__logo'>
            <span>ROYAL</span>
          </div>
          
          <div className='navbar__links'>
              <div className='navbar__links fullScreen'>
                <span>New Arrivals</span>
                <span>Designers</span>
                <span>Clothing</span>
                <span>Shoes</span>
                <span>Bags</span>
                <span>Accessories</span>
                <span>Sale</span>
              </div>
             
          </div>

          <div className='navbar__icons'>
              
              <div className='navbar__icon'>
                <SearchSharpIcon/>
              </div>
              <div className='navbar__icon'>
                <WorkOutlineIcon/>
              </div>
              <div className='navbar__icon'>
                <PersonOutlineOutlinedIcon/>
              </div>
              <div className='navbar__icon mobile'>
                <MenuSharpIcon/>
              </div>
          </div>
        </div>
      </div> 
    </nav>
  )
}

export default Navbar
