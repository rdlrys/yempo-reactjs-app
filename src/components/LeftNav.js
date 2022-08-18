import React from "react"

const LeftNav = ({lastNames}) => {
    return (
        <div className="left-nav">
            {lastNames.map((index) => (
            <div key={index} className="nav-item">{index}</div>
        ))}
        </div>
    )
}

export default LeftNav