import React from 'react'
import "./people.css"
import Box from "@mui/material/Box"; 
import Paper from "@mui/material/Paper"; 
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';

function People() {
  return (
    <div className='fir'> 
       
      <div className='secon'>
        <div>
          <div>
  <Typography variant="overline">TESTIMONIALS</Typography></div>
        </div>
        </div>


        <div  className='parag'>
           
            
              <p>
            <Typography variant="h4">
 Checkout what people are saying about their experiences.</Typography>
            </p>

          
        </div>


        <div className='padd'> 
   
                <Box 
                    sx={{ 
                        display: "flex", 
                         flexWrap:"wrap",
                         margin:"auto",
                         justifyContent:"center",
                        gap:"30px",
                       
                                               
                        "& > :not(style)": { 
                            m: 0,
                             
                            width: 350, 
                            height: 240, 
                        }, 
                    }} 
                > 
                    <Paper elevation={7}

                    sx={{
                        p:3,
                        backgroundColor:"#f9f9f9"
                    }}
                >
                     <h5>PARITOSH</h5>
                         <Typography variant="body1">05-02-2022</Typography>
                         <Rating name="size-small" defaultValue={5} size="small" />
                         <p>YORE Care App made my ABHA creation very easy. It is a user-friendly app that empowers you to take control of your healthcare journey like never before.</p>
                    
                    </Paper> 
                    <Paper elevation={7}
                     sx={{
                        p:3,
                            backgroundColor:"#f9f9f9"
                        
                    }}> 
            <h5>KETAKI</h5>
                         <Typography variant="body1">10-10-2022</Typography>
                         <Rating name="size-small" defaultValue={5} size="small" />
                         <p>I used the YORE Care app to make my ABHA ID. Now it is my go-to app. I have saved my health documents, and synced my health devices with it. Now I do not have to use multiple apps.</p>
                    </Paper> 
                    
                    <Paper elevation={7}
                     sx={{
                        p:3,
                            backgroundColor:"#f9f9f9"
                        
                    }}> 
        <h5>ANUJ</h5>
                         <Typography variant="body1">04-7-2023</Typography>
                         <Rating name="size-small" defaultValue={5} size="small" />
                         <p>I find YORE Care very helpful it's very easy for me to order medicine online from my local chemist. Their team of pharmacists is outstanding!</p>
                    </Paper> 
                </Box> 

        </div>
    </div>
  )
}

export default People
