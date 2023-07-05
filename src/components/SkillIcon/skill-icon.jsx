import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./index.scss"

const SkillIcon = ({ icon, index, totalIcons, radius }) => {
    const iconRef = useRef(null);
    const circleRef = useRef(null);
  
    useEffect(() => {
      const angle = (360 / totalIcons) * index;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
  
      gsap.set(circleRef.current, { rotation: -angle, transformOrigin: 'center' });
  
      gsap.fromTo(
        iconRef.current,
        { rotation: 0 },
        {
          rotation: 360,
          duration: 5,
          repeat: -1,
          ease: 'linear',
          transformOrigin: 'center center',
        }
      );
    }, [index, totalIcons, radius]);
  
    return (
      <div ref={circleRef} className="skill-circle">
        <div ref={iconRef} className="skill-icon">
          {icon}
        </div>
      </div>
    );
  };

  export default SkillIcon;