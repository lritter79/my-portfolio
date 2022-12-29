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
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}
const initialState = {selected:"github"};
const Contact = () => {

// onKeyDown handler function
  const keyDownHandler = (event) => {
    if (event.code === "ArrowLeft") {
      dispatch({type:'left'}) 
    }
    if (event.code === "ArrowRight") {
      dispatch({type:'right'}) 
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler, false);
    return () => window.removeEventListener('keydown', keyDownHandler, false);
  }, []);

  return (
    <NesContainer title="Contact">
      <div className={contactStyle.iconContainer} onKeyDown={keyDownHandler}>
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
      <div>
        {state.selected}
      </div>
    </NesContainer>
  );
};

export default React.memo(Contact);
