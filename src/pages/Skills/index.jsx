import React from 'react'
import "./index.scss"
import AnimatedLetters from 'components/AnimatedLetters'
import { useEffect,useState } from 'react';
import ProgressBar from "../../components/ProgressBar/progress-bar.jsx";
import { gsap } from 'gsap';
import {ReactIcon} from "../../assets/react-icon.png"
import { Icon } from '@mui/material';

const skillData = [
  { title: "JavaScript",bgcolor: "#36A5DB", completed: 85 },
  { title: "React",bgcolor: "#36A5DB", completed: 80 },
  { title: "Angular",bgcolor: "#36A5DB", completed: 75 },
  { title: "Next.js",bgcolor: "#36A5DB", completed: 75 },
  { title: "Flutter",bgcolor: "#36A5DB", completed: 85 },
  { title: "Node.Js",bgcolor: "#36A5DB", completed: 80 },
  { title: ".Net Core",bgcolor: "#36A5DB", completed: 85 },
  { title: "Tailwind Css",bgcolor: "#36A5DB", completed: 85 },
  { title: "Gsap",bgcolor: "#36A5DB", completed: 70 },
];

export default function Skills() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [completed, setCompleted] = useState(0);
  const [skills, setSkills] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const updatedSkills = skillData.map((item) => ({ ...item, completed: 0,  }));
    setSkills(updatedSkills);
    },)

    setTimeout(() => {
      const updatedSkills = skillData.map((item,idx) => ({ ...item, completed:skillData[idx].completed }));
    setSkills(updatedSkills);
    },1100)

      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [completed])
  return (
    <div className='skills-container'>
      <div className="header-content">
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={['S','k','i','l','l','','s','e','t','s']}
            idx = {10}
          />
        </h1>
      </div>
      <div className="skills-card">
        {skills.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title = {item.title} />
        ))}
      </div>
    </div>
  )
}
