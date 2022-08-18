import React, { useState, useEffect } from "react"

import ComponentOne from "./ComponentOne"

const ToggleButton = (props) => {

    const [buttonState, changeState] = useState({
        activeButton: null,
        buttons: [{button: 'Question 1'}, {button: 'Question 2'}, {button: 'Question 3'}]
    })

    function toggleActive(index) {
        // toggle button on and off
        if(buttonState.buttons[index] === buttonState.activeButton) {
            changeState({ ...buttonState, activeButton: null});
        } else {
            changeState({ ...buttonState, activeButton: buttonState.buttons[index]});
        }
        
        if(index === 0) {         // Question 1
            props.setQuestion("Question 1");
            buttonState.buttons[index] === buttonState.activeButton ? props.setLastNames([]) : props.setLastNames(props.lastNames);
        } else if(index === 1) {  // Question 2
            buttonState.buttons[index] === buttonState.activeButton ? props.setQuestion("") : props.setQuestion("Question 2");
            props.setLastNames([]);
        } else if(index === 2) {  // Question 3
            buttonState.buttons[index] === buttonState.activeButton ? props.setQuestion("") : props.setQuestion("Question 3");
            props.setLastNames([]);
        }
    }

    function toggleStyles(index) {
        return buttonState.buttons[index] === buttonState.activeButton ? "button-active" : "button-inactive";
    }

    return <div className="button-panel">
        {Object.values(buttonState.buttons).map((value, index) => (
            <button key={index} className={toggleStyles(index)} onClick={() => {toggleActive(index)}}>{value.button}</button>
        ))}
        </div>
}

const ComponentZero = ({setLastNames}) => {

    const [lastNamesList, setLastNamesList] = useState(null);
    useEffect(() => {
      getLastNames();
    }, []);
    
    const getLastNames = () => {
      fetch(process.env.REACT_APP_API)
        .then((res) => res.json())
        .then(
          (result) => {
            setLastNamesList(result['last_names']);
          },
          (error) => {
            console.log(error)          
            setLastNamesList(null);
          }
        );
    };

    const lastNames = lastNamesList === null ?  ['Smith','Taylor','Resco'] : lastNamesList   //use hardcoded lastnames when fetch fails
    const [question, setQuestion] = useState();
    return (
        <div className="base-panel">
            <p className="component-text">Component 0</p>
            <ToggleButton lastNames={lastNames} setLastNames={setLastNames} setQuestion={setQuestion}/>
            <ComponentOne lastNames={lastNames} question={question}/>
        </div>
    )
}

export default ComponentZero