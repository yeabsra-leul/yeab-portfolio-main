import React from 'react'
import "./index.scss"
import { useState,useEffect } from 'react';
import AnimatedLetters from 'components/AnimatedLetters';

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
  }, [])
  return (
    <div className='about-container'>
        <div className="about-content">
            <h1 className='about-me'>
              <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx = {15}
                    /></h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fuga, pariatur nostrum praesentium quidem mollitia corrupti ullam ea labore quam?
            </p>
            <p align="LEFT">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quis architecto officiis, rerum vitae corrupti harum similique iure consequuntur dolorem debitis ad id facilis optio accusantium esse dolor quidem aut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quae totam doloremque assumenda. Et quisquam sit animi excepturi molestiae fuga officia ab? Perspiciatis et dicta ex recusandae! Sint, architecto maxime!
            </p>
        </div>
        
    </div>
  )
}
