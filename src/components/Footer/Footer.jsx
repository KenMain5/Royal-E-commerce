import React from 'react'
import './Footer.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'

// Rename to terms 
function Footer() {
  return (
    <div>
        <SectionDivider/>
        <div className='top'>
            <span>TERMS & CONDITIONS</span>
            <span>PRIVACY POLICY</span>
        </div>
        <div className='bottom'>
            <span>Cmark 2021-2024. Love, Kenny is a registered trademark of LOVEBONITO SINGAPORE PTE. LTD. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer
