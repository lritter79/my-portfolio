import React, {useState, useEffect} from 'react'
import styles from './CustomProgressBar.module.css'
import {colorByClassArr} from '../../data/colorArray';

function CustomProgressBar({}) {
    const [seconds, setSeconds] = useState(0);
    const [className, setClassName] = useState('primary');

    useEffect(() => {
        const timer = setInterval(() => {
          //console.log(seconds);
          if (seconds === 100) setSeconds(0);
          else setSeconds(seconds + 1);
          if ((seconds % 25) == 0) setClassName(colorByClassArr[seconds / 25])
        }, 50);
        
        // clearing interval
        return () => clearInterval(timer);
      });

      
    
      useEffect(() => {
        //console.log(skillsArray);
      }, []);
  return (
        <progress
              className={`nes-progress is-${className}`}
              value={seconds}
              max="100"
            >{`${seconds}%`}</progress>  )
}

export default CustomProgressBar;
