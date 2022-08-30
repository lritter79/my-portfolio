import React, {useState, useEffect} from 'react'
import styles from './CustomProgressBar.module.css'
import {colorByClassArr} from '../../data/colorArray';

function CustomProgressBar({}) {
    const [seconds, setSeconds] = useState(0);
    const [className, setClassName] = useState('primary');

    useEffect(() => {
        const timer = setInterval(() => {
          //console.log(seconds);
          if (seconds === 5) setSeconds(0);
          else setSeconds(seconds + 1);
          setClassName(colorByClassArr[seconds % 4])
        }, 500);
        // clearing interval
        return () => clearInterval(timer);
      });
    
      useEffect(() => {
        //console.log(skillsArray);
      }, []);
  return (
        <progress
              className={`nes-progress is-${className}`}
              value={seconds * 20}
              max="100"
            >{`${seconds * 20}%`}</progress>  )
}

export default CustomProgressBar;
