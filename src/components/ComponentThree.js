import React from "react"

import ComponentFour from "./ComponentFour"

const ComponentThree = (props) => {
    return (
        <div className="component-three">
            <p className="component-text">Component 3</p>
            <ComponentFour lastNames={props.lastNames} question={props.question} />
        </div>
    )
}

export default ComponentThree