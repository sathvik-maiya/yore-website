import React from 'react'
import "./medicalsection.css"
import medi from "../../components/images/doctor.png";
import pres from "../../components/images/prescription.png";
import whatsapp from "../../components/images/whatsapp.png";
import book from "../../components/images/book.png";

function MedicalSection() {
  return (
    <>
    <div className='cont'>
      <img src={pres} alt="" className="pres" />
 
       <img src={medi} alt="" className="medi"/>


    </div>
           <img src={whatsapp} alt="" className="what" />
         <img src={book} alt="" className="book"/>
         </>
  )
}

export default MedicalSection
