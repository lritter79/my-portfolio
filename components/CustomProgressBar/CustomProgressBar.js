import React, {useState, useEffect} from 'react'
import styles from './CustomProgressBar.module.css'


function CustomProgressBar({}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          //console.log(seconds);
          if (seconds === 10) setSeconds(0);
          else setSeconds(seconds + 1);
          
        }, 500);
        // clearing interval
        return () => clearInterval(timer);
      });
    
      useEffect(() => {
        //console.log(skillsArray);
      }, []);
  return (
        <progress
              className={styles.customProgress}
              value={seconds * 20}
              max="100"
            >{`${seconds * 20}%`}</progress>  )
}

export default React.memo(CustomProgressBar);
