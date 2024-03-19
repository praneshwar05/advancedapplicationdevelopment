import React from 'react'
import fav from "./fav-icon.png";
import homeimage from "./img1.png";
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <img alt="image1" src={homeimage} className="home-image" />
      <a href="./patientlist"><button type="button" className="home-button button">
        Our Patients
      </button></a>
      <h1 className="home-text">MediCareHub</h1>
      <img src={fav} alt="fav1" className="home-image1" />
      <a href="./login"><button type="button" className="home-button1 button">
        LOGIN
      </button></a>
      <a href="./signup"><button type="button" className="home-button2 button">
        SIGNUP
      </button></a>
      <a href="./doctorslist"><button type="button" className="home-button3 button-txt">
        Doctors
      </button></a>
      <h1 className="home-text2">Stay Healthy, Stay Safe.</h1>
      <span className="home-text3">
        &quot;Healing centers for all, where care stands tall.&quot;
      </span>
      <a href="./about"><button type="button" className="home-button4 button">
        ABOUT
      </button></a>
    </div>
  )
}

export default Home
