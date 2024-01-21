import './Navbar.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom';

function Navbar({handleNavbarClick}) {
  return (
    <nav>
      <div className="navbar__wrapper">
        <div className="navbar__container">
          <div className='navbar__logo'>
            <Link to='/'>
            <span>ROYAL</span>
            </Link>
          </div>
          
          <div className='navbar__links fullScreen'>
              
                <Link to='/'><span onClick={() => handleNavbarClick(0)}>New Arrivals</span></Link>
                <Link to='/'><span onClick={() => handleNavbarClick(1)}>Clothing</span></Link>
                <Link to='/'><span onClick={() => handleNavbarClick(2)}>Shoes</span></Link>
                <Link to='/'><span onClick={() => handleNavbarClick(3)}>Bags</span></Link>
                <Link to='/'><span onClick={() => handleNavbarClick(4)}>Accessories</span></Link>
                <Link to='/'><span onClick={() => handleNavbarClick(5)}>Sale</span></Link>
            
          </div>

          <div className='navbar__icons'>
              <div className='navbar__icon'>
                <Link to="/shoppingbag">
                  <WorkOutlineIcon/>
                </Link>
            
              </div>
              <div className='navbar__icon'>
                <Link to='/signin'>
                  <PersonOutlineOutlinedIcon/>
                </Link>
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
