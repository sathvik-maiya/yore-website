import React, { Fragment } from "react";
import Header from "../components/Header/Header.jsx";
import HeroSection from "../components/Hero-Section/HeroSection.jsx";
import Medical from "../components/Medical/MedicalSection.jsx";
import Information from "../components/Information/Information.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Information2 from "../components/Information2/Information2.jsx";
import Information3 from "../components/Information3/Information3.jsx";
import Info from "../components/Info/Info.jsx";
import Container1 from "../components/Container1/Container1.jsx";
import People from "../components/People/People.jsx";
import Questions from "../components/Questions/Questions.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <Fragment >
         <Header  />
         <HeroSection />
            <Medical/>
          <Information/>
          <Slider/>
          <Information2/>
          <Info/>
          <Information3/>
          <Container1/>
          <People/>
          <Questions/>
         <Footer/>


    </Fragment>
  );
};

export default Home;
