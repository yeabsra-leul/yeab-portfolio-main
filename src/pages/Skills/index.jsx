import React from 'react'
import "./index.scss"
import AnimatedLetters from 'components/AnimatedLetters'
import { useEffect,useState } from 'react';
import ProgressBar from "../../components/ProgressBar/progress-bar.jsx";
import { gsap } from 'gsap';
import {ReactIcon} from "../../assets/react-icon.png"
import { Icon } from '@mui/material';

const skillData = [
  { title: "JavaScript",bgcolor: "#36A5DB", completed: 60 },
  { title: "React",bgcolor: "#36A5DB", completed: 30 },
  { title: "Angular",bgcolor: "#36A5DB", completed: 53 },
  { title: "React Native",bgcolor: "#36A5DB", completed: 40 },
  { title: "Flutter",bgcolor: "#36A5DB", completed: 70 },
  { title: "Node.Js",bgcolor: "#36A5DB", completed: 80 },
  { title: ".Net Core",bgcolor: "#36A5DB", completed: 93 },
  { title: "Tailwind Css",bgcolor: "#36A5DB", completed: 83 },
  { title: "Gsap",bgcolor: "#36A5DB", completed: 63 },
];

export default function Skills() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [completed, setCompleted] = useState(0);
  const [skills, setSkills] = useState([])

  // // eslint-disable-next-line no-undef
  // TweenMax.to(yourElement, 1, {rotation:360, ease:Linear.easeNone, repeat:-1})
  useEffect(() => {
    setTimeout(() => {
      const updatedSkills = skillData.map((item) => ({ ...item, completed: 0,  }));
    setSkills(updatedSkills);
    },)

    setTimeout(() => {
      const updatedSkills = skillData.map((item,idx) => ({ ...item, completed:skillData[idx].completed }));
    setSkills(updatedSkills);
    },1100)

    // setTimeout(() => {
    //   skillData.map((item,idx) =>setCompleted(skillData[idx].completed))
    // },3000)

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
