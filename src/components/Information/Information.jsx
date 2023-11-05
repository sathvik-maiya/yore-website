import React ,{useState,useEffect} from 'react'
import "./information.css"
import { Typography } from '@mui/material';
import box1 from "../../components/images/box1.png";
import box2 from "../../components/images/box2.png";
import box3 from "../../components/images/box3.png";
import mobile from "../../components/images/mobile.png";
import Qr from "../../components/images/qr.png";
import adhaar from "../../components/images/adhaar.png";
import image1 from "../../components/images/image1.png";
import image2 from "../../components/images/image2.png";
import image3 from "../../components/images/image3.png";

function Information() {


 const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prevBox) => (prevBox % 3) + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  
  const boxStyle = {
    box1: {
      border: activeBox === 1 ? '2px solid #333' : 'none',
      height: activeBox === 1 ? '177px' : '80px',
   
    },
    box2: {
      border: activeBox === 2 ? '2px solid #333' : 'none',
      height: activeBox === 2 ? '177px' : '80px',
    },
    box3: {
      border: activeBox === 3 ? '2px solid #333' : 'none',
      height: activeBox === 3 ? '177px' : '80px',
    },
  };


  return (
    <div className='first'>
      <div className='second'>
        <div>
          <div className='o'>
  <Typography variant="overline"> ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID</Typography></div>
        </div>

        <div >
            <h2 className='pk'>
            <Typography variant="h2">Unlock India's Digital Health Ecosystem with Seamless Access </Typography></h2>
        </div>

        <div>
            <p className='paragraph'>
            <Typography variant="body2">Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.</Typography>
            </p>
        </div>

    


      </div>
          <div>
            <div className='but'> 
                <button className='button2'> CREATE ABHA &rarr;</button>
                 <button className='button3'> Know More</button>
            </div>
        </div>
 <div className='mainbox'>
        <div className='box1'>
           
           
            <div style={{ ...boxStyle.box1 }} className='div1'>
        {activeBox === 1 ? <div> <img src={box1}  alt="" className="boxim1" />   <h2 className='inside'>
            <Typography variant="h4">Unique and Reliable Identity</Typography></h2>    <p className='infor'>
Health ID cards offer a highly secure and encrypted platform. User consent is mandatory for accessing their PHR every time</p>   </div>  : <div> <img src={box1}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Unique and Reliable Identity</Typography></h2>  </div> 
            }
      </div>


      <div style={{ ...boxStyle.box2}} className='div2'>
             {activeBox === 2? <div> <img src={box2}  alt="" className="boxim1" />   <h2 className='inside' >
            <Typography variant="h4">Consolidated Benefits Platform</Typography></h2>   <p className='infor'>
Effortlessly link diverse healthcare benefits, from public health programs to insurance schemes, with your ABHA number.</p>
         </div> :<div> <img src={box2}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Consolidated Benefits Platformy</Typography></h2>  </div> 
            }
      </div>
      <div style={{ ...boxStyle.box3}} className='div3'>
              {activeBox === 3 ? <div> <img src={box3}  alt="" className="boxim1" />   <h2 className='inside'>
            <Typography variant="h4">Quick and Easy Registration</Typography></h2>   <p className='infor'>

Register swiftly by entering basic information and validating your Aadhaar or mobile number to generate your Health ID card.</p>   </div>  : <div> <img src={box3}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Quick and Easy Registration</Typography></h2>  </div> 
            }
      </div  >




</div>
<div className='box2'>
  <img src={mobile}  alt="" className="mobile_img" /></div>
{ activeBox===1 &&
 <div className="image-cont"><img src={Qr} alt="" className="pendu-image"/></div> 
}

{ activeBox===2 &&
 <div className="image-cont">
  <img src={image1} alt="" className="zig-zag-image1"/>
 <img src={image2} alt="" className="zig-zag-image2"/>
 <img src={image3} alt="" className="zig-zag-image3"/>

 </div> 
}
{ activeBox===3 &&
 <div className="image-cont"><img src={adhaar} alt="" className="pendu-image"/></div> 
}
        </div>


       
       
       
       </div>

  )
}

export default Information
