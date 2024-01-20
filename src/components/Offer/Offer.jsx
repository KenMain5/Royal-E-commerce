import './Offer.scss'


function Offer() {
  return (
    <section className='offer'>
        <div className='offer-container'> 
            <div className='left'>   
                <span className='style1'>10% off when you sign up</span>
                <p className='style2'>Stay in the loop with the latest style news and get an exclusive 10% off when you subscribe to our emails. Learn more about our Privacy Policy here. Terms and conditions apply.</p>
                <form className='offer__form'> 
                    <label htmlFor='offer'>Email Address</label>
                    <div className='offer__form-group'>
                        <div className='offer__inputContainer'><input type='text' placeholder='your@address.com'></input></div>
                        <div className='offer__submitButton'><button>Submit</button></div>
                    </div>
                    
                </form>
            </div>
            <div className='right'>
                <span  className='style1'>need help?</span>
                <span  className='style2'>For any enquiries please visit ROYAL customer care</span>
                <span  className='style1'>change location</span>
                <span  className='style2'>United States</span>
            </div>
        </div>
    </section>
  )
}

export default Offer
