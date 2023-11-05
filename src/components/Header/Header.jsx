import React, {useState,useEffect } from "react";
import "./headers.css";
import logo from "../../components/images/logo.png";
import ham from "../../components/images/hamburger.png";
import { Container } from "reactstrap";
import Sidenavbar from './Sidenav.jsx'

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "App Features ",
    url: "#",
  },

  {
    display: "About Us",
    url: "#",
  },
  
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
    const [sidenav ,setsidenav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlenav =()=>{
    setsidenav(!sidenav)
  }

  return (
  <header className={`header ${scrolled ? 'scrolled' : ''}`}>
    <Container>
        <div  className="container">
          <div className="l" >
           
              <img src={logo} alt="" className="logo" />
           
          </div>

          <div >
            <div className="nav_menu" >
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav_item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
                <li className="mob-but"> <button className="button1">Download</button></li>
                <li className="hamm">  <img src={ham} alt="" className="ham" width={30}  onClick={handlenav}/></li>
              
              </ul>
           
            </div>

      </div>

        </div>
    </Container>
    {
     sidenav && <Sidenavbar/>

    }
    </header>
  );
};

export default Header;
