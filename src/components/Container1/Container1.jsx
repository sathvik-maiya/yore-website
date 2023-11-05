import React from 'react'
import "./Container1.css"
import { Typography } from '@mui/material';
import Box from "@mui/material/Box"; 
import Paper from "@mui/material/Paper"; 
import box13 from "../../components/images/box13.png";
import box14 from "../../components/images/box14.png";
import box15 from "../../components/images/box15.png";
import nha from "../../components/images/nha.jpg";
import digital1 from "../../components/images/digital image.png";
import digital2 from "../../components/images/digitalindia.png";
import make from "../../components/images/make.png";



function Container1() {
  return (
   <div className='firs'>
      <div className='secon'>
        <div>
          <div>
  <Typography variant="overline"> STAY TUNED: SOMETHING AMAZING IS COMING!</Typography></div>
        </div>

            <div className='bluetext'>
            <h2>
            <Typography variant="h2"><span className='blue'> YORE Care</span> app </Typography></h2>
        </div>


        <div>
           
            
              <p className='paragra'>
            <Typography variant="body2">
 “The more you empower, more is the value you can create”</Typography>
            </p>

              <p className='paragrap'>
            <Typography variant="body2">
We always strive to empower the care seeker so as to extract more value and benefits out of the existing ecosystem.</Typography>
            </p>
        </div>
       </div>
<div>

 
                <Box 
                    sx={{ 
                        display: "flex", 
                        
                         flexWrap:"wrap", 
                         margin:"auto",
                         justifyContent:"center",
                        gap:"30px",
                                               
                        "& > :not(style)": { 
                            m: 1, 
                            width: 350, 
                            height: 240, 
                        }, 
                    }} 
                > 
                    <Paper elevation={1}
                >
                    <div class="contenti">
             <div class="images"><img src={box13}  alt="" className='paper1' /> </div>
             <h6 className='head'><Typography variant="h6">Lab Booking</Typography></h6>
            <h6 className='hea'><Typography variant="h6">Find Labs, Book Home Services, And Get Reports On The YORE Care App!</Typography></h6>
            </div>
                    
                    </Paper> 
                    <Paper elevation={1}> 
               <div class="contenti">
               <div class="images"><img src={box14}  alt="" className='paper1' /> </div>
                 <h6 className='head'><Typography variant="h6">Online Teleconsultation</Typography></h6>
                 <h6 className='hea'><Typography variant="h6">Find Doctors, Clinics, And Book Appointments With The YORE Care!</Typography></h6>
                      </div>
                    </Paper> 
                    
                    <Paper elevation={1}> 
              <div class="contenti">
               <div class="images"> <img src={box15}  alt="" className='paper1' /></div>
                 <h6 className='head'><Typography variant="h6">Pharmacy and Health Store</Typography></h6>
                  <h6 className='hea'>  <Typography variant="h6">Buy Medicines, Health, And Wellness Products From The YORE Care App!</Typography></h6>

                   </div>
                    </Paper> 
                </Box> 
    

</div>

                  <div className='con2'>
                   <div>
                    <img src={nha}  alt="" className='paper2a'  width={200}/> 
                     <div className='bd'><Typography variant="body1">NHA APPROVED</Typography></div>
                   </div>
                   <div>
                      <img src={digital1}  alt="" className='paper2a' width={200} /> 
                        <div className='bd1'><Typography variant="body1">ABDM COMPLIANT</Typography></div>
                   </div>
                   
                    <div>
                       <img src={digital2}  alt="" className='paper2a' width={200}/> 
                         <div className='bd1'><Typography variant="body1">DIGITAL INDIA</Typography></div>
                   </div>
                       <img src={make}  alt="" className='paper2' width={200} /> 
                         <div className='bd3'><Typography variant="body1">MAKE IN INDIA</Typography></div>
                   <div>

                   </div>

                  </div>

    </div>
  )
}

export default Container1
