import './Luxury.scss'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanguageIcon from '@mui/icons-material/Language';


function Luxury() {
  return (
    <div className='showcase'>
        <div className='showcase__container'>
            <div className='showcase__column showcase'>
                <div className='showcase__icon'><DiamondOutlinedIcon/></div>
                <h4>Prestige Picks</h4>
                <span>Premium selection from over 200 renowned global luxury labels.</span>
            </div>
            <div className='showcase__column collaborations'>
            <div className='showcase__icon'><LanguageIcon/></div>
                <h4>Signature Collaborative</h4>
                <span>Distinctive capsule collections exclusive to our platform.</span>
            </div>
            <div className='showcase__column shipping'>
            <div className='showcase__icon'><LocalShippingIcon/></div>
                <h4>Swift Worldwide Shipping</h4>
                <span>Expansive delivery, reaching more than 130 nations.</span>
            </div>
        </div>
        
    </div>
  )
}

export default Luxury

