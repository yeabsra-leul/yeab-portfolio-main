import React from 'react'
import "./index.scss"
import AnimatedLetters from 'components/AnimatedLetters'
import { useEffect,useState } from 'react';
import {ReactComponent as Project1Img} from "../../assets/project1.svg"
import {ReactComponent as Project2Img} from "../../assets/project2.svg"
import {ReactComponent as Project3Img} from "../../assets/project3.svg"


export default function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
      }, 3000)
}, [])
  return (
    <div className="project-container">
      <div className="header-content">
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={['P','r','o','j','e','c','t','s']}
            idx = {10}
          />
        </h1>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="lines"></div>
          <div className="img-box">
            <Project1Img className='img'/>
          </div>
          <div className="content">
            <div className="details">
              <h2>Project 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia quibusdam </p>
              <a href="#">See Project</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lines"></div>
          <div className="img-box">
            <Project2Img className='img'/>
          </div>
          <div className="content">
            <div className="details">
              <h2>Project 2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia quibusdam </p>
              <a href="#">See Project</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="lines"></div>
          <div className="img-box">
            <Project3Img className='img'/>
          </div>
          <div className="content">
            <div className="details">
              <h2>Project 3</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia quibusdam </p>
              <a href="#">See Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
