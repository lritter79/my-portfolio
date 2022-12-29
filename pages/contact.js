import React, { useReducer, useEffect } from "react";
import contactStyle from "../styles/Contact.module.sass";
import NesContainer from "../components/NesContainer";

const directions = ['left', 'right']
function reducer(state, action) {
  switch (action.type) {
    case directions[0]:
      switch (state.selected) {
        case 'github':
          return {selected: 'linkedin'};;
        case 'linkedin':
          return {selected: 'github'};
        default: 
          return initialState;
      }
    case directions[1]:
      switch (state.selected) {
        case 'github':
          return {selected: 'linkedin'};
        case 'linkedin':
          return initialState;
        default: 
          return initialState;
      }   
    case 'opposite':
      switch (state.selected) {
        case 'github':
          return {selected: 'linkedin'};
        case 'linkedin':
          return {selected: 'github'};
        default: 
          return initialState;
      }
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}
const initialState = {selected:"github"};
const Contact = () => {
  function makeSelectSound(frequency) {
    const audio = new (window.AudioContext || window.webkitAudioContext)()
    const gainNode = audio.createGain()
    gainNode.gain.value = 0.05
    gainNode.connect(audio.destination)
    const oscillator = audio.createOscillator();
    oscillator.type = 'square';
    oscillator.connect(gainNode);
    oscillator.frequency.value = frequency;
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      //off by 1 millisecond in order to not trigger the set interval a fourth time and get an out of index error
    }, 150);
  }
// onKeyDown handler function
  const keyDownHandler = (event) => {
    if (event.code === "ArrowLeft") {
      makeSelectSound(110);
      dispatch({type:'left'});
    }
    if (event.code === "ArrowRight") {
      makeSelectSound(147);
      dispatch({type:'right'});
    }
  };

  const handleClick = (event) => {
    makeSelectSound(165);
    dispatch({type:'opposite'});
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler, false);
    return () => window.removeEventListener('keydown', keyDownHandler, false);
  }, []);

  return (
    <NesContainer title="Contact">
      <div className={contactStyle.iconContainer}>
        <div className={`${state.selected === 'github' ? contactStyle.selected : contactStyle.unselected} ${contactStyle.icon}`}>
          <a title="GitHub" href="https://github.com/lritter79">
            <i className="nes-icon github is-large"></i>
          </a>
        </div>
        <div className={`${state.selected === 'linkedin' ? contactStyle.selected : contactStyle.unselected} ${contactStyle.icon}`}>
          <a title="Linkedin" href="https://www.linkedin.com/in/levon-ritter/">
            <i className="nes-icon linkedin is-large"></i>
          </a>
        </div>
        
      </div>
      <div onClick={handleClick}>
        {state.selected}
      </div>
    </NesContainer>
  );
};

export default React.memo(Contact);
