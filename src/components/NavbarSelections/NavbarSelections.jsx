import './NavbarSelections.scss'
import bag1 from '../../assets/NavbarSelections/Bags/AdobeStock_480885603.jpeg'
import bag2 from '../../assets/NavbarSelections/Bags/AdobeStock_570956545.jpeg'
import bag3 from '../../assets/NavbarSelections/Bags/AdobeStock_570956625.jpeg'
import bag4 from '../../assets/NavbarSelections/Bags/AdobeStock_570956666.jpeg'

function NavbarSelections() {
  return (
    <div className='navbarselections'>
        <div>
            <p>Elevate your style with our outstanding selection of men's bags. Crafted to complement any outfit, our range includes a variety of designs from classic crossbody bags and versatile tote bags to practical backpacks and spacious travel bags. Whether you're commuting to work, heading out for a weekend adventure, or simply keeping your essentials close at hand, we've got the perfect bag for every occasion.</p>
        </div>
        <div className='navbarselections__container'>   
            <div className='navbarselections__container-images'>
                <img src={bag1}></img>
            </div>
            <div className='navbarselections__container-images'>
                <img src={bag2}></img>
            </div>
            <div className='navbarselections__container-images'>
                <img src={bag3}></img>
            </div>
            <div className='navbarselections__container-images'>
                <img src={bag4}></img>
            </div>
        </div>
    </div>
  )
}

export default NavbarSelections
