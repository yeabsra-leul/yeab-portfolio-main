import React from 'react'
import "./index.scss"
import { useState,useEffect } from 'react';
import AnimatedLetters from 'components/AnimatedLetters';
import UiIcon from "../../assets/ui-icon.png"
import WebIcon from "../../assets/web-icon.png"
import MobileIcon from "../../assets/mobile-icon.png"

export default function Services() {
  const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
  }, [])
  return (
    <div className='services-container'>
      <div className="header-content">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S','e','r','v','i','c','e','s',' ','i',' ','P','r','o','v','i','d','e']}
            idx = {10}
          />
        </h1>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="lines"></div>
          <div className="img-box">
            <img src={UiIcon} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>UI/UX Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia quibusdam </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lines"></div>
          <div className="img-box">
            <img src={WebIcon} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Web Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia quibusdam </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lines"></div>
          <div className="img-box">
            <img src={MobileIcon} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Mobile Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia quibusdam molestias </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
