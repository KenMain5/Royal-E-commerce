import React from 'react'
import './Accordion.scss'
import { useState } from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';


import SectionDivider from '/src/components/sectionDivider/SectionDivider'

function Accordion2() {
  const [toggle, setToggle] = useState(''); 

    const accordionItems = [
        {'title': 'ABOUT US', 'information': 'Most proceeds go to the care of ...Most proceeds go to the care of ...Most proceeds go to the care of ...Most proceeds go to the care of ...' }, 
        {'title': 'OUR GOAL', 'information': 'Most proceeds go to the care of ...'},
        {'title': 'OUR GOAL', 'information': 'Most proceeds go to the care of ...'},
        {'title': 'OUR GOAL', 'information': 'Most proceeds go to the care of ...'},
        {'title': 'OUR GOAL OUR GOAL OUR GOAL OUR GOAL OUR GOAL OUR GOAL OUR GOAL OUR GOAL', 'information': 'Most proceeds go to the care of ...'}
    ]

  return (
    <div className='accordion'>
        <div className='accordion__container'>
          {accordionItems.map((item,index) => (
              <div className='accordion__item' key={index}>
                <div className='accordion__item-header'>
                 {/* arrow ^ once clicked, arrow down */}
                  <span>{item.title}</span>
                  <div><ArrowDropDownOutlinedIcon/></div>
                
                </div>
                
                <div className='accordion__item-information'>
                  {/* height: 0; initially, once clicked -> height --> not specific, just put padding..  */}
                  <span>{item.information}</span>
              

                </div>
                <SectionDivider/>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Accordion2
