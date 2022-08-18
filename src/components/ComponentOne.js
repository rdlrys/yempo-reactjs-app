import React from "react"

import ComponentTwo from "./ComponentTwo"

const ComponentOne = (props) => {
    return (
        <div className="component-one">
            <p className="component-text">Component 1</p>
            <ComponentTwo lastNames={props.lastNames} question={props.question}/>
        </div>
    )
}

export default ComponentOne