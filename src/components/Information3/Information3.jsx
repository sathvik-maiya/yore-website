import React ,{useState,useEffect} from 'react'
import "./information3.css"
import { Typography } from '@mui/material';
import box10 from "../../components/images/box10.png";
import box11 from "../../components/images/box11.png";
import box12 from "../../components/images/box12.png";
import mobile2 from "../../components/images/mobile2.png";
import minutes from "../../components/images/minutes.png";
import water from "../../components/images/water.png";
import image7 from "../../components/images/image7.png";
import image8 from "../../components/images/image8.png";
import image9 from "../../components/images/image9.png";

function Information3() {


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
      height: activeBox === 1 ? '155px' : '80px',
   
    },
    box2: {
      border: activeBox === 2 ? '2px solid #333' : 'none',
      height: activeBox === 2 ? '155px' : '80px',
    },
    box3: {
      border: activeBox === 3 ? '2px solid #333' : 'none',
      height: activeBox === 3 ? '155px' : '80px',
    },
  };


  return (
    <div className='first'>
      <div className='second'>
        <div><div>
  <Typography variant="overline"> SYNC, TRANSFORM, GET FIT WITH SMART HEALTH</Typography></div>
        </div>

        <div>
            <h2>
            <Typography variant="h2">Connect to the fitness galaxy and embark on an adventure </Typography></h2>
        </div>

        <div>
            <p className='paragraph'>
            <Typography variant="body2">Sync your healthcare devices, elevate consistency, and be on the path of a transformational journey like never before!

</Typography>
            </p>
        </div>

    


      </div>
          <div>
            <div className='but'> 
                <button className='button2'>Download App</button>
                 <button className='button3'> Know More</button>
            </div>
        </div>
 <div className='mainbo'>
        <div className='box1'>
           
           
            <div style={{ ...boxStyle.box1 }} className='di1'>
        {activeBox === 1 ? <div> <img src={box10}  alt="" className="boxim1" />   <h2 className='inside'>
            <Typography variant="h4">Activity Tracker</Typography></h2>    <p className='infor'>

Tracks steps, distance, calories burned, and other physical and activities.</p>   </div>  : <div> <img src={box10}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Activity Tracker</Typography></h2>  </div> 
            }
      </div>


      <div style={{ ...boxStyle.box2}} className='di2'>
             {activeBox === 2? <div> <img src={box11}  alt="" className="boxim1" />   <h2 className='inside' >
            <Typography variant="h4">Water Tracker</Typography></h2>   <p className='infor'>

Measures and monitors heart rate during workouts or daily and activities.</p>
         </div> :<div> <img src={box11}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Water Tracker</Typography></h2>  </div> 
            }
      </div>
      <div style={{ ...boxStyle.box3}} className='di3'>
              {activeBox === 3 ? <div> <img src={box12}  alt="" className="boxim1" />   <h2 className='inside'>
            <Typography variant="h4">Sleep Tracker</Typography></h2>   <p className='infor'>

Monitors sleep patterns, providing insights into sleep quality and duration.</p>   </div>  : <div> <img src={box12}  alt="" className="boxim1" />   <h2 className='inside'> 
            <Typography variant="h4">Sleep Tracker</Typography></h2>  </div> 
            }
      </div  >
</div>
<div className='box2'>
  <img src={mobile2}  alt="" className="mobil_img" /></div>
{ activeBox===1 &&
 <div className="image-c"><img src={water} alt="" className="pendu-image"/></div> 
}

{ activeBox===2 &&
 <div className="image-c">
  <img src={image7} alt="" className="zig-zag-image1"/>
 <img src={image8} alt="" className="zig-zag-image2"/>
 <img src={image9} alt="" className="zig-zag-image3"/>

 </div> 
}
{ activeBox===3 &&
 <div className="image-c"><img src={minutes} alt="" className="pendu-image"/></div> 
}
        </div>
       </div>

  )
}

export default Information3
