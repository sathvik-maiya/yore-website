import React from 'react'
import "./footer.css"
import logo from "../../components/images/logo.png";
import facebook from "../../components/images/facebook.png";
import instagram from "../../components/images/instagram.png";
import linkedln from "../../components/images/linkedln.png";
import x from "../../components/images/x.png";
import { Typography } from '@mui/material';

function Footer() {
  return (
    <div>
        <hr></hr>
    <div  className='left-right'>
        <div className='left'>
      <div className='lg'> 
  <img src={logo} alt="" className="log"/>

      </div>

      <div>

 <p className='paragra'>
            <Typography variant="body3">YORE Care is a Health-tech SUPER APP to create an integrated Health Web to Digitize, Preserve records & Empower the Care Seeker.</Typography>
            </p>



      </div>

      <div className='social'>
      <div>
            <img src={facebook} alt="" className="log1" />
      </div>
  <div>
          <img src={instagram} alt="" className="log1" />
  </div>
      <div> 
            <img src={linkedln} alt="" className="log1" />

      </div>
     <div>

                <img src={x} alt="" className="log1" />
     </div>
      </div>
        </div>

        <div  className='right'>

<div className='right1'>
<div > <h6>YORECARE</h6> </div>      
<div>
<div className='right1a'>
       <Typography variant="body4">Partner</Typography>
</div>
<div className='right1a'>
       <Typography variant="body4">Blog</Typography>
</div>
<div className='right1a'>
       <Typography variant="body4">Contact</Typography>
</div>

</div>
</div>

<div className='right2'>
<div > <h6>LEGAL</h6> </div>      
<div>
<div className='right2a'>
       <Typography variant="body4">Terms of Services</Typography>
</div>
<div className='right2a'>
       <Typography variant="body4">Privacy Policy</Typography>
</div>
<div className='right2a'>
       <Typography variant="body4">Return & Refund Policy</Typography>
</div>

</div>
</div>


<div className='right3'>
<div > <h6>CONTACT</h6> </div>      
<div>
<div className='right2a'>
       <Typography variant="body4">hello@yorecare.com</Typography>
</div>
<div className='right2a'>
       <Typography variant="body4">7420994331</Typography>
</div>
<div className='right2a'>
       <Typography variant="body4">B/106-107, Parmanand, Ashok Nagar, Ambadi Rd, Vasai West, Maharashtra 401202</Typography>
</div>

</div>
</div>

        </div>
      </div>
      <p className='love'>	&copy;2023. All rights reserved by <span className='purple'> Advance Digital Solutions.</span>  Made with love in india </p>
    </div>
  )
}

export default Footer
