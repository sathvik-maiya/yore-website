import React ,{useState,useEffect} from 'react'
import "./information2.css"
import { Typography } from '@mui/material';
import box4 from "../../components/images/box4.png";
import box5 from "../../components/images/box5.png";
import box6 from "../../components/images/box6.png";
import mobile1 from "../../components/images/mobile1.jpg";
import report from "../../components/images/report.png";
import bill from "../../components/images/bill.png";
import image4 from "../../components/images/image4.png";
import image5 from "../../components/images/image5.png";
import image6 from "../../components/images/image6.png";

function Information2() {


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
      height: activeBox === 1 ? '165px' : '80px',
   
    },
    box2: {
      border: activeBox === 2 ? '2px solid #333' : 'none',
      height: activeBox === 2 ? '165px' : '80px',
    },
    box3: {
      border: activeBox === 3 ? '2px solid #333' : 'none',
      height: activeBox === 3 ? '180px' : '80px',
    },
  };


  return (
    <div className='first'>
      <div className='second'>
        <div><div>
  <Typography variant="overline"> STREAMLINED HEALTH RECORD MANAGEMENT MADE EFFORTLESS</Typography></div>
        </div>

        <div>
            <h2>
            <Typography variant="h2">NOW Link Your Health Records with ABHA ID </Typography></h2>
        </div>

        <div>
            <p className='paragraph'>
            <Typography variant="body2">Experience a cutting-edge solution for effortless management of your health records. Gain secure and convenient digital access.</Typography>
            </p>
        </div>

    


      </div>
          <div>
            <div className='but'> 
                <button className='button2'> Upload Now</button>
                 <button className='button3'> Know More</button>
            </div>
        </div>
 <div className='mainbox'>
        <div className='box1'>
           
           
            <div style={{ ...boxStyle.box1 }} className='div1'>
        {activeBox === 1 ? <div> <img src={box4}  alt="" className="boxim1" />   <h2 className='inside'>
            <Typography variant="h4">Digitrack</Typography></h2>    <p className='infor'>

Effortlessly record and manage digital details of your medical treatments. the patients in one practice</p>   </div>  : <div> <img src={box4}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Digitrack</Typography></h2>  </div> 
            }
      </div>


      <div style={{ ...boxStyle.box2}} className='div2'>
             {activeBox === 2? <div> <img src={box5}  alt="" className="boxim1" />   <h2 className='inside' >
            <Typography variant="h4">MedTrack</Typography></h2>   <p className='infor'>

Centralize medical documents, including diagnostic test reports and prescriptions, for easy future reference.</p>
         </div> :<div> <img src={box5}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">MedTrack</Typography></h2>  </div> 
            }
      </div>
      <div style={{ ...boxStyle.box3}} className='div3'>
              {activeBox === 3 ? <div> <img src={box6}  alt="" className="boxim1" />   <h2 className='inside'>
            <Typography variant="h4">CareTrack</Typography></h2>   <p className='infor'>

Enable doctors to access your comprehensive medical files, treatment history, and diagnostic reports through a single platform</p>   </div>  : <div> <img src={box6}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">CareTrack</Typography></h2>  </div> 
            }
      </div  >
</div>
<div className='box2'>
  <img src={mobile1}  alt="" className="mobile_img" /></div>
{ activeBox===1 &&
 <div className="image-con"><img src={bill} alt="" className="pendu-image"/></div> 
}

{ activeBox===2 &&
 <div className="image-con">
  <img src={image4} alt="" className="zig-zag-image1"/>
 <img src={image5} alt="" className="zig-zag-image2"/>
 <img src={image6} alt="" className="zig-zag-image3"/>

 </div> 
}
{ activeBox===3 &&
 <div className="image-con"><img src={report} alt="" className="pendu-image"/></div> 
}
        </div>
       </div>

  )
}

export default Information2
