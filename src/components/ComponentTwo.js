import React from "react"

import ComponentThree from "./ComponentThree"

const ComponentTwo = (props) => {
    return (
        <div className="component-two">
            <p className="component-text">Component 2</p>
            <ComponentThree lastNames={props.lastNames} question={props.question}/>
        </div>
    )
}

export default ComponentTwo