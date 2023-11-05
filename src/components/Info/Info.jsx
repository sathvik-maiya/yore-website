import React from 'react'
import "./info.css"
import box7 from "../../components/images/box7.png";
import box8 from "../../components/images/box8.png";
import box9 from "../../components/images/box9.png";


function Info() {
  return (
    <div  className='inputq'>
        <div className='cont1'>
          <div className='cont1a'><h4>Convenience</h4></div>
          <div>
           <img src={box7} alt=""  className='box7 cont1b'  /></div>
        </div>
        <div className='cont2'>
 <div className='cont1a'><h4>Accessibility</h4></div>
          <div>
           <img src={box8} alt=""  className='box7 cont1b'  /></div>
        </div>

<div className='cont3' >
 <div className='cont1a'><h4>Security</h4></div>
          <div>
           <img src={box9} alt=""  className='box7 cont1b'  /></div>
    </div>      
    </div>
  )
}

export default Info
