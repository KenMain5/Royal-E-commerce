import './Banner.scss'
import { useState, useEffect } from 'react';

function Banner() {
  const messagesList = 
    [
      "Fall/Winter 2023 is here", 
      "Find luxury to love",
      "But First, Sale: 25%* off everything"
    ]; 

const [counter, setCounter] = useState(0); 
useEffect(() => { 
  const intervalID = setInterval(() => {
    setCounter((prev) => {
      if (prev === 2){
        return 0; 
      } else {
        return prev + 1; 
      }
    }); //end of setCounter
    

        }, 2000); //end of set interval
        return (() => {clearInterval(intervalID);})
        }, []); // end of useEffect  





return (
    <section className='banner'>
        <div className='messagesList'>{messagesList[counter]}</div>
    </section>
  )
}

export default Banner
