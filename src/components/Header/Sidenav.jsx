import React from "react";
import "./Sidenav.css"; 
import logo from "../../components/images/logo.png";
import { Typography } from '@mui/material';

const Sidenav = () => {



  return (
    <div className="sidenav">
      <ul className="sidenav-list">
       
          <li className="sidenav-ite">
        <img src={logo} alt="" className="logo" />
          </li>
             <li className="sidenav-item">
              <Typography variant="h5">Home</Typography>
          </li>
                <li className="sidenav-item">
              <Typography variant="h5">App Features</Typography>
          </li>
       <li className="sidenav-item">
              <Typography variant="h5">About Us</Typography>
          </li>
  
      </ul>
    </div>
  );
};

export default Sidenav;
