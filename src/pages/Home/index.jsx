import React from 'react'
import AstronautImage from "../../assets/atronaut.png"
import WavesImage from "../../assets/waves.png"
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faDiscord,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import "./index.scss"
import { useState,useEffect } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/index.jsx'

export default function Home() {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = ['Y','E','A','B','S','R','A']
    const jobArray = ['F','u','l','l',' ','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

  return (
    <div className='container'>
        <section className='main-content'>
            <img src={AstronautImage} alt="astronaut" width={420} height={400} />
            
            <div className='info-container'>
                <div className="info">
                    <div className="text-info">
                        <p className='name'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={7}
                        
                        />
                        </p>
                        <p className='desc'>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={15}
                        />
                        </p>
                    
                    </div>
                    <div className="buttons">
                        <Link className='hire-me link'>
                            Hire Me
                        </Link>
                        <Link className='download-cv link'>
                            Download CV
                            <FontAwesomeIcon icon={faDownload} />
                        </Link>
                    </div>
                </div>
                <div className="socials">
                <a href="" className="icon discord"><FontAwesomeIcon icon={faDiscord} className='icon'/></a>
                <div className="line"></div>
                <a href="" className="icon linked"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
                <div className="line"></div>
                <a href="" className="icon git"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                </div>
            </div>
        </section>
        <section className='waves'>
            <img src={WavesImage} alt="" />
        </section>
        
    </div>
  )
}
